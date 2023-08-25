'use client';

import React from 'react';
import { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { Product } from '@/app/page';
import { ProductTable } from './components/ProductTable/ProductTable';

export function FilterableProductTable({ products }: { products: Product[] }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}
