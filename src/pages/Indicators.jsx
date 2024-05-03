import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import Sidebar from '../components/molecules/Sidebar';
import { useFetch } from '../hooks/Api';

function Indicators() {
  const { response: indicators, error, isLoading } = useFetch('/indicators');
  const [selectedIndicator, setSelectedIndicator] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const openModal = (indicator) => {
    setSelectedIndicator(indicator);
    onOpen();
  };

  // Render loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Render error state
  if (error) {
    return <div>Error fetching indicators: {error.message}</div>;
  }

  return (
    <div className='flex w-full h-full absolute'>
      <Sidebar />
      <div className='w-full min-h-auto flex flex-col flex-grow p-16'>
        <h2 className='text-2xl font-semibold font-playpen mb-4'>Liste des Voyants</h2>
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start', // This ensures that elements are aligned from the left
            alignItems: 'flex-start', // Align items at the start of the cross axis
            gap: '1%', // This provides a gap between the items
        }}>
          {indicators && indicators.map(indicator => (
            <div key={indicator.id} style={{
              width: '18%', // This makes sure 5 items fit per row (100% / 5 items per row - gap)
              margin: '10px 0.5%', // Add vertical margin and minimal horizontal margin for spacing
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center', // Center align the items vertically
            }}>
              <img
                src={indicator.picture}
                alt={indicator.name}
                style={{ width: '50%', cursor: 'pointer' }}
                onClick={() => openModal(indicator)}
              />
              <div>{indicator.name}</div>
            </div>
          ))}
        </div>

        {selectedIndicator && (
          <Modal isOpen={isOpen} onClose={onClose} isDismissable={false} isKeyboardDismissDisabled={true}>
            <ModalContent>
              <ModalHeader>{selectedIndicator.name}</ModalHeader>
              <ModalBody>
                <img src={selectedIndicator.picture} alt={selectedIndicator.name} style={{ width: '25%' }} />
                <p>{selectedIndicator.description}</p>
              </ModalBody>
              <ModalFooter>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </div>
    </div>
  );
}

export default Indicators;
