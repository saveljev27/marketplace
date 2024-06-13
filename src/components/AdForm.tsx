'use client';

import { useState } from 'react';
import ProductInputs, { AdInputText } from './Inputs/ProductInputs';
import SubmitBtn from './UI/SubmitBtn';
import { createAd, updateAd } from '@/app/actions/adActions';
import { redirect } from 'next/navigation';
import { UploadResponse } from 'imagekit/dist/libs/interfaces';
import UploadArea from './UploadArea';

type AdFormProps = {
  id?: string | null;
  defaultFiles?: UploadResponse[];
  defaultText?: AdInputText;
};

export default function AdForm({
  id = null,
  defaultFiles = [],
  defaultText = {},
}: AdFormProps) {
  const [files, setFiles] = useState<UploadResponse[]>(defaultFiles);

  async function handleSubmit(formData: FormData) {
    formData.set('files', JSON.stringify(files));
    if (id) {
      formData.set('_id', id);
    }
    const result = id ? await updateAd(formData) : await createAd(formData);
    redirect('/ad/' + result._id);
  }
  return (
    <form action={handleSubmit} className="flex gap-10">
      <div className="grow pt-4">
        <ProductInputs defaultValue={defaultText} />
        <SubmitBtn>{!id ? 'Save' : 'Update'}</SubmitBtn>
      </div>
      <div className="grow pt-12">
        <UploadArea files={files} setFiles={setFiles} />
      </div>
    </form>
  );
}
