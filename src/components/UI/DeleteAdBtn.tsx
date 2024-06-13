'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function DeleteAdBtn({ id }: { id: string }) {
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const router = useRouter();

  function handleDelete() {
    fetch(`/api/ads?id=${id}`, {
      method: 'DELETE',
    }).then(() => {
      setShowDeleteAlert(false), router.push('/');
    });
  }

  if (showDeleteAlert) {
    return (
      <div className="flex gap-2 justify-center items-center">
        <button
          className="border bg-red-500 text-white py-1 px-4 rounded-md"
          onClick={handleDelete}
        >
          Are you sure?
        </button>
        <button
          className="border bg-green-500 text-white py-1 px-4 rounded-md"
          onClick={() => setShowDeleteAlert(false)}
        >
          No
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => setShowDeleteAlert(true)}
      className="border border-red-500 py-1 px-4 rounded-md"
    >
      Delete
    </button>
  );
}
