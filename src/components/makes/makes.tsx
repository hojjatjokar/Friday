import React from 'react';
import useFetch from '../../hooks/useFetch';
import Error from '../../kit/error';

interface Props {
  onSelect: (make: string) => void;
}

const Makes = ({ onSelect }: Props) => {
  const [makes, loading, error, fetchData] = useFetch<any>('makes');

  if (loading) return <div>Loading...</div>;
  if (error) return <Error message={error.message} retry={fetchData} />;

  return (
    <div>
      <h1>Car Select</h1>
      <select onChange={(e) => onSelect(e.target.value)}>
        <option>Select Make</option>
        {makes.map((make: string) => (
          <option key={make}>{make}</option>
        ))}
      </select>
    </div>
  );
};

export default Makes;
