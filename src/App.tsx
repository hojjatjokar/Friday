import React from 'react';
import Makes from './components/makes/makes';
import Models from './components/models/models';
import Vehicles from './components/vehicles/vehicles';
import './App.css';

const App = () => {
  const [selectedMake, setSelectedMake] = React.useState(null);
  const [selectedModel, setSelectedModel] = React.useState(null);

  return (
    <main>
      <header>
        <h1>Car Select</h1>
      </header>
      <main>
        <section>
          <strong>Select your company and model</strong>
          <Makes selectedMake={selectedMake} onSelect={setSelectedMake} />
          <Models
            make={selectedMake}
            onSelect={setSelectedModel}
            selectedModel={selectedModel}
          />
        </section>
        <Vehicles make={selectedMake} model={selectedModel} />
      </main>
    </main>
  );
};

export default App;
