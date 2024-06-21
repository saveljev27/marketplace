'use client';

import { categories, conditions } from '@/libs/helpers';
import Options from '../Options';
import { useState } from 'react';

export type ProductInputText = {
  title?: string;
  price?: number;
  category?: string;
  condition?: string;
  description?: string;
  contact?: string;
};

type Props = {
  defaultValue: ProductInputText;
};

export default function ProductInputs({ defaultValue }: Props) {
  const [price, setPrice] = useState(defaultValue.price || '');

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;
    value = value.replace(',', '.');
    const regex = /^\d*\.?\d{0,2}$/;
    if (regex.test(value)) {
      setPrice(value);
    }
  };

  return (
    <>
      <label htmlFor="title">
        Title <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="title"
        placeholder="Title"
        defaultValue={defaultValue.title}
        required
      />

      <label htmlFor="price">
        Price (use dot) <span className="text-red-500">*</span>
      </label>
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={price}
        onChange={handlePriceChange}
        required
      />

      <Options
        label="Categories"
        options={categories}
        name="category"
        defaultVal={defaultValue.category}
        required={true}
      />

      <Options
        label="Condition"
        options={conditions}
        name="condition"
        defaultVal={defaultValue.condition}
        required={true}
      />

      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        placeholder="Description (max 2000 characters)"
        maxLength={2000}
        defaultValue={defaultValue.description}
      ></textarea>

      <label htmlFor="contact">
        Contacts <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="contact"
        placeholder="Contact"
        defaultValue={defaultValue.contact}
        required
      />
    </>
  );
}
