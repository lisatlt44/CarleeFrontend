import { isLength } from 'validator'

const validateRegisterForm = (formData) => {
  const errors = {}
  if (typeof formData === 'object') {
    // checking firstname
    if (!isLength(formData.firstname, { min: 2, max: undefined })) {
      errors.firstname = 'Le prénom est invalide, 2 caractères minimum sont requis.'
    }
    // checking lastname
    if (!isLength(formData.lastname, { min: 2, max: undefined })) {
      errors.lastname = 'Le nom de famille est invalide, 2 caractères minimum sont requis.'
    }    
    // checking phone number
    const phoneRegex = /^0\d{9}$/; // Exemple de regex pour un numéro de téléphone à 10 chiffres
    if (!phoneRegex.test(formData.phone)) {
      errors.phone = 'Le numéro de téléphone est invalide, 10 chiffres sont requis.';
    }
    // checking password
    if (!isLength(formData.password, { min: 8, max: 20 })) {
      errors.password = 'Le mot de passe est invalide, 8 caractères minimum sont requis.'
    } 
  } else {
    throw new Error('Paramètre invalide.')
  }

  return errors
}

export {
  validateRegisterForm
}
