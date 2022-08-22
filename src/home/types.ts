import {StaticImageData} from 'next/image';

export interface ICard {
  title: string;
  text: string;
  icon: string;
  image: StaticImageData;
  className: string;
  _id: number;
}
