import mongoose, { Schema, Document } from 'mongoose';

export interface Message extends Document {
  content: String;
  createdAt: Date;
}

const messageSchema: Schema<Message> = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export interface User extends Document {
  username: String;
  email: String;
  phone: String;
  password: String;
}
