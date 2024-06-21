import { icon } from '@fortawesome/fontawesome-svg-core';
import { faCar, faMobile } from '@fortawesome/free-solid-svg-icons';
import { UploadResponse } from 'imagekit/dist/libs/interfaces';
import mongoose from 'mongoose';

// Connection to DB
export async function connect() {
  return mongoose.connect(process.env.MONGODB_URL as string);
}

export const addtype = [
  {
    key: 'car',
    label: 'Cars',
    icon: faCar,
  },
  {
    key: 'product',
    label: 'Products',
    icon: faMobile,
  },
];

export const categories: Record<string, string> = {
  garden: 'Garden',
  entertainment: 'Entertainment',
  clothing: 'Clothing',
  accessories: 'Accessories',
  family: 'Family',
  electronics: 'Electronics',
  hobbies: 'Hobbies',
  classifields: 'Classifields',
};

export const vehiclecategories: Record<string, string> = {
  car: 'Car',
  truck: 'Truck',
  motorcycle: 'Motorcycle',
  powersport: 'Powersport',
  camper: 'Camper',
  boat: 'Boat',
  commercial: 'Commercial',
  othertype: 'Other',
};

export const bodystyle: Record<string, string> = {
  coupe: 'Coupe',
  truck: 'Truck',
  sedan: 'Sedan',
  hatchback: 'Hatchback',
  suv: 'SUV',
  convertible: 'Convertible',
  wagon: 'Wagon',
  minivan: 'Minivan',
  smallcar: 'Small',
  moto: 'Moto',
  other: 'Other',
};

export const fueltype: Record<string, string> = {
  diesel: 'Diesel',
  electic: 'Electic',
  gasoline: 'Gasoline',
  hybrid: 'Hybrid',
};

export const transmission: Record<string, string> = {
  automatic: 'Automatic',
  manual: 'Manual',
};

export const conditions: Record<string, string> = {
  new: 'New',
  good: 'Good',
  fair: 'Fair',
};

export function formatMoney(amount: number): string {
  return Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount);
}
