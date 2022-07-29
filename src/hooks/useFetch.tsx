import { useState, useEffect } from 'react';

export const useFetch = <T,>(
  url: string,
  initialState: T
): [T, boolean, string] => {
  const [data, setData] = useState<T>(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    setError('');
    setTimeout(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => setError(error.message))
        .finally(() => setLoading(false));
    }, 2000);
  }, [url]);

  return [data, loading, error];
};
