import { ReactNode } from 'react';
import { useFormStatus } from 'react-dom';

export default function SubmitBtn({ children }: { children: ReactNode }) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className={
        (pending ? 'bg-gray-400' : ' bg-blue-500') +
        ' py-2 px-8 mt-2 rounded-md text-white '
      }
    >
      {pending && <span>Saving...</span>}
      {!pending && <span>{children}</span>}
    </button>
  );
}
