import { connect } from "@/lib/connectDB";
import NextAuth from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";

const handler= 
  NextAuth({
 session:{
  jwt:true
 },
  providers: [
    CredentialsProvider({
      
      async authorize(credentials, req) {
        // Add your logic here to validate the credentials
        // For example, check the credentials against a database
        const connectt = await connect();
        const usercollection = connectt.db("portfolio").collection("auth");
        const user = await usercollection.findOne({ email: credentials.email });
        if (!user) {
          throw new Error("no user found");
        }
        
        return {
          email: user.email,
        }; 
      
      },
    }),
  ],
});
export  {handler as GET,handler as POST}