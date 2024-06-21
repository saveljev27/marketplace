'use client';
import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = () => (
  <div className="min-h-24  flex flex-col">
    <div className="overflow-hidden relative flex justify-center items-center">
      <ContentLoader
        speed={2}
        width={420}
        height={420}
        viewBox="0 0 420 420"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="60" y="0" rx="6" ry="6" width="300" height="300" />
        <rect x="60" y="310" rx="6" ry="6" width="300" height="20" />
        <rect x="60" y="340" rx="6" ry="6" width="300" height="80" />
      </ContentLoader>
    </div>
  </div>
);

export default Loader;
