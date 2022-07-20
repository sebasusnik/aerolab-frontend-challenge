import {User} from './types';

export default {
  fetch: (): Promise<User> =>
    new Promise(resolve =>
      setTimeout(
        () =>
          resolve({
            id: '5a03638052fd231590d04eb5',
            name: 'John Kite',
            points: 10000,
            redeemHistory: [],
            createDate: 'Wed Nov 08 2017 17:05:20 GMT-0300 (Argentina Standard Time)',
          }),
        800,
      ),
    ),
  points: {
    add: (amount: number): Promise<number> => Promise.resolve(amount),
  },
};