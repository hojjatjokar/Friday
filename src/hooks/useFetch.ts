import React from 'react';

const baseURL = 'http://localhost:8080/api/';

const useFetch = (url: string) => {
  const [data, setData] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${baseURL}${url}`);
      if (response.ok) {
        const json = await response.json();
        setData(json);
        setError(null);
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  React.useEffect(() => {
    fetchData();
  }, [url]);

  return [data, loading, error, fetchData];
};

export default useFetch;
