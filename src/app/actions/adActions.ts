'use server';

import { auth } from '@/auth';
import { connect } from '@/libs/helpers';
import { ProductAdModel } from '@/models/ProductAd';

export async function createAd(formData: FormData) {
  const { files, ...data } = Object.fromEntries(formData);
  const session = await auth();
  await connect();

  const adDoc = {
    ...data,
    files: JSON.parse(files as string),
    userEmail: session?.user?.email,
  };
  const newAdd = await ProductAdModel.create(adDoc);
  return JSON.parse(JSON.stringify(newAdd));
}
