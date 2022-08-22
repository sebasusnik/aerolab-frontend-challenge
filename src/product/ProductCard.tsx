import React from 'react';

import {Product} from './types';
import CTA from '~layout/components/CTA';
import {ButtonVariants} from '~layout/types';
import {usePoints} from '~user/hooks';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({product}) => {
  const [points] = usePoints();

  return (
    <div className="product-card-wrapper flex">
      {points ? (
        <CTA
          variant={product.cost < points ? ButtonVariants.Default : ButtonVariants.Disable}
          left={product.cost < points ? 'Redeem for' : 'You need'}
          right={product.cost}
          action={() => console.log('hehe')}
        />
      ) : (
        <CTA variant={ButtonVariants.Processing} />
      )}
      <div className="product-card flex">
        <div className="product-card-header">
          <h3 className="text-lg">{product.name}</h3>
          <p className="text-md allcaps secondary">{product.category}</p>
        </div>
        <div className="product-image-holder">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
