import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import userService from "@/app/api/user/user.service";
import bcrypt from "bcrypt"

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [Credentials({
        async authorize(credentials) {
            if (credentials.email && credentials.password) {
                const { email, password } = credentials as { email: string, password: string }
                const user = await userService.getUser(email);
                if (!user) return null;

                const passwordsMatch = await bcrypt.compare(password, user.password)
                if(passwordsMatch) return user
            }
            return null
        },
    })]
});