import { Autocomplete, AutocompleteItem, Button, Chip, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spinner, Tooltip, useDisclosure } from '@nextui-org/react'
import Sidebar from '../../components/molecules/Sidebar'
import { useAuth } from '../../contexts/authContext'
import { useFetch } from '../../hooks/Api'
import React, { useEffect, useState } from "react"
import { CardDocuments } from '../../components/dashboard/CardDocuments'
import {Select, SelectItem} from "@nextui-org/react"
import { CardCar1 } from '../../components/dashboard/CardCar1'
import { CardCar2 } from '../../components/dashboard/CardCar2'
import { CardCarDefault } from '../../components/dashboard/CardCarDefault'
import { BsPlusCircle } from "react-icons/bs"
import { addCarApi } from '../../services/api'
import { toast } from 'react-toastify'
import { Icon } from '@mui/material'
import {Calendar} from "@nextui-org/react";
import {parseDate} from '@internationalized/date';
import {today, getLocalTimeZone} from "@internationalized/date";
import { EditIcon } from '../../assets/EditIcon'
import { DeleteIcon } from '../../assets/DeleteIcon'

function Dashboard() {
  const { state: { user, access_token } } = useAuth()
  const { response:cars, errorCars, isLoadingCars } = useFetch(`/users/${user.id}/cars`)
  const [documents, setDocuments] = useState([])
  const [isLoadingDocuments, setIsLoadingDocuments] = useState(false)
  const [selectedCars, setSelectedCars] = useState([])
  const {isOpen, onOpen, onOpenChange} = useDisclosure()
  const [selectedBrand, setSelectedBrand] = useState('')
  const [step, setStep] = useState(1)

  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    if (cars && Array.isArray(cars)) {
      const fetchReminders = async () => {
        const remindersList = []
        for (const car of cars) {
          try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/reminders/${car.id}`, {
              headers: {
                Authorization: `Bearer ${access_token}`
              }
            })            
            const data = await response.json()
            remindersList.push(...data)
          } catch (error) {
            console.error("Error fetching reminders for car:", car.id, error)
          }
        }
        setReminders(remindersList)
      };
      fetchReminders()
    }
  }, [cars])  
  
  const [formValues, setFormValues] = useState({
    name: '',
    brand: '',
    model: '',
    plate_number: '',
    mileage: '',
    last_maintenance_date: '',
    fuel_type: '',
    color: '',
    production_date: '',
    country_iso_code: '',
  })

  useEffect(() => {
    if (!isOpen) {
      setStep(1)
      setFormValues({
        name: '',
        brand: '',
        model: '',
        plate_number: '',
        mileage: '',
        last_maintenance_date: '',
        fuel_type: '',
        color: '',
        production_date: '',
        country_iso_code: '',
      })
    }
  }, [isOpen])
  
  const handleSelectCarChange = (name, value) => {
    console.log(value)
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
    if (name === 'brand') {
      setSelectedBrand(value)
    }
    console.log(selectedBrand) 
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
  
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
    console.log(formValues) 
  }

  const fetchDocuments = async (carId) => {
    setIsLoadingDocuments(true)
    try {
      const response = fetch(`/cars/${carId}/documents`)
      const data = await response.json()
      setDocuments(data)
    } catch (error) {
      console.error("Error fetching documents:", error)
    } finally {
      setIsLoadingDocuments(false)
    }
  }

  const handleSelectChange = (selectedKeys) => {
    const selectedPlateNumbers = selectedKeys.target.value.split(",")
    console.log("Selected plate number:", selectedPlateNumbers)

    const selectedCars = cars.filter((car) => selectedPlateNumbers.includes(car.plate_number))
    setSelectedCars(selectedCars)
  }

  const handleAddCar = async () => {
    try {
      const newCar = { ...formValues, user_id: user.id}
      const response = await addCarApi(newCar, access_token)

      if (response.status === 200) {
        console.log(response)
        onOpenChange(false)
        toast.success('Votre voiture a été ajoutée !')

        setStep(1)

        setFormValues({
          name: '',
          brand: '',
          model: '',
          plate_number: '',
          mileage: '',
          last_maintenance_date: '',
          fuel_type: '',
          color: '',
          production_date: '',
          country_iso_code: '',
        })
      } else {
        toast.error('Une erreur est survenue lors de l\'ajout de votre voiture')
      }
    } catch (e) {
      console.error(e)
    }
  }
  
  if (isLoadingCars) {
    return (
      <div className='p-6 flex flex-col justify-center items-center'>
        <Spinner size='lg' />
      </div>
    )
  }

  if (errorCars) {
    return <h2>Une erreur s'est produite</h2>
  }
  
  const selectedCarsCount = selectedCars.length

  const carBrands = [
    "alfa Romeo",
    "alpine",
    "aston Martin",
    "audi",
    "bentley",
    "bmw",
    "bugatti",
    "chevrolet",
    "citroen",
    "cupra",
    "dacia",
    "ferrari",
    "fiat",
    "ford",
    "honda",
    "hyundai",
    "jaguar",
    "jeep",
    "kia",
    "lamborghini",
    "land Rover",
    "maserati",
    "mercedes",
    "nissan",
    "opel",
    "peugeot",
    "porsche",
    "renault",
    "seat",
    "skoda",
    "suzuki",
    "tesla",
    "toyota",
    "volkswagen",
    "volvo"
  ]
  
  carBrands.sort()

  return (
    <>
    <div className='flex w-full h-full absolute'>
      <Sidebar />
      <div className='w-full min-h-auto flex flex-col flex-grow p-4 md:p-0'>
      <div className='md:mt-6 mt-16 mx-8 flex flex-col md:flex-row justify-between items-center'>
          <h1 className='font-playpen text-2xl font-semibold'>Bonjour {user.firstname},</h1>
          <div className='flex flex-col md:flex-row gap-6 items-center mt-4 md:mt-0'>
            {/* <Button size='lg' isIconOnly color="primary" aria-label="Add">
              <BsPlusCircle />
            </Button> */}
            <Tooltip content={cars && cars.length >= 1 ? 'Souscris à la version premium !' : 'Ajouter une voiture'} placement="left">
              <Button
                style={{
                  fontSize: '20px',
                  color: 'white',
                  cursor: cars && cars.length >= 1 ? 'not-allowed' : 'pointer',
                  padding: '4px',
                  minWidth: "40px",
                }}
                onClick={cars && cars.length < 2 ? onOpen : null}
                variant="solid"
                size='lg'
                color='primary'
              >
                <BsPlusCircle size={16} />
              </Button>
            </Tooltip>
            {/* <Button variant='flat' size='lg' color="primary" endContent={<BsPlusCircle color='primary' />}>
              Ajouter une voiture
            </Button>  */}
            <Select
              items={cars}
              aria-label='Choose a car'
              variant="bordered"
              isMultiline={true}
              selectionMode="multiple"
              placeholder="Choisis une voiture"
              labelPlacement="outside"
              defaultSelectedKeys=""
              classNames={{
                base: 'max-w-[300px]',
                trigger: "min-h-unit-12 py-2",
              }}
              renderValue={(items) => {
                return (
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <Chip className='w-full' color='primary' variant='flat' key={item.key}>{item.textValue}</Chip>
                    ))}
                  </div>
                )
              }}
              onChange={handleSelectChange}
              >
              {cars && cars.map((car) => {
              return (
                <SelectItem className='w-[280px]' key={car.plate_number} textValue={car.plate_number} value={car.plate_number}>
                  <div className="flex gap-2 items-center">
                    <div className="flex flex-col">
                      <span className="text-small">{car.plate_number}</span>
                      <span className="text-tiny text-default-400">{`${car.brand} ${car.model}`}</span>
                    </div>
                  </div>
                </SelectItem>
              )
            })}
            </Select>
          </div>       
        </div>
        <div className="container mx-auto px-8 w-full">
          <div className='grid grid-cols-3 gap-4'>
            <div className="col-span-2 col-start-1 row-start-2">
              <div className="h-full flex flex-col gap-2">
                <h3 className="text-xl font-playpen">Prochains rappels</h3>
                  <div className="w-full bg-default-50 shadow-lg rounded-2xl p-6 ">
                    <div className="flex gap-x-4 justify-between">
                      <div className="flex flex-col w-3/6 justify-between">
                          {reminders
                          .sort((a, b) => new Date(a.date) - new Date(b.date))
                          .filter((reminder) => new Date(reminder.date) >= new Date())
                          .slice(0, 3)
                          .map((reminder, index) => (
                            <div key={index} className="w-full bg-white shadow-lg rounded-2xl p-3 mt-2">
                              <div className="flex flex-row items-center justify-between">
                                <div>
                                  <h4 className="text-lg font-medium">{reminder.name}</h4>
                                  <p className="text-sm text-default-400">
                                  dans {Math.ceil((new Date(reminder.date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} jours
                                  </p>
                                </div>
                                <div className='flex gap-4'>
                                  <Button color='primary' size='sm' variant='flat' startContent={<EditIcon />} />
                                  <Button color='danger' size='sm' variant='flat' startContent={<DeleteIcon />} />
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                      <Calendar aria-label="Date (Show Month and Year Picker)" calendarWidth='350px' minValue={today(getLocalTimeZone())} defaultValue={today(getLocalTimeZone())} />
                    </div>                  
                  </div>
              </div>
            </div>
            <div className="row-span-2 col-start-3 row-start-1">
              <div className="mt-4 flex flex-col gap-2">
                  <div className='flex flew-row gap-2 items-center'>
                    <h3 className="text-xl font-playpen">Ma voiture</h3>
                      <Modal 
                        isOpen={isOpen} 
                        onOpenChange={onOpenChange}
                        placement="top-center"
                        size='lg' 
                        backdrop="blur" 
                      >
                        <ModalContent>
                          {(onClose) => (
                            <>
                              <ModalHeader className="flex flex-col gap-1">Ajouter une voiture</ModalHeader>
                              <ModalBody>
                                {step === 1 && (
                                  <>
                                    <Input
                                      autoFocus
                                      isRequired                                    
                                      label="Nom"
                                      placeholder="Titine"
                                      variant="bordered"
                                      name='name'
                                      value={formValues.name}
                                      onChange={handleInputChange}
                                    />
                                    <Autocomplete
                                      isRequired
                                      variant='bordered'
                                      label="Marque"
                                      name="brand"
                                      defaultItems={carBrands.map((brand) => ({
                                        label: brand.charAt(0).toUpperCase() + brand.slice(1),
                                        value: brand,
                                      }))}
                                      placeholder="Rechercher une marque"
                                      className="max-w-s"
                                      value={selectedBrand}
                                      onChange={(selectedBrand) => handleSelectCarChange('brand', selectedBrand)}                                      
                                      >
                                      {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
                                    </Autocomplete>
                                    <Input
                                      isRequired
                                      label="Modèle"
                                      placeholder="208"
                                      variant="bordered"
                                      name='model'
                                      value={formValues.model}
                                      onChange={handleInputChange}
                                    />
                                    <Input
                                      isRequired
                                      label="Plaque d'immatriculation"
                                      placeholder="XX-XXX-XX"
                                      variant="bordered"
                                      name='plate_number'
                                      value={formValues.plate_number}
                                      onChange={handleInputChange}
                                    />
                                  </>
                                )}
                                {step === 2 && (
                                  <>
                                    <Select
                                      isRequired
                                      variant='bordered'
                                      label="Type de carburant"
                                      name="fuel_type"
                                      value={formValues.fuel_type}
                                      onChange={(value) => handleSelectCarChange('fuel_type', value)}
                                    >
                                      <SelectItem value="essence">Essence</SelectItem>
                                      <SelectItem value="diesel">Diesel</SelectItem>
                                      <SelectItem value="hybride">Hybride</SelectItem>
                                      <SelectItem value="electrique">Électrique</SelectItem>
                                    </Select>
                                    <Input
                                      isRequired
                                      label="Kilométrage"
                                      placeholder="60 000"
                                      variant="bordered"
                                      name='mileage'
                                      value={formValues.mileage}
                                      onChange={handleInputChange}
                                    />
                                    <Input
                                      isRequired
                                      label="Date de la dernière maintenance"
                                      placeholder="01/01/1900"
                                      variant="bordered"
                                      name='last_maintenance_date'
                                      value={formValues.last_maintenance_date}
                                      onChange={handleInputChange}
                                    />
                                  </>
                                )}
                                {step === 3 && (
                                  <>
                                    <Input
                                      label="Couleur"
                                      placeholder="Rouge"
                                      variant="bordered"
                                      name='color'
                                      value={formValues.color}
                                      onChange={handleInputChange}
                                    />
                                    <Input
                                      isRequired
                                      label="Date de production"
                                      placeholder="01/01/1900"
                                      variant="bordered"
                                      name='production_date'
                                      value={formValues.production_date}
                                      onChange={handleInputChange}
                                    />
                                    <Input
                                      label="Pays de production"
                                      placeholder="France"
                                      variant="bordered"
                                      name='country_iso_code'
                                      value={formValues.country_iso_code}
                                      onChange={handleInputChange}
                                    />
                                  </>
                                )}
                              </ModalBody>
                              <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                  Fermer
                                </Button>
                                {step > 1 && (
                                  <Button color="default" variant="flat" onPress={() => setStep((prevStep) => prevStep - 1)}>
                                    Précédent
                                  </Button>
                                )}
                                {step < 3 && (
                                  <Button color="primary" onPress={() => setStep((prevStep) => prevStep + 1)}>
                                    Suivant
                                  </Button>
                                )}
                                {step === 3 && (
                                  <Button color="primary" onPress={handleAddCar}>
                                    Ajouter
                                  </Button>
                                )}
                              </ModalFooter>
                            </>
                          )}
                        </ModalContent>
                      </Modal>
                  </div>
                  <div className={`grid grid-cols(${selectedCarsCount} gap-4 w-full ${selectedCarsCount === 1 ? 'sm:grid-cols-1' : selectedCarsCount === 2 ? 'sm:grid-cols-2' : ''}`}>
                    {selectedCars.length > 0 ? (
                      selectedCars.map((car, index) => {
                        let CardComponent

                        switch (index) {
                          case 0:
                            CardComponent = CardCar1
                            break
                          case 1:
                            CardComponent = CardCar2
                            break
                          default:
                            CardComponent = CardCarDefault
                            break
                        }

                        return <CardComponent key={car.id} car={car} />
                      })
                    ) : (
                      <CardCarDefault style={{ width: '100%' }} />
                    )}
                  </div>
              </div>
            </div>
            <div className="col-start-1 row-start-1">
              <div className="mt-4 gap-2 flex flex-col xl:max-w-md w-full">
                <h3 className="text-xl font-playpen">Mes documents</h3>
                <div className="flex flex-col justify-center gap-4 flex-wrap md:flex-nowrap md:flex-col">
                  {isLoadingDocuments ? (
                    <Spinner />
                  ) : (
                    <CardDocuments documents={documents} />
                  )}
                  {/* <CardTransactions /> */}
                </div>
              </div>
            </div>
            <div className='col-start-2 row-start-1'>
              <div className="mt-4 gap-2 flex flex-col xl:max-w-md w-full">
                <h3 className="text-xl font-playpen">SOS Voyants</h3>
                <div className="flex flex-col justify-center gap-4 flex-wrap md:flex-nowrap md:flex-col">
                  {isLoadingDocuments ? (
                    <Spinner />
                  ) : (
                    <CardDocuments documents={documents} />
                  )}
                  {/* <CardTransactions /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
  }

export default Dashboard