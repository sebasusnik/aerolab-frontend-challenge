import React from 'react';

import Filter from './components/Filter';
import Grid from './components/Grid';
import Pagination from './components/Pagination';
import Sort from './components/Sort';

interface Props {}

const ProductList: React.FC<Props> = () => {
  return (
    <section>
      <h2>
        <span>Tech</span> <span>Products</span>
        <Filter />
        <Sort />
      </h2>
      <Pagination>
        <Grid />
      </Pagination>
    </section>
  );
};

export default ProductList;
