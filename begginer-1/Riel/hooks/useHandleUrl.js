import { useSearchParams } from 'react-router-dom';

export const UseHandleUrl = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getUrlValue = (key) => {
    return searchParams.get(key);
  };

  const setUrlValue = (key, value) => {
    searchParams.set(key, value);
    setSearchParams(searchParams);
  };

  return { getUrlValue, setUrlValue };
};
