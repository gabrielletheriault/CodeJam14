import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

import { User } from "./model/user-model";
import bcrypt from "bcryptjs";


export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    session: {
      strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                if (!credentials || !credentials.email || !credentials.password) {
                    throw new Error("Missing credentials");
                }
                
                try {
                    const user = await User.findOne({
                        email: credentials?.email
                    })
                    console.log(user);
                    if (user) {
                        const isMatch = await bcrypt.compare(
                            credentials.password,
                            user.password
                        );

                        if (isMatch) {
                            return user;
                        } else {
                            throw new Error("Email or Password is not correct");
                        }
                    } else {
                        throw new Error("User not found");
                    }
                } catch (error: any) {
                    console.error(error.message);
                    throw new Error("Authentication failed");
                }
            },
        }),
    ],
});