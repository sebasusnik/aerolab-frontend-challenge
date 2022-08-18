import React from 'react';

import {ICard} from '../types';
import IntroCard from './IntroCard';
import browseImage from '~public/illustrations/walkthrough-1-desktop.png';
import chooseImage from '~public/illustrations/walkthrough-2-desktop.png';
import enjoyImage from '~public/illustrations/walkthrough-3-desktop.png';

const CARDS: ICard[] = [
  {
    title: '1—browse',
    text: 'Browse our tech catalog with more than 20 top tech products',
    icon: 'icons/walkthrough-1.svg',
    image: browseImage,
  },
  {
    title: '2—choose',
    text: 'Exchange your hard earned AeroPoints for the item you want',
    icon: 'icons/walkthrough-2.svg',
    image: chooseImage,
  },
  {
    title: '3—enjoy!',
    text: 'All done, you can relax! We’ll take care of delivery of your tech item!',
    icon: 'icons/walkthrough-3.svg',
    image: enjoyImage,
  },
];

const IntroSection: React.FC = () => {
  return (
    <section className="walkthrough">
      <div className="walkthrough-mask" />
      <div className="walkthrough-bg" />
      <div className="walkthrough-cards container flex">
        {CARDS.map((card: ICard, i) => (
          <IntroCard key={i} card={card} />
        ))}
      </div>
    </section>
  );
};

export default IntroSection;
