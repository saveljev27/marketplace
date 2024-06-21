'use client';
import AdForm from '@/components/Ad/AdForm';

export default function CarAd() {
  return (
    <div className="w-3/4 mx-auto">
      <h1 className="page__title">Vehicle for sale</h1>
      <AdForm type="car" />
    </div>
  );
}
