
import instance from "../../../lib/axios/instance";

const userServices = {
    getAllUser : () => {
        return instance.get('/api/user');
    },
    updateUser : (id, data) => {
        return instance.put(`/api/user?id=${id}`, {data});
    }

}

export default userServices;