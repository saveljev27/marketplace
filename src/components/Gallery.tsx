'use client';
import { UploadResponse } from 'imagekit/dist/libs/interfaces';
import UploadView from './UploadView';
import UploadThumbnail from './UploadThumbnail';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

export default function Gallery({ files }: { files: UploadResponse[] }) {
  const [activeFile, setActiveFile] = useState<UploadResponse | null>(
    files?.[0] || null
  );
  function next() {
    const activeFileIndex = files.findIndex(
      (f) => f.fileId === activeFile?.fileId
    );
    const nextIndex =
      activeFileIndex === files.length - 1 ? 0 : activeFileIndex + 1;
    const nextFile = files[nextIndex];
    setActiveFile(nextFile);
  }
  function prev() {
    const activeFileIndex = files.findIndex(
      (f) => f.fileId === activeFile?.fileId
    );
    const prevIndex =
      activeFileIndex === 0 ? files.length - 1 : activeFileIndex - 1;
    const prevFile = files[prevIndex];
    setActiveFile(prevFile);
  }
  return (
    <>
      <div className="grow flex items-center relative shadow-md">
        {activeFile && (
          <>
            <div className="absolute inset-4 flex items-center justify-center">
              <UploadView file={activeFile} />
            </div>
            <div className="absolute inset-4 flex items-center">
              <div className="flex justify-between w-full">
                <button
                  onClick={prev}
                  className="rounded-full size-12 flex justify-center items-center transition bg-gray-500/40 hover:bg-gray-500/80"
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button
                  onClick={next}
                  className="rounded-full size-12 flex justify-center items-center transition bg-gray-500/40 hover:bg-gray-500/80"
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="p-4 flex gap-4 justify-center relative z-10">
        {files.map((file) => (
          <div
            key={file.fileId}
            className="size-14 cursor-pointer rounded overflow-hidden border"
          >
            <UploadThumbnail onClick={() => setActiveFile(file)} file={file} />
          </div>
        ))}
      </div>
    </>
  );
}
