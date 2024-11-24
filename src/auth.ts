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
                email: { label: "Email", type: "email", placeholder: "email@example.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                // Ensure `credentials` is defined
                if (!credentials || !credentials.email || !credentials.password) {
                    throw new Error("Missing credentials");
                }

                try {
                    // Find the user in the database
                    const user = await User.findOne({
                        email: credentials.email
                    });
                    console.log(user);

                    // If user exists, validate the password
                    if (user) {
                        const isMatch = await bcrypt.compare(
                            credentials.password,
                            user.password
                        );

                        if (isMatch) {
                            return {
                                id: user.id,
                                name: user.name,
                                email: user.email,
                            };
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
