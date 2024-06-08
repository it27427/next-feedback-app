const url = process.env.MONGODB_URI;

const dev = {
  db: {
    url: url || 'mongodb://localhost:27017/mistry-messages',
  },
};

export default dev;
