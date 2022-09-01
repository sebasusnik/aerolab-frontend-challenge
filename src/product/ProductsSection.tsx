import React from 'react';

import dynamic from 'next/dynamic';

import Filter from './components/Filter';
import Pagination from './components/Pagination';
import Sort from './components/Sort';
import {Product} from './types';

const Grid = dynamic(() => import('./components/Grid'), {
  ssr: false,
});

interface Props {
  products: Product[];
}

const ProductsSection: React.FC<Props> = ({products}) => {
  return (
    <section id="products" tabIndex={-1} className="products-section container">
      <h2 className="products-heading title-md allcaps noselect">
        <span className="brand">Tech</span> <span>Products</span>
      </h2>
      <Filter />
      <Sort />
      <Pagination>
        <Grid products={products} />
      </Pagination>
    </section>
  );
};

export default ProductsSection;
