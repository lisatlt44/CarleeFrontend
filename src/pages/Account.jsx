import React, { useState } from 'react';
import Sidebar from '../components/molecules/Sidebar';
import { Button } from '@nextui-org/react';
import { BsPencil } from 'react-icons/bs';
import { useAuth } from '../contexts/authContext';
import { Input } from '@nextui-org/react';

function Account() {
    const { state: { user, access_token } } = useAuth();
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        lastname: user.lastname,
        firstname: user.firstname,
        phone: user.phone,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    const saveChanges = async () => {
      // Utilisez l'URL correcte pour l'API Laravel
      const apiUrl = `http://localhost/CarleeBackend/public/api/users/${user.id}`;
  
      const response = await fetch(apiUrl, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${access_token}`,
          },
          body: JSON.stringify({
              lastname: formData.lastname,
              firstname: formData.firstname,
              phone: formData.phone
          }),
      });
  
      const data = await response.json(); // Supposant que votre API renvoie une réponse JSON
  
      if (response.ok) {
          toggleEditMode();
          console.log("Mise à jour réussie", data);
      } else {
          console.error("Erreur lors de la mise à jour", data);
          alert(`Erreur lors de la mise à jour: ${data.message}`);
      }
  };
  

    return (
        <div className='flex w-full h-full'>
            <Sidebar />
            <div className='flex-grow p-16'>
                <h1 className='text-2xl font-playpen font-semibold mb-8'>Mon compte</h1>
                <div className="flex flex-col gap-6">
                    <section className="bg-white shadow-md rounded-2xl p-6">
                        <h2 className="text-xl font-semibold mb-4">Mes informations</h2>
                        <div className="flex items-center justify-between">
                            {editMode ? (
                                <Input
                                    name="lastname"
                                    value={formData.lastname}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                <span>Nom: {formData.lastname}</span>
                            )}
                            <BsPencil onClick={toggleEditMode} />
                        </div>
                        <div className="flex items-center justify-between mt-3">
                            {editMode ? (
                                <Input
                                    name="firstname"
                                    value={formData.firstname}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                <span>Prénom: {formData.firstname}</span>
                            )}
                            <BsPencil onClick={toggleEditMode} />
                        </div>
                        <div className="flex items-center justify-between mt-3">
                            {editMode ? (
                                <Input
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                <span>Numéro de téléphone: {formData.phone}</span>
                            )}
                            <BsPencil onClick={toggleEditMode} />
                        </div>
                        {editMode && (
                            <Button onClick={saveChanges}>Sauvegarder</Button>
                        )}
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Account;