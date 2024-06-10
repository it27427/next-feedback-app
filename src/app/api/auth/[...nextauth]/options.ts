import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import connectionDB from '@/lib/db.connection';
import UserModel from '@/model/User.model';
