import React from 'react';
import useFetch from '../../hooks/useFetch';
import Error from '../../kit/error';
import List from '../../kit/list';

interface Props {
  onSelect: (make: string) => void;
  selectedMake?: string;
}

const Makes = ({ onSelect, selectedMake }: Props) => {
  const [makes, loading, error, fetchData] = useFetch<any>('makes');

  if (loading) return <div>Loading...</div>;
  if (error) return <Error message={error.message} retry={fetchData} />;

  return (
    <section>
      <h1>Select a company:</h1>
      <List selectedItem={selectedMake} onSelect={onSelect} items={makes} />
    </section>
  );
};

export default Makes;
