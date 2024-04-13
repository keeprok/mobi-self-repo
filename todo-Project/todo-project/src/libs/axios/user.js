import { ACCESS_TOKEN } from '../../constants/token';
import { axiosInstance } from './axiosInstance';

export const postSignUp = async ({ email, pw }) => {
  const response = await axiosInstance.post('/todo/user/sign-up', {
    email,
    pw,
  });
  return response;
};

export const postSignIn = async ({ email, pw }) => {
  const response = await axiosInstance.post('/todo/user/sign-in', {
    email,
    pw,
  });
  return response;
};

export const postSignOut = async () => {
  const response = await axiosInstance.post(
    '/todo/user/sign-out',
    {},
    { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } }
  );
  return response;
};

export const getRefresh = async () => {
  const response = await axiosInstance.get('/todo/user/refresh');
  return response;
};
