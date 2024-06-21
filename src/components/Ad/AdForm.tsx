'use client';

import { useState } from 'react';
import ProductInputs, { ProductInputText } from '../Inputs/ProductInputs';
import CarInputs, { CarInputText } from '../Inputs/CarInputs';
import SubmitBtn from '../UI/SubmitBtn';
import { createAd, updateAd } from '@/app/actions/adActions';
import { redirect } from 'next/navigation';
import { UploadResponse } from 'imagekit/dist/libs/interfaces';
import UploadArea from '../UploadArea';

type AdFormProps = {
  id?: string | null;
  defaultFiles?: UploadResponse[];
  defaultText?: ProductInputText | CarInputText;
  type?: string | null;
};

export default function AdForm({
  id = null,
  defaultFiles = [],
  defaultText = {},
  type,
}: AdFormProps) {
  const [files, setFiles] = useState<UploadResponse[]>(defaultFiles);
  const [photoValid, setPhotoValid] = useState(true);

  console.log(type);

  async function handleSubmit(formData: FormData) {
    if (files.length === 0) {
      setPhotoValid(false);
      return;
    }
    formData.set('files', JSON.stringify(files));
    if (id) {
      formData.set('_id', id);
    }
    if (type) {
      formData.set('adType', type);
    }
    const result = id ? await updateAd(formData) : await createAd(formData);
    redirect('/ad/' + result._id);
  }
  let switchComponent;

  switch (type) {
    case 'product':
      switchComponent = <ProductInputs defaultValue={defaultText} />;
      break;
    case 'car':
      switchComponent = <CarInputs defaultValue={defaultText} />;
      break;
    default:
      console.log('Error');
      switchComponent = null;
  }

  return (
    <form action={handleSubmit} className="flex gap-10">
      <div className="grow pt-4">
        {!photoValid && (
          <div className="alert">"Please upload at least one photo".</div>
        )}
        {switchComponent}
        <SubmitBtn>{!id ? 'Save' : 'Update'}</SubmitBtn>
      </div>
      <div className="grow pt-12">
        <UploadArea files={files} setFiles={setFiles} />
      </div>
    </form>
  );
}
