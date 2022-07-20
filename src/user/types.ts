import {Product} from '~product/types';

export interface User {
  id: string;
  name: string;
  points: number;
  redeemHistory: Product[];
  createDate: string;
}

export enum UserStatus {
  pending = 'pending',
  resolved = 'resolved',
  rejected = 'rejected',
}

export interface IUserContext {
  state: {
    user: User;
    status: UserStatus;
  };
  actions: {
    addPoints: (amount: number) => Promise<void>;
    redeem: (product: Product) => Promise<void>;
  };
}
