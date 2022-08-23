import React, {useState} from 'react';

import Image from 'next/image';

import {Product} from './types';
import CTA from '~layout/components/CTA';
import {ButtonVariants} from '~layout/types';
import imagePlaceholder from '~public/logo-placeholder.png';
import {usePoints} from '~user/hooks';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({product}) => {
  const [isImageLoading, setIsImageLoading] = useState(true);

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
        <div className="product-card-image-wrapper">
          {isImageLoading && (
            <div className="product-card-image-placeholder">
              <Image
                src={imagePlaceholder}
                alt={'loading image'}
                height={72}
                objectFit={'cover'}
                width={78}
                className={'product-card-image'}
              />
            </div>
          )}
          <div className="product-card-image-holder">
            <Image
              src={product.img.hdUrl}
              alt=""
              width={504}
              layout="fill"
              objectFit="contain"
              className="product-card-image"
              onLoadingComplete={() => setIsImageLoading(true)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
