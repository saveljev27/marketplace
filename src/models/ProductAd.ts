import { UploadResponse } from 'imagekit/dist/libs/interfaces';
import { Model, Schema, model, models } from 'mongoose';

export type ProductAd = {
  _id: string;
  title?: string;
  make?: string;
  model?: string;
  year?: string;
  mileage?: string;
  price: number;
  category?: string;
  condition?: string;
  bodystyle?: string;
  fueltype?: string;
  transmission?: string;
  description?: string;
  contact?: string;
  adType: string;
  files: UploadResponse[];
  userEmail: string;
};

const ProductAdSchema = new Schema<ProductAd>(
  {
    title: String,
    make: String,
    model: String,
    year: String,
    mileage: String,
    price: Number,
    category: String,
    condition: String,
    bodystyle: String,
    fueltype: String,
    transmission: String,
    description: String,
    contact: String,
    adType: String,
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
