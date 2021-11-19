import React from 'react';
import useFetch from '../../hooks/useFetch';
import Error from '../../kit/error';
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
  const [vehicles, loading, error, fetchData] = useFetch<any>(
    `vehicles?make=${make}&model=${model}`
  );

  if (!make || !model) return null;
  if (loading) return <div>Loading...</div>;
  if (error) return <Error message={error.message} retry={fetchData} />;

  if (!make || !model) return null;
  if (error) return <div>{error}</div>;

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
