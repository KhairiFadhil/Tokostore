import { Firestore, addDoc, collection, doc, getDocs, getFirestore, where, query, updateDoc } from "firebase/firestore";
import app from "./init";
import bcrypt from "bcrypt"

const db = getFirestore(app);

export const retrieveData = async (collectionName, id) => {
  const snapshot = await getDocs(collection(db, collectionName));
  const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return data;
};

export async function retrieveDataById(collectionName, id){
    const snapshot = await getDocs(doc(db, collectionName, id));
    const data = snapshot.data
    return data
}

export async function retrieveDataByField(collectionName, field, value){
    const q = query(collection(db, collectionName), 
    where(field, "==", value)
    );
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => 
        ({ id: doc.id, ...doc.data() }));
    return data;
}

export async function updateData(collectionName, id, data, callback){
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, data)
    .then(() => {
        callback(true)
    })
    .catch((error) => {
        callback(false)
    });
}

export async function Login(
    userData = { email, password }
){
  const user = await retrieveDataByField('users', 'email', userData.email)
    if (user && user[0].type){
        return user[0];
    }else{
        null
    }
}
export async function LoginWithGoogle(
    userData, 
    callback
){
    const user = await retrieveDataByField('users', 'email', userData.email)
    if (user.length > 0){
        return callback({ status: true, data: user[0], statusCode: 200 });
    }else {
        userData.updated_at = new Date()
        userData.created_at = new Date()
        userData.password = ''
        userData.role = 'member'
        await addDoc(collection(db, 'users'), userData).then( () => {
            return callback({status: true, data: userData, statusCode: 200})
        })
    }
}
export async function signUp(userData = { 
    email,
    fullname,
    phone,
    password,
    role,
    updated_at,
    type,
    created_at,
    updated_at
}){
    const user = await retrieveDataByField('users', 'email', userData.email)
    if (user.length > 0) {
        return { statusCode: 400 ,status: false , message:"User already exist"}
    } else {
        userData.updated_at = new Date()
        userData.created_at = new Date()
        if(!userData.type){
            userData.type = 'nonGoogle'
        }
        if(!userData.role){
            userData.role = "member"
        }
        userData.password = await bcrypt.hash(userData.password, 10)
        try{
            await addDoc(collection(db, 'users'), userData)
            return { statusCode: 200 ,status: true, messageLogin: 'Register Success'}
        } catch(error){
            return { statusCode: 500 ,status: false , message: error};
            }    
        }
    }
        
    