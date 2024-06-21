import { ReactNode } from 'react';
import { useFormStatus } from 'react-dom';

export default function SubmitBtn({ children }: { children: ReactNode }) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className={(pending ? 'pending_btn' : 'main_btn') + ' py-2 px-8 mt-2'}
    >
      {pending && <span>Saving...</span>}
      {!pending && <span>{children}</span>}
    </button>
  );
}
