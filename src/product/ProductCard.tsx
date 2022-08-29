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
      <div
        onClick={e => {
          e.stopPropagation();
        }}
      >
        {points ? (
          <CTA
            variant={product.cost < points ? ButtonVariants.Default : ButtonVariants.Disable}
            left={product.cost < points ? 'Redeem for' : 'You need'}
            right={product.cost.toString()}
            action={() => console.log('hehe')}
          />
        ) : (
          <CTA variant={ButtonVariants.Skeleton} />
        )}
      </div>
      <div className="product-card flex">
        <div className="product-card-header">
          <h3 className="text-lg">{product.name}</h3>
          <p className="text-md allcaps secondary">{product.category}</p>
        </div>
        <div className="product-card-image-box flex">
          {isImageLoading && (
            <Image
              src={imagePlaceholder}
              alt={'loading image'}
              height={72}
              layout="fixed"
              width={78}
              className="product-card-image-placeholder"
            />
          )}
          <Image
            src={product.img.hdUrl}
            alt=""
            layout="fill"
            objectFit="contain"
            className="product-card-image noselect"
            onLoadingComplete={() => setIsImageLoading(false)}
          />
          {/*           <img
            src={product.img.hdUrl}
            alt={`${product.category} product ${product.name}`}
            className="product-card-zoom"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
