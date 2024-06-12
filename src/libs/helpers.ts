import { UploadResponse } from 'imagekit/dist/libs/interfaces';
import mongoose from 'mongoose';

// Connection to DB
export async function connect() {
  return mongoose.connect(process.env.MONGODB_URL as string);
}

export const categories: Record<string, string> = {
  garden: 'Garden',
  entertainment: 'Entertainment',
  clothing: 'Clothing & Accessories',
  family: 'Family',
  electronics: 'Electronics',
  hobbies: 'Hobbies',
  classifields: 'Classifields',
};
