import connectionDB from '@/lib/db.connection';
import UserModel from '@/model/User.model';
// import bcrypt from 'bcryptjs';

// import { sendVerificationEmail } from '@/helpers/sendVerificationEmail';

export const POST = async (req: Request) => {
  await connectionDB();

  try {
    const { username, email, password } = await req.json();
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

    if (existingVerifiedByEmail) {
      Response.json(
        {
          success: false,
          message: 'Email already exists.',
        },
        { status: 400 }
      );
    }
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
