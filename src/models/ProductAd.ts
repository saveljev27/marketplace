import { UploadResponse } from 'imagekit/dist/libs/interfaces';
import { Model, Schema, model, models } from 'mongoose';

export type ProductAd = {
  _id: string;
  title: string;
  price: number;
  category: string;
  condition: string;
  description: string;
  contact: string;
  files: UploadResponse[];
  userEmail: string;
};

const ProductAdSchema = new Schema<ProductAd>(
  {
    title: String,
    price: Number,
    category: String,
    condition: String,
    description: String,
    contact: String,
    files: [Object],
    userEmail: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const ProductAdModel =
  (models?.ProductAd as Model<ProductAd>) ||
  model<ProductAd>('ProductAd', ProductAdSchema);
