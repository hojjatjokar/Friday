import React from 'react';
import Error from '../../kit/error';
import useFetch from '../../hooks/useFetch';
import List from '../../kit/list';

interface Props {
  onSelect: (make: string) => void;
  make?: string;
  selectedModel?: string;
}

const Models = ({ onSelect, make, selectedModel }: Props) => {
  const [models, loading, error, fetchData] = useFetch<any>(
    `models?make=${make}`
  );

  if (!make) return null;
  if (loading) return <div>Loading...</div>;
  if (error) return <Error message={error.message} retry={fetchData} />;

  return (
    <div>
      <h2>Choose a model</h2>
      <List selectedItem={selectedModel} onSelect={onSelect} items={models} />
    </div>
  );
};

export default Models;
