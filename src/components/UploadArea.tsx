'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { Dispatch, SetStateAction, useState } from 'react';

import Uploader from './Uploader';
import { UploadResponse } from 'imagekit/dist/libs/interfaces';
import UploadThumbnail from './UploadThumbnail';

type Props = {
  files: UploadResponse[];
  setFiles: Dispatch<SetStateAction<UploadResponse[]>>;
};

export default function UploadArea({ files, setFiles }: Props) {
  const [isUploading, setIsUploading] = useState(false);
  return (
    <div className="bg-gray-200 rounded-md py-4 px-6">
      <div className="flex flex-col">
        <FontAwesomeIcon icon={faImage} className="h-20" />
        <h2 className="text-center text-gray-500 text-xs mt-4">
          Add Photos of Your Product
        </h2>
        <label
          className={
            'upload-btn py-2 px-4 mt-2 text-center rounded ' +
            (isUploading
              ? 'bg-gray-400 text-gray-300 cursor-not-allowed'
              : 'bg-blue-500 text-white cursor-pointer')
          }
        >
          <Uploader
            onUploadStart={() => setIsUploading(true)}
            onSuccess={(file) => {
              setFiles((prev) => [...prev, file]);
              setIsUploading(false);
            }}
          />
          {isUploading ? <span>Uploading...</span> : <span>Add photos</span>}
        </label>
        <div className="flex flex-wrap gap-3 justify-center mt-3">
          {files.map((file) => (
            <div className="size-16 rounded overflow-hidden">
              <UploadThumbnail file={file} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
