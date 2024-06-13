'use client';

import { categories, conditions } from '@/libs/helpers';
import Options from '../Options';
import { useState } from 'react';

export type AdInputText = {
  title?: string;
  price?: number;
  category?: string;
  condition?: string;
  description?: string;
  contact?: string;
};

type Props = {
  defaultValue: AdInputText;
};

export default function ProductInputs({ defaultValue }: Props) {
  const [price, setPrice] = useState(defaultValue.price || '');

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;
    console.log(value);
    value = value.replace(',', '.');
    const regex = /^\d*\.?\d{0,2}$/;
    if (regex.test(value)) {
      setPrice(value);
    }
  };

  return (
    <>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        placeholder="Title"
        defaultValue={defaultValue.title}
      />

      <label htmlFor="price">Price</label>
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={price}
        onChange={handlePriceChange}
      />

      <Options
        label="Categories"
        options={categories}
        name="category"
        defaultVal={defaultValue.category}
      />

      <Options
        label="Condition"
        options={conditions}
        name="condition"
        defaultVal={defaultValue.condition}
      />

      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        placeholder="Description"
        defaultValue={defaultValue.description}
      ></textarea>

      <label htmlFor="contact">Contacts</label>
      <input
        type="text"
        name="contact"
        placeholder="Contact"
        defaultValue={defaultValue.contact}
      />
    </>
  );
}
