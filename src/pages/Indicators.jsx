import React, { useEffect, useState } from 'react';
import Sidebar from '../components/molecules/Sidebar';

function Indicators() {
  const [indicators, setIndicators] = useState([]);

  useEffect(() => {
    fetch('/indicators')
      .then(response => response.json())
      .then(data => setIndicators(data))
      .catch(error => console.error('Error fetching indicators:', error));
  }, []);

  return (
    <div className='flex w-full h-full absolute'>
      <Sidebar />
      <div className='w-full min-h-auto flex flex-col flex-grow p-16'>
        <h2 className='text-2xl font-semibold font-playpen mb-4'>Liste des Voyants</h2>
        <ul>
          {indicators.map(indicator => (
            <li key={indicator.id}>
              <strong>{indicator.name}</strong> ({indicator.color}): {indicator.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Indicators;
