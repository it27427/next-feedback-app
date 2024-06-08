const url = process.env.MONGODB_URI;
const key = process.env.RESEND_API_KEY;

const dev = {
  db: {
    url: url || 'mongodb://localhost:27017/mistry-messages',
  },
  api: {
    resendkey: key,
  },
};

export default dev;
