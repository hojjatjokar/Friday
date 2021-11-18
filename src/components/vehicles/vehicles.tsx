import React from 'react';
import './vehicles.css';

interface Props {
  make?: string;
  model?: string;
}

interface Vehicle {
  bodyType: string;
  enginCapacity: number;
  enginePowerKW: number;
  enginePowerPS: number;
}

const Vehicles = ({ make, model }: Props) => {
  const [vehicles, setVehicles] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (make) {
      fetch(`http://localhost:8080/api/vehicles?make=${make}&model=${model}`)
        .then((response) => {
          if (response.ok) return response.json();
          throw new Error(response.statusText);
        })
        .then((data) => {
          setVehicles(data);
          if (error) setError(null);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  }, [make, model]);

  if (!make || !model) return null;
  if (error) return <div>{error}</div>;
  console.log('vehicles', vehicles);
  return (
    <section className="vehicles">
      {vehicles.map((vehicle: Vehicle) => (
        <div
          key={`${vehicle.enginCapacity}-${vehicle.enginePowerKW}-${vehicle.enginePowerPS}`}
          className="vehicle"
        >
          <p>Body Type: {vehicle.bodyType}</p>
          <p>Engine Capacity: {vehicle.enginCapacity}</p>
          <p>Engine PowerPS: {vehicle.enginePowerPS}</p>
        </div>
      ))}
    </section>
  );
};

export default Vehicles;
