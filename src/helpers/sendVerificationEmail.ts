import { resend } from '@/lib/resend';
import { ApiResponse } from '@/types/ApiResponse';
import VerificationEmail from '../../emails/VerificationEmail';

export const sendVerificationEmail = async (
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> => {
  try {
    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: email,
      subject: 'Mystry message | Verification Code',
      react: VerificationEmail({ username, otp: verifyCode }),
    });

    return {
      success: true,
      message: 'Verification email send successfully!',
    };
  } catch (error) {
    console.error('Error sending verification email.', error);
    return {
      success: false,
      message: 'Failed to send verification email.',
    };
  }
};
