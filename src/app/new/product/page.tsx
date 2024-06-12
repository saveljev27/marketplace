'use client';
import { UploadResponse } from 'imagekit/dist/libs/interfaces';
import { useState } from 'react';
import UploadArea from '@/components/UploadArea';
import ProductInputs from '@/components/Inputs/ProductInputs';
import { createAd } from '@/app/actions/adActions';
import SubmitBtn from '@/components/UI/SubmitBtn';
import { redirect } from 'next/navigation';

export default function ProductAdd() {
  const [files, setFiles] = useState<UploadResponse[]>([]);

  async function handleSubmit(formData: FormData) {
    formData.set('files', JSON.stringify(files));
    const result = await createAd(formData);
    redirect('/ad/' + result._id);
  }

  return (
    <form
      action={handleSubmit}
      className="max-w-xl mx-auto grid grid-cols-2 gap-10"
    >
      <div className="grow pt-4">
        <ProductInputs />
        <SubmitBtn>Submit</SubmitBtn>
      </div>
      <div className="grow pt-12">
        <UploadArea files={files} setFiles={setFiles} />
      </div>
    </form>
  );
}
