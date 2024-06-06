import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Spinner, Select } from "@nextui-org/react";
import Sidebar from '../components/molecules/Sidebar';
import { useFetch } from '../hooks/Api';
import '../styles/Indicators.css';

function Indicators() {
  const { response: indicators, error, isLoading } = useFetch('/indicators');
  const [selectedIndicator, setSelectedIndicator] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const openModal = (indicator) => {
    setSelectedIndicator(indicator);
    onOpen();
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const filteredIndicators = indicators ? indicators.filter(indicator => {
    return (
      (selectedCategory === '' || indicator.category === selectedCategory) &&
      (selectedColor === '' || indicator.color === selectedColor)
    );
  }) : [];

  return (
    <div className='flex w-full h-full absolute'>
      <Sidebar />
      <div className='w-full min-h-auto flex flex-col flex-grow p-4 md:p-16'>
        <h2 className='text-2xl font-semibold font-playpen mb-4'>Liste des Voyants</h2>

        {/* Filtres */}
        <div className="mobile-filter flex gap-4 mb-4">
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Toutes les catégories</option>
            <option value="alarm">Alarmes</option>
            <option value="alert">Alertes</option>
            <option value="lights">Autres</option>
          </select>
          <select value={selectedColor} onChange={handleColorChange}>
            <option value="">Toutes les couleurs</option>
            <option value="red">Rouge</option>
            <option value="green">Vert</option>
            <option value="yellow">Jaune</option>
            {/* Ajoutez d'autres options de couleur selon les données de votre BDD */}
          </select>
        </div>

        <div className="indicators-grid" style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-start', // This ensures that elements are aligned from the left
          alignItems: 'flex-start', // Align items at the start of the cross axis
          gap: '1%', // This provides a gap between the items
        }}>
          {isLoading && <Spinner />}
          {error && <div>Error fetching indicators: {error.message}</div>}
          {filteredIndicators && filteredIndicators.map(indicator => (
            <div key={indicator.id} className="indicator-item">
              <img
                src={indicator.picture}
                alt={indicator.name}
                onClick={() => openModal(indicator)}
                className='indicator-img'
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