import { z } from 'zod';

export const usernameValidation = z
  .string()
  .min(3, 'Username must be atleast 3 characters.')
  .max(30, 'Username must be less than 30 characters.')
  .regex(
    /(?!.*[\.\-\_]{2,})^[a-zA-Z0-9\.\-\_]{3,24}$/gm,
    'Username must not contain special characters'
  );

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' })
    .max(30, { message: 'Password must be less than 30 characters' }),
});
