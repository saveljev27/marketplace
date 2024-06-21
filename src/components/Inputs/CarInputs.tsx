'use client';

import {
  vehiclecategories,
  bodystyle,
  fueltype,
  transmission,
  conditions,
} from '@/libs/helpers';
import Options from '../Options';
import { useState } from 'react';

export type CarInputText = {
  make?: string;
  model?: string;
  year?: string;
  mileage?: string;
  price?: number;
  category?: string;
  bodystyle?: string;
  condition?: string;
  fueltype?: string;
  transmission?: string;
  description?: string;
  contact?: string;
};

type Props = {
  defaultValue: CarInputText;
};

export default function CarInputs({ defaultValue }: Props) {
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
      <Options
        label="Vehicle type"
        options={vehiclecategories}
        name="category"
        defaultVal={defaultValue.category}
        required
      />

      <label htmlFor="year">
        Year <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="year"
        placeholder="Year"
        defaultValue={defaultValue.year}
        required
      />

      <label htmlFor="make">
        Make <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="make"
        placeholder="Make"
        defaultValue={defaultValue.make}
        required
      />
      <label htmlFor="model">
        Model <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="model"
        placeholder="Model"
        defaultValue={defaultValue.model}
        required
      />

      <label htmlFor="mileage">
        Mileage <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="mileage"
        placeholder="Mileage"
        defaultValue={defaultValue.mileage}
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
        label="Body style"
        options={bodystyle}
        name="bodystyle"
        defaultVal={defaultValue.bodystyle}
        required={true}
      />

      <Options
        label="Vehicle condition"
        options={conditions}
        name="condition"
        defaultVal={defaultValue.condition}
        required={true}
      />

      <Options
        label="Fuel type"
        options={fueltype}
        name="fueltype"
        defaultVal={defaultValue.fueltype}
        required={true}
      />
      <Options
        label="Transmission"
        options={transmission}
        name="transmission"
        defaultVal={defaultValue.transmission}
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
