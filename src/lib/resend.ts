import config from '@/config/config';
import { Resend } from 'resend';

const key = config.api.resendkey;

export const resend = new Resend(key);
