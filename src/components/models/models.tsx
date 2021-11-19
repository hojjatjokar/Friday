import React from 'react';

interface Props {
  onSelect: (make: string) => void;
  make?: string;
}

const Models = ({ onSelect, make }: Props) => {
  const [models, setModels] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (make) {
      fetch(`http://localhost:8080/api/models?make=${make}`)
        .then((response) => {
          console.log(response);
          if (response.ok) return response.json();
          throw new Error(response.statusText);
        })
        .then((data) => {
          setModels(data);
        })
        .catch((error) => {
          console.error(error);

          setError(error.message);
        });
    }
  }, [make]);

  if (!make) return null;
  if (error) return <div>{error}</div>;
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
