import React from 'react';
import { Switch } from '@nextui-org/react'; // Make sure to import the Switch component
import Sidebar from '../components/molecules/Sidebar';

function Settings() {
  // State for the dark mode toggle
  const [darkMode, setDarkMode] = React.useState(false);

  const handleDarkModeChange = () => {
    setDarkMode(!darkMode);
    // Add additional logic to handle dark mode preference
  };

  return (
    <div className='flex w-full h-full absolute'>
      <Sidebar />
      <div className='w-full min-h-auto flex flex-col flex-grow p-16'>
        <div className='mb-8'>
          <h1 className="font-playpen font-semibold text-2xl">Paramètres</h1>
          
          <div className='bg-white shadow-sm p-4 rounded-lg mb-6'>
            <h2 className='font-playpen text-xl font-medium mb-4'>Préférence</h2>
            <div className='flex items-center justify-between mb-4'>
              <span className='text-lg'>Dark mode</span>
              <Switch checked={darkMode} onChange={handleDarkModeChange} />
            </div>
          </div>
          
          <div className='bg-white shadow-sm p-4 rounded-lg'>
            <h2 className='font-playpen text-xl font-medium mb-4'>Politique de confidentialité</h2>
            <p className='text-gray-600'>
            Les utilisateurs ne sont pas tenus de s'inscrire pour utiliser le site web. Nous ne collectons aucune information personnellement identifiable sur le site.

Connexion
Notre serveur enregistre des informations sur votre visite telles que les adresses IP, le type de navigateur, etc., et nous utilisons ces fichiers journaux uniquement pour analyser notre trafic. Ces fichiers journaux ne seront PAS liés à des informations personnellement identifiables.

Publicité 
Nous collaborons avec des sociétés de publicité tierces pour diffuser des annonces lorsque vous visitez le site web. Elles peuvent utiliser des cookies, ainsi que des informations sur vos visites sur le site web.

En utilisant le site web, vous acceptez notre politique de confidentialité. Si vous avez des questions, veuillez nous contacter.
            </p>
            {/* Add additional content or components for privacy policy */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
