import React from 'react';

import {Product} from './types';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({product}) => {
  return <div>{product.name}</div>;
};

export default ProductCard;
