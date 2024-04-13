import { ACCESS_TOKEN } from '../../constants/token';

export const setSessionToken = (token) => {
  sessionStorage.setItem(ACCESS_TOKEN, token);
};
export const getSessionToken = () => {
  return sessionStorage.getItem(ACCESS_TOKEN);
};
