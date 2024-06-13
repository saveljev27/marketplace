'use client';

import { useEffect, useState } from 'react';
import { ProductAd } from '@/models/ProductAd';
import AdElement from '@/components/AdElement';
import SearchSidebar from '@/components/SearchSidebar';

export default function Home() {
  const [ads, setAds] = useState<ProductAd[]>([]);
  console.log(ads);

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
      <SearchSidebar action={handleSearch} />
      <div className=" p-4 w-3/4">
        <h1 className="page__title">Latest Products</h1>
        <div className="grid md:grid-cols-4 gap-x-2 gap-y-3">
          {ads.map((ad) => (
            <AdElement key={ad._id} ad={ad} />
          ))}
          {ads && ads?.length === 0 && <div>No Products Found!</div>}
        </div>
      </div>
    </div>
  );
}
