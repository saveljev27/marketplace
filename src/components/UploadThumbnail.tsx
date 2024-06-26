import { UploadResponse } from 'imagekit/dist/libs/interfaces';
import { MouseEvent } from 'react';
import MyImage from './MyImage';

type Props = {
  file: UploadResponse;
  onClick?: () => void;
};

export default function UploadThumbnail({ file, onClick }: Props) {
  function handleClick(ev: MouseEvent) {
    if (onClick) {
      ev.preventDefault();
      return onClick();
    }
  }
  if (file.fileType === 'image') {
    return (
      <a onClick={handleClick} target="_blank">
        <MyImage
          alt={'thumbnail'}
          width={300}
          height={300}
          aiCrop={true}
          src={file.filePath}
          className="hover:opacity-85"
        />
      </a>
    );
  }

  return <div>{file.url}</div>;
}
