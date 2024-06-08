import config from '@/config/config';
import mongoose from 'mongoose';

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

// MISTRY-MESSAGES
const connectionDB = async (): Promise<void> => {
  if (connection.isConnected) {
    console.log('Already connected to database');
    return;
  }

  try {
    const url: string = config.db.url;
    await mongoose.connect(url, {
      dbName: 'MISTRY-MESSAGES',
    });
  } catch (error) {}
};

export default connectionDB;
