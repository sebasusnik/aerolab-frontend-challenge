import React from 'react';

import UserContext from './context';
import {IUserContext} from './types';

export function usePoints(): [
  IUserContext['state']['user']['points'],
  IUserContext['actions']['addPoints'],
] {
  const {
    state: {user},
    actions: {addPoints},
  } = React.useContext(UserContext);

  return [user?.points, addPoints];
}

export function useUser(): IUserContext['state']['user'] {
  const {
    state: {user},
  } = React.useContext(UserContext);

  return user;
}

export function useUserStatus(): IUserContext['state']['status'] {
  const {
    state: {status},
  } = React.useContext(UserContext);

  return status;
}

export function useRedeem(): IUserContext['actions']['redeem'] {
  const {
    actions: {redeem},
  } = React.useContext(UserContext);

  return redeem;
}
