import connectionDB from '@/lib/db.connection';
import UserModel from '@/model/User.model';
import { usernameValidation } from '@/schemas/signUpSchema';
import { z } from 'zod';

const UsernameQuerySchema = z.object({
  username: usernameValidation,
});

export async function GET(request: Request) {
  await connectionDB();

  try {
    const { searchParams } = new URL(request.url);
    const queryparam = {
      username: searchParams.get('username'),
    };
    // Validation with zod
    const result = UsernameQuerySchema.safeParse(queryparam);
    console.log(result);

    if (!result.success) {
      const usernameErrors = result.error.format().username?._errors || [];

      return Response.json(
        {
          success: false,
          message:
            usernameErrors.length > 0
              ? usernameErrors.join(', ')
              : 'Invalid query parameters',
        },
        { status: 400 }
      );
    }

    const { username } = result.data;

    const existingVerifiedUser = await UserModel.findOne({
      username,
      isVerified: true,
    });

    if (existingVerifiedUser) {
      return Response.json(
        {
          success: false,
          message: 'Username already taken.',
        },
        { status: 400 }
      );
    }

    return Response.json(
      {
        success: true,
        message: 'Username is unique.',
      },
      { status: 400 }
    );
  } catch (error) {
    console.error('Error checking username', error);
    return Response.json(
      {
        success: false,
        message: 'Error checking username',
      },
      { status: 500 }
    );
  }
}
