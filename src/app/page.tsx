'use client';

import { useEffect, useState } from 'react';
import AdElement from '@/components/AdElement';
import { ProductAd } from '@/models/ProductAd';
import { categories } from '@/libs/helpers';

export default function Home() {
  const [ads, setAds] = useState<ProductAd[]>([]);

  useEffect(() => {
    fetchAds();
  }, []);

  function fetchAds(params?: URLSearchParams) {
    const url = `/api/ads?${params?.toString() || ''}`;
    fetch(url).then((response) => {
      response.json().then((adsDocs) => {
        setAds(adsDocs);
      });
    });
  }

  function handleSearch(formData: FormData) {
    const params = new URLSearchParams();
    formData &&
      formData.forEach((value, key) => {
        if (typeof value === 'string') {
          params.set(key, value);
        }
      });
    fetchAds(params);
  }

  return (
    <div className="flex w-full">
      <form action={handleSearch} className="w-1/4 p-4 border-r">
        <input type="text" name="search" placeholder="Search..." />
        <select name="category" id="category" defaultValue="0">
          <option disabled value="0">
            Category
          </option>
          {Object.keys(categories).map((categoryKey) => (
            <option value={categoryKey}>{categories[categoryKey]}</option>
          ))}
        </select>
      </form>
      <div className="bg-gray-100 p-4 w-3/4">
        <h1 className="font-bold">Latest Products</h1>
        <div className="grid md:grid-cols-4 gap-x-2 gap-y-3 mt-2">
          {ads.map((ad) => (
            <AdElement key={ad._id} ad={ad} />
          ))}
        </div>
      </div>
    </div>
  );
}
