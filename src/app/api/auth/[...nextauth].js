import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";

const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      authorize: async (credentials, req) => {
        const {email , password} = credentials;
       if (email !== 'nikhil.developer@gmail.com' || password !== '1234') {
        return null
       }

       return {id : '1234' , name : 'nikhil' , email: 'niks@gmail.com'} 
    }
    }),
  ],
  pages :{
    signIn: '/admin',
    error: '/admin'
  }
};

export default NextAuth(authOptions);
