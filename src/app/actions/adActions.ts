'use server';

import { auth } from '@/auth';
import { connect } from '@/libs/helpers';
import { ProductAdModel } from '@/models/ProductAd';
import { revalidatePath } from 'next/cache';

export async function createAd(formData: FormData) {
  const { files, adType, ...data } = Object.fromEntries(formData);
  const session = await auth();
  console.log(adType);
  await connect();

  const adDoc = {
    ...data,
    adType: adType as string,
    files: JSON.parse(files as string),
    userEmail: session?.user?.email,
  };

  const newAdd = await ProductAdModel.create(adDoc);
  return JSON.parse(JSON.stringify(newAdd));
}

export async function updateAd(formData: FormData) {
  const { _id, files, adType, ...data } = Object.fromEntries(formData);
  const session = await auth();
  await connect();
  const findAd = await ProductAdModel.findById(_id);
  if (!findAd || findAd?.userEmail !== session?.user?.email) {
    return;
  }

  const adDoc = {
    ...data,
    files: JSON.parse(files as string),
  };
  const updateAdd = await ProductAdModel.findByIdAndUpdate(_id, adDoc);
  revalidatePath(`/ad/` + _id);
  return JSON.parse(JSON.stringify(updateAdd));
}
