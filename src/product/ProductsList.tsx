import React from 'react';

import Filter from './components/Filter';
import Grid from './components/Grid';
import Pagination from './components/Pagination';
import Sort from './components/Sort';
import {Product} from './types';

interface Props {
  products: Product[];
}

const ProductList: React.FC<Props> = ({products}) => {
  return (
    <section id="products" tabIndex={-1} className="products-section container">
      <h2 className="products-heading title-md allcaps">
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

export default ProductList;
