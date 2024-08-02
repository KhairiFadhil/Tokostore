import { Login, LoginWithGoogle } from "@/lib/firebase/service";
import { compare } from "bcrypt";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
const handler = NextAuth({
  session: {
    strategy: "jwt",
    secret: process.env.NEXTAUTH_SECRET,
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        const user = await Login({ email, password });
        if (user) {
          const passwordCompare = await compare(password, user.password);
          if (passwordCompare) {
            return user;
          } else {
            return null;
          }
        } else {
          return null;
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    })
  ],
  callbacks: {
    async jwt({ token, account, user, profile }) {
      
      if (account?.provider === "credentials") {
        token.email = user.email;
        token.role = user.role;
        token.fullname = user.fullname;
        
      }
      if (account?.provider === "google"){
        const data = {
          email : user.email,
          fullname : user.name,
          type : 'google' 
        };
        await LoginWithGoogle(
          data, 
          (result) => {
            console.log(result)
          if (result.status){
            token.email = result.data.email;
            token.role = result.data.role;
            token.fullname = result.data.fullname;
          }
        })
      }
      return token;
    },
    async session({ session, token }) {
      if ("email" in token) {
        session.user.email = token.email;
      }
      if ("role" in token) {
        session.user.role = token.role;
      }
      if ("fullname" in token) {
        session.user.fullname = token.fullname;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
