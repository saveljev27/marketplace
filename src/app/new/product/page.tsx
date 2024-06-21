'use client';
import AdForm from '@/components/Ad/AdForm';

export default function ProductAdd() {
  return (
    <div className="w-3/4 mx-auto">
      <h1 className="page__title">Item for sale</h1>
      <AdForm type="product" />
    </div>
  );
}
