import React from 'react';

import ProductCard from '~product/ProductCard';
import {Product} from '~product/types';

interface Props {
  products: Product[];
}

const Grid: React.FC<Props> = ({products}) => {
  return (
    <div className="products-grid grid">
      {products.map((product, i) => (
        <ProductCard key={i} product={product} />
      ))}
    </div>
  );
};

export default Grid;
