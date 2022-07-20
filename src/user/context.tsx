import React, {createContext, useEffect, useState} from 'react';

import api from './api';
import {IUserContext, User, UserStatus} from './types';
import productApi from '~product/api';
import {Product} from '~product/types';

const INITIAL_USER = {
  id: '',
  name: '',
  points: 0,
  redeemHistory: [],
  createDate: '',
};

interface Props {
  children: React.ReactNode;
}

const UserContext = createContext({} as IUserContext);

const UserProvider: React.FC<Props> = ({children}) => {
  const [user, setUser] = useState<User>(INITIAL_USER);
  const [status, setStatus] = useState<UserStatus>(UserStatus.pending);

  async function handleRedeem(product: Product) {
    if (user.id === '' || status === UserStatus.pending) return;

    return productApi.redeem(product).then(() => {
      setUser({...user, points: user.points - product.cost});
    });
  }

  async function handleAddPoints(amount: number) {
    if (user.id === '' || status === UserStatus.pending) return;

    return api.points.add(amount).then(() => {
      setUser({...user, points: user.points + amount});
    });
  }

  useEffect(() => {
    api.fetch().then(user => {
      setUser(user);
      setStatus(UserStatus.resolved);
    });
  }, []);

  const actions = {
    addPoints: handleAddPoints,
    redeem: handleRedeem,
  };

  if (user.id === '' || status === UserStatus.pending) {
    const state = {
      user,
      status: UserStatus.pending,
    };

    return <UserContext.Provider value={{state, actions}}>{children}</UserContext.Provider>;
  }

  const state = {
    user,
    status,
  };

  return <UserContext.Provider value={{state, actions}}>{children}</UserContext.Provider>;
};

export {UserContext as default, UserProvider as Provider};
