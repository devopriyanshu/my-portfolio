import React from 'react';
import Navigation from './Navigation';

export default function Header({ onScrollTo }) {
  return (
    <header className="bg-white border-b border-transparent px-5 sm:px-20 md:px-32 lg:px-40 py-4 flex items-center justify-between flex-col sm:flex-row">
      <Navigation onScrollTo={onScrollTo} />
    </header>
  );
}
