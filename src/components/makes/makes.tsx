import React from 'react';

interface Props {
  onSelect: (make: string) => void;
}

const Makes = ({ onSelect }: Props) => {
  const [makes, setMakes] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetch('http://localhost:8080/api/makes')
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error(response.statusText);
      })
      .then((data) => {
        setMakes(data);
        if (error) setError(null);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  if (error) return <p>{error}</p>;

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
