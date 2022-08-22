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
    className: '',
    _id: 1,
  },
  {
    title: '2—choose',
    text: 'Exchange your hard earned AeroPoints for the item you want',
    icon: 'icons/walkthrough-2.svg',
    image: chooseImage,
    className: '',
    _id: 2,
  },
  {
    title: '3—enjoy!',
    text: 'All done, you can relax! We’ll take care of delivery of your tech item!',
    icon: 'icons/walkthrough-3.svg',
    image: enjoyImage,
    className: 'table',
    _id: 3,
  },
];

const WalkthroughSection: React.FC = () => {
  return (
    <section className="walkthrough">
      <div className="walkthrough-mask" />
      <div className="walkthrough-bg" />
      <div className="walkthrough-cards container flex">
        {CARDS.map((card: ICard) => (
          <IntroCard key={card._id} card={card} />
        ))}
      </div>
    </section>
  );
};

export default WalkthroughSection;
