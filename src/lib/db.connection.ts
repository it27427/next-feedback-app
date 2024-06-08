import mongoose from 'mongoose';

import config from '@/config/config';

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

const connectionDB = async (): Promise<void> => {
  if (connection.isConnected) {
    console.log('Already connected to database');
    return;
  }

  try {
    const url: string = config.db.url;
    const db = await mongoose.connect(url, {
      dbName: 'MISTRY-MESSAGES',
    });
    connection.isConnected = db.connections[0].readyState;
    console.log('Database Connected Successfully!');
  } catch (error) {
    console.error('Database Connection Failed!', error);
    process.exit(1);
  }
};

export default connectionDB;
