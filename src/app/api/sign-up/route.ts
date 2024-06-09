import connectionDB from '@/lib/db.connection';
import UserModel from '@/model/User.model';
import bcrypt from 'bcryptjs';

import { sendVerificationEmail } from '@/helpers/sendVerificationEmail';

export const POST = async (req: Request) => {
  await connectionDB();

  try {
    const { username, email, phoneNumber, password } = await req.json();
    const existingVerifiedByUsername = await UserModel.findOne({
      username,
      isVerified: true,
    });

    if (existingVerifiedByUsername) {
      Response.json(
        {
          success: false,
          message: 'Username already exists.',
        },
        { status: 400 }
      );
    }

    const existingVerifiedByEmail = await UserModel.findOne({ email });
    const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();

    if (existingVerifiedByEmail) {
      Response.json(
        {
          success: false,
          message: 'Email already exists.',
        },
        { status: 400 }
      );
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const expiryDate = new Date();
      expiryDate.setHours(expiryDate.getHours() + 1);

      const newUser = new UserModel({
        username,
        email,
        phoneNumber,
        password: hashedPassword,
        verifyCode,
        verifyCodeExpiry: expiryDate,
        isVerified: false,
        isAcceptingMessage: true,
        messages: [],
      });

      await newUser.save();
    }

    await sendVerificationEmail(username, email, verifyCode);
  } catch (error) {
    console.error('Error registering user', error);
    return Response.json(
      {
        success: false,
        message: 'Error registering user',
      },
      { status: 500 }
    );
  }
};
