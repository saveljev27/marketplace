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

export const conditions: Record<string, string> = {
  new: 'New',
  usedLikenew: 'Used - Like New',
  usedGood: 'Used - Good',
  usedFair: 'Used - Fair',
};

export function formatMoney(amount: number): string {
  return Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount);
}
