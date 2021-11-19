import React from 'react';
import Error from '../../kit/error';
import useFetch from '../../hooks/useFetch';

interface Props {
  onSelect: (make: string) => void;
  make?: string;
}

const Models = ({ onSelect, make }: Props) => {
  const [models, loading, error, fetchData] = useFetch<any>(
    `models?make=${make}`
  );

  if (!make) return null;
  if (loading) return <div>Loading...</div>;
  if (error) return <Error message={error.message} retry={fetchData} />;

  return (
    <div>
      <h2>Models</h2>
      <select onChange={(e) => onSelect(e.target.value)}>
        <option>Select Model</option>
        {models.map((model: string) => (
          <option key={model}>{model}</option>
        ))}
      </select>
    </div>
  );
};

export default Models;
