import React, { useEffect, useState } from "react";
import { Card, CardBody } from "@nextui-org/react";
import { FaCar, FaCarSide, FaGasPump } from "react-icons/fa";
import { BsSpeedometer2 } from "react-icons/bs";
import { TbBrandApplePodcast } from "react-icons/tb";
import { GrVmMaintenance } from "react-icons/gr";
import { FaPlateWheat } from "react-icons/fa6";

export const CardCar1 = (props) => {
  const { brand, model, name, fuel_type, mileage, last_maintenance_date, country_iso_code, plate_number } = props.car;

  const [carPicture, setCarPicture] = useState('');

  useEffect(() => {
    // Remplacer `carId` par la propriété appropriée de `props.car`
    const carId = props.car.id; 
    fetch(`/api/car-pictures/car/${carId}`, {
      headers: {
        'Authorization': `Bearer ${props.token}`, // Assurez-vous que `props.token` contient le JWT nécessaire pour l'authentification
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data && data.length > 0) {
        setCarPicture(data[0].picture); // Assumant que l'API renvoie un tableau et que `picture` est le chemin de l'image
      }
    })
    .catch(error => console.error('Error fetching car picture:', error));
  }, [props.car]);

  return (
    <Card isPressable className="bg-primary rounded-xl shadow-md px-3 w-full h-full">
      <CardBody className="py-5">
        <div className="rounded-lg p-4 w-full text-white">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">{name}</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <div className="text-white rounded-full p-2">
                <img src={require("../../assets/pictureCar1.png")} alt="Car" />
              </div>
            </div>
        <div className="flex flex-col">
        <div className="flex items-center">
            {/* Replace this div with your odometer icon SVG */}
            <div className=" text-white rounded-full p-2">
              <TbBrandApplePodcast />
            </div>
            <span className="ml-2">{brand} {model}</span>
          </div>
          <div className="flex items-center">
            <div className=" text-white rounded-full p-2">
              <FaGasPump />
            </div>
            <span className="ml-2">{fuel_type}</span>
          </div>
          <div className="flex items-center">
            <div className=" text-white rounded-full p-2">
              <BsSpeedometer2 />
            </div>
            <span className="ml-2">{mileage} kms</span>
          </div>
          <div className="flex items-center">
            <div className=" text-white rounded-full p-2">
              <GrVmMaintenance />
            </div>
            <span className="ml-2">{last_maintenance_date}</span>
          </div>
          <div className="flex items-center">
            <div className=" text-white rounded-full p-2">
              <FaCarSide />
            </div>
            <span className="ml-2">{country_iso_code}</span>
          </div>
          <div className="flex items-center">
            <div className=" text-white rounded-full p-2">
              <FaPlateWheat />
            </div>
            <span className="ml-2">{plate_number}</span>
          </div>
        </div>
      </div>
      {/* <div className="mt-4">
        <span className="text-sm">Mise en circulation : {production_date}</span>
      </div> */}
    </div>
      </CardBody>
    </Card>
    
  )
}
