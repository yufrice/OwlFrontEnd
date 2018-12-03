import fetch, { Response } from 'node-fetch';

import { ItemInput, IUser } from '@models/app';

/**
 * GET /api/vectro?word=<query>
 * @param query
 */
export const getVector = async (query: string) => {
  const parameter = '?word=' + query;
  return await fetch('/api/vector' + parameter);
};

/**
 * GET /api/item?search=<query>
 * @param query
 */
export const getItem = async (query: URLSearchParams) => {
  return await fetch('/api/item?' + query.toString());
};

/**
 * POST /api/post
 *  header: token
 *  body: json <item>
 * @param token
 * @param item
 */
export const postItem = async (token: string, item: ItemInput) => {
  return await fetch('/api/item', {
    method: 'POST',
    body: JSON.stringify(item),
    headers: { 'Content-Type': 'application/json', Authorization: token },
  });
};

/**
 *  GET /api/login
 *  body: json <body>
 * @param body
 */
export const getLogin = async (body: string) => {
  return await fetch('api/login', {
    method: 'GET',
    body: JSON.stringify({ Authorization: body }),
    headers: { 'Content-Type': 'application/json' },
  });
};

/**
 *   POST /api/login
 *  body: json <body>
 * @param body
 */
export const postLogin = async (body: IUser) => {
  return await fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  });
};

/**
 * node-fetchが 4xxを拾ってくれない
 * @param res
 */
export const statusCheck = (res: Response) => {
  if (res.ok && res.status !== 401) {
    return res;
  } else {
    throw res.status;
  }
};

/**
 * datauriのパース
 * @param str
 */
export const parseFormat = (str: string) => {
  return '.' + str.replace(/^data:image\/|;base64$/g, '');
};

/**
 * 同期用
 * @param file
 */
export const parseFile = async (file: File) => {
  return new Promise<any>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = (error) => {
      reject(error);
    };
  });
};
