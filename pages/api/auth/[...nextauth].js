import NextAuth from "next-auth"
import CredentialProvider from "next-auth/providers/credentials";

export const authOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialProvider({
            type: 'credentials',
            credentials: {},
            //Function that executes when signin is called
            authorize(credentials, req){
                const {email, password} = credentials;

                //Add db logic here, to find the user  
                return {id: 1, name: "Name name", email: "email@gmail.com"}
            }
        })
    ],
    pages: {
        signIn: '/'
    }
  
}
export default NextAuth(authOptions)