import React from 'react';

import Image from 'next/image';

import {ICard} from '../types';

interface Props {
  card: ICard;
}

const IntroCard: React.FC<Props> = ({card}) => {
  return (
    <article className="intro-card-wrapper">
      <div className="intro-card flex">
        <div className="intro-card-content flex">
          <div className="intro-card-head flex">
            <div className="intro-card-icon-box flex">
              <img className="icon-lg" src={card.icon} alt="" />
            </div>
            <h3 className="title-sm allcaps brand">{card.title}</h3>
          </div>
          <div className="intro-card-text">
            <p className="text-lg secondary">{card.text}</p>
          </div>
        </div>
        <div className="intro-card-image-holder noselect">
          <Image
            src={card.image}
            className={card.className}
            layout="fill"
            objectFit="contain"
            quality={80}
            placeholder="blur"
            alt=""
          />
        </div>
      </div>
    </article>
  );
};

export default IntroCard;
