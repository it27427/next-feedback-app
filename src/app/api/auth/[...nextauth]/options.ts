import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import connectionDB from '@/lib/db.connection';
import UserModel from '@/model/User.model';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: any): Promise<any> {
        await connectionDB();

        try {
          const user = await UserModel.findOne({
            $or: [
              { email: credentials.identifier.email },
              { username: credentials.identifier.username },
            ],
          });

          if (!user) {
            throw new Error('No user found with this email.');
          }

          if (!user.isVerified) {
            throw new Error('Please verify your account first.');
          }
        } catch (error: any) {
          throw new Error(error);
        }
      },
    }),
  ],
};
