import React, { useState } from 'react';
import Sidebar from '../components/molecules/Sidebar';
import { Button, Switch } from '@nextui-org/react';


function Identicators() {
  const [checked, setChecked] = useState(false);

  return (
    <div className='flex w-full h-full absolute'>
      <Sidebar />
      <div className='w-full min-h-auto flex flex-col flex-grow p-16'>
        <h2 className='text-xl font-bold mb-4'>Quel voyant cherchez-vous ?</h2>
        
        <div className='mb-4'>
        <Button color="primary" auto ghost>
  Scanner le voyant
</Button>
        </div>

        <div className='mb-4'>
          <h3 className='text-lg mb-2'>Rechercher manuellement</h3>
          
          <div className='flex space-x-2 mb-2'>
            {/* Boutons pour sélectionner la couleur du voyant */}
            {/* Ajoutez une logique pour changer la classe en fonction de l'état de sélection */}
            <button className='h-8 w-8 bg-red-500 rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-red-500'></button>
            <button className='h-8 w-8 bg-yellow-500 rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500'></button>
            <button className='h-8 w-8 bg-green-500 rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-green-500'></button>
            <button className='h-8 w-8 bg-blue-500 rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'></button>
          </div>
          
          <div className='flex items-center mb-4'>
            <label className='mr-2'>Le voyant clignote-t-il ?</label>
            <div>
      <Switch 
        checked={checked} 
        onChange={(e) => setChecked(e.target.checked)}
      />
      {checked ? 'Oui' : 'Non'}
    </div>
          </div>
        </div>
        
        <div>
        <Button color="primary" auto ghost>
  Rechercher
</Button>
        </div>
      </div>
    </div>
  );
}

export default Identicators;
