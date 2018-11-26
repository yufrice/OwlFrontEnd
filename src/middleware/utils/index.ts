import fetch, { Response } from 'node-fetch';

import { ItemInput, IUser } from '@models/app';

export const getVector = async (query: string) => {
  const parameter = '?word=' + query;
  return await fetch('/api/vector' + parameter);
};

export const getItem = async (query: URLSearchParams) => {
  return await fetch('/api/item?' + query.toString());
};

export const postItem = async (token: string, item: ItemInput) => {
  return await fetch('/api/item', {
    method: 'POST',
    body: JSON.stringify(item),
    headers: { 'Content-Type': 'application/json', Authorization: token },
  });
};

export const postLogin = async (body: IUser) => {
  return await fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  });
};

export const statusCheck = (res: Response) => {
  if (res.ok && res.status !== 401) {
    return res;
  } else {
    throw res.status;
  }
};

export const parseFormat = (str: string) => {
  return '.' + str.replace(/^data:image\/|;base64$/g, '');
};
