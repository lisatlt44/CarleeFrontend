import React from 'react';
import { Card, Button, CardBody, CardHeader, CardFooter, Spinner } from '@nextui-org/react';
import Sidebar from '../components/molecules/Sidebar';
import { useAuth } from '../contexts/authContext';
import { useFetch } from '../hooks/Api';
import { FaCar, FaPencilAlt } from 'react-icons/fa';
import { BsPencil } from 'react-icons/bs';

function Cars() {
  const { state: { user, access_token } } = useAuth();
  const { response: cars, error: errorCars, isLoading: isLoadingCars } = useFetch(`/users/${user.id}/cars`);

  if (isLoadingCars) {
    return <div className='p-6 flex flex-col justify-center items-center'><Spinner /></div>;
  }

  if (errorCars) {
    return <h2>Une erreur s'est produite</h2>;
  }

  if (!cars || cars.length === 0) {
    return <div>Pas de véhicules trouvés.</div>;
  }

  const firstCar = cars[0];

  return (
    <div className='flex w-full h-full absolute'>
      <Sidebar />
      <div className='w-full min-h-auto flex p-16' style={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch' }}>
      <Card className='flex-grow' style={{ margin: '2px', display: 'flex', flexDirection: 'column' }}>
        <h4 className='font-bold' style={{textAlign: 'center', marginTop: '10px'}}>{firstCar.name}</h4>
        <CardBody css={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <FaCar size={64} />
            <div style={{ width: '100%', textAlign: 'center' }}>
              <p>{firstCar.plate_number} <BsPencil onClick={() => editCarDetail(firstCar.id, 'plate_number')} /></p>
              <p>{`${firstCar.mileage} kms`} <BsPencil onClick={() => editCarDetail(firstCar.id, 'mileage')} /></p>
              <p>{`Mise en circulation : ${firstCar.production_date}`} <BsPencil onClick={() => editCarDetail(firstCar.id, 'production_date')} /></p>
              <p>{`${firstCar.brand} ${firstCar.model}`} <BsPencil onClick={() => editCarDetail(firstCar.id, 'model')} /></p>
            </div>
          </CardBody>
          <CardFooter style={{ display: 'flex', justifyContent: 'center' }}>
            <Button auto flat color='primary'>Préparer à la vente</Button>
          </CardFooter>
        </Card>
        <Card className='flex-grow' style={{ margin: '2px', display: 'flex', flexDirection: 'column' }}>
          <CardBody css={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h4 className='font-bold' style={{ textAlign: 'center', marginBottom: '20px' }}>Prochains rappels</h4>
            <p>Contrôle technique - Dans 2 jours</p>
            <p>Contrôle des pneus - Dans 39 jours</p>
            <p>Vidange - Dans 75 jours</p>
          </CardBody>
          <CardFooter style={{ display: 'flex', justifyContent: 'center' }}>
            <Button auto color='primary'>Ajouter un rappel</Button>
          </CardFooter>
        </Card>
        <Card className='flex-grow' style={{ margin: '2px', display: 'flex', flexDirection: 'column' }}>
          <CardBody css={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h4 className='font-bold' style={{ textAlign: 'center', marginBottom: '20px' }}>Documents du véhicule</h4>
            <p className='underline'>Contrôle technique.pdf</p>
            <p className='underline'>Assurance2024.pdf</p>
            <p className='underline'>ChangementPneu.pdf</p>
            <p className='underline'>Amende08.pdf</p>
          </CardBody>
          <CardFooter style={{ display: 'flex', justifyContent: 'center' }}>
            <Button auto color='primary'>Ajouter un document</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}


function editCarDetail(carId, detail) {
  console.log('Edit car detail', detail, 'with ID:', carId);
  // Ajouter ici la logique pour ouvrir un formulaire modal ou une page de modification spécifique pour le détail en question
}

export default Cars;
