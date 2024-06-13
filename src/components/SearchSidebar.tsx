import { useRef } from 'react';
import Options from './Options';

import { categories, conditions } from '@/libs/helpers';
import SubmitBtn from './UI/SubmitBtn';

type SearchSidebarProps = {
  action: (data: FormData) => void;
};

export default function SearchSidebar({ action }: SearchSidebarProps) {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form action={action} ref={formRef} className="w-1/4 p-4 border-r">
      <input type="text" name="search" placeholder="Search..." />

      <Options
        disabled={false}
        onClick={() => formRef.current?.requestSubmit()}
        options={categories}
        label="Categories"
        name="category"
      >
        All Categories
      </Options>
      <Options
        disabled={false}
        onClick={() => formRef.current?.requestSubmit()}
        options={conditions}
        label="Conditions"
        name="condition"
      >
        All Conditions
      </Options>

      <div>
        <label>Filter by price</label>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input name="min" type="number" placeholder="min" />
          </div>
          <div>
            <input name="max" type="number" placeholder="max" />
          </div>
        </div>
      </div>
      <SubmitBtn>Search</SubmitBtn>
    </form>
  );
}
