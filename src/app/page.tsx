'use client';

import { useEffect, useState } from 'react';
import { ProductAd } from '@/models/ProductAd';
import AdElement from '@/components/Ad/AdElement';
import SearchSidebar from '@/components/SearchSidebar';
import Loader from '@/components/Loader';

export default function Home() {
  const [ads, setAds] = useState<ProductAd[]>([]);
  const [urlParams, setUrlParams] = useState<URLSearchParams>(
    new URLSearchParams()
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchAds();
  }, []);

  function fetchAds(params?: URLSearchParams) {
    setIsLoading(true);
    if (!params) {
      params = new URLSearchParams();
    }
    const url = `/api/ads?${params?.toString() || ''}`;
    try {
      fetch(url).then((response) => {
        response.json().then((adsDocs) => {
          setAds(adsDocs);
          setUrlParams(params);
        });
      });
    } catch (error) {
      console.log('Failed to fetch ads', error);
    } finally {
      setIsLoading(false);
    }
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

  const getForm =
    urlParams.get('search') ||
    urlParams.get('type') ||
    urlParams.get('min') ||
    urlParams.get('max');

  const showAds = ads.map((ad) => <AdElement key={ad._id} ad={ad} />);
  const skeleton = [...new Array(12)].map((_, index) => <Loader key={index} />);

  return (
    <div className="flex w-full">
      <SearchSidebar action={handleSearch} />
      <div className=" p-4 w-3/4">
        <h1 className="page__title">
          {getForm ? `Search Results (${ads.length})` : 'Latest Products'}
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-2 gap-y-3">
          {isLoading ? skeleton : showAds}
        </div>
      </div>
    </div>
  );
}
