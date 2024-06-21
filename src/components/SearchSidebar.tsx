'use client';

import { useRef, useState } from 'react';

import { faStore } from '@fortawesome/free-solid-svg-icons/faStore';

import Options from './Options';
import {
  categories,
  conditions,
  addtype,
  vehiclecategories,
  bodystyle,
} from '@/libs/helpers';
import SubmitBtn from './UI/SubmitBtn';
import LabelRadioButton from './UI/RadioBtn';

type SearchSidebarProps = {
  action: (data: FormData) => void;
};

export default function SearchSidebar({ action }: SearchSidebarProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [selectedType, setSelectedType] = useState(null);

  const handleReset = () => {
    formRef.current?.reset();
    setTimeout(() => {
      formRef.current?.requestSubmit();
    }, 0);
  };

  const handleRadioButtonClick = (categoryKey: any) => {
    setSelectedType(categoryKey);
    formRef.current?.requestSubmit();
  };

  return (
    <form action={action} ref={formRef} className="w-1/4 p-4 border-r">
      <input type="text" name="search" placeholder="Search..." />

      <div className="flex flex-col gap-1 mt-2">
        <LabelRadioButton
          name={'type'}
          value={''}
          icon={faStore}
          onClick={() => handleRadioButtonClick('')}
          label={'All categories'}
          defaultChecked={true}
        />
        {addtype.map(({ key: categoryKey, label, icon }) => (
          <LabelRadioButton
            key={categoryKey}
            name={'type'}
            value={categoryKey}
            icon={icon}
            onClick={() => handleRadioButtonClick(categoryKey)}
            label={label}
          />
        ))}
      </div>
      {selectedType === 'product' && (
        <>
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
        </>
      )}
      {selectedType === 'car' && (
        <>
          <Options
            disabled={false}
            onClick={() => formRef.current?.requestSubmit()}
            options={vehiclecategories}
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
          <Options
            disabled={false}
            onClick={() => formRef.current?.requestSubmit()}
            options={bodystyle}
            label="Body Style"
            name="bodystyle"
          >
            All Body
          </Options>
        </>
      )}

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
      <div className="flex justify-between">
        <SubmitBtn>Search</SubmitBtn>
        <button onClick={handleReset} className="outline_btn mt-2">
          Reset
        </button>
      </div>
    </form>
  );
}
