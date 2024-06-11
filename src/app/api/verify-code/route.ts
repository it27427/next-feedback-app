import connectionDB from '@/lib/db.connection';
import UserModel from '@/model/User.model';

export async function POST(request: Request) {
  await connectionDB();

  try {
    const { username, code } = await Response.json({});
  } catch (error) {
    console.error('Error verifying user', error);
    return Response.json(
      {
        success: false,
        message: 'Error verifying user',
      },
      { status: 500 }
    );
  }
}
