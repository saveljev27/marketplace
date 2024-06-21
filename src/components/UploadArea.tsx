'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Dispatch, MouseEventHandler, SetStateAction, useState } from 'react';

import Uploader from './Uploader';
import { UploadResponse } from 'imagekit/dist/libs/interfaces';
import UploadThumbnail from './UploadThumbnail';

type Props = {
  files: UploadResponse[];
  setFiles: Dispatch<SetStateAction<UploadResponse[]>>;
};

export default function UploadArea({ files, setFiles }: Props) {
  const [isUploading, setIsUploading] = useState(false);
  const [photoValid, setPhotoValid] = useState(true);

  const handleDeletePhoto = (fileId: string) => {
    if (files.length <= 1) {
      setPhotoValid(false);
      return;
    }
    setFiles((prevPhoto) => prevPhoto.filter((file) => file.fileId !== fileId));
  };

  return (
    <div
      className={
        (!photoValid ? 'border border-red-500' : '') +
        ' bg-gray-200 rounded-md py-4 px-6'
      }
    >
      <div className="flex flex-col">
        <FontAwesomeIcon icon={faImage} className="h-20" />
        <div className="text-center text-gray-500 text-xs mt-4">
          {!photoValid ? (
            <h2 className="text-center text-red-500 text-xs mt-4 font-bold">
              "You need at least one photo in your ad."
            </h2>
          ) : (
            <h2 className="text-center text-gray-500 text-xs mt-4 font-bold">
              Add Photos of Your Product <span className="text-red-500">*</span>
            </h2>
          )}
        </div>
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
              setPhotoValid(true);
            }}
          />
          {isUploading ? <span>Uploading...</span> : <span>Add photos</span>}
        </label>
        <div className="flex flex-wrap gap-3 justify-center mt-3">
          {files.map((file) => (
            <div
              key={file.fileId}
              className="relative size-16 rounded overflow-hidden group"
            >
              <UploadThumbnail file={file} />
              <div
                className="absolute top-5 right-6 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                onClick={() => handleDeletePhoto(file.fileId)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
