import { Card, CardBody } from "@nextui-org/react"
import React from "react"

export const CardCar2 = (props) => {
  const { brand, color, country_iso_code, fuel_type, last_maintenance_date, mileage, model, name, plate_number, production_date } = props.car

  return (
    <Card className="bg-default-50 rounded-xl shadow-md px-3 w-full">
      <CardBody className="py-5">
        <div className="flex gap-2.5">
          <div className="flex flex-col">
            <span className="text-black text-xs">Marque : {brand}</span>
            <span className="text-black text-xs">Modèle : {model}</span>
            <span className="text-black text-xs">Couleur : {color}</span>
            <span className="text-black text-xs">Pays : {country_iso_code}</span>
            <span className="text-black text-xs">Type de carburant : {fuel_type}</span>
            <span className="text-black text-xs">Dernier entretien : {last_maintenance_date}</span>
            <span className="text-black text-xs">Kilométrage : {mileage}</span>
            <span className="text-black text-xs">Nom : {name}</span>
            <span className="text-black text-xs">Plaque d'immatriculation : {plate_number}</span>
            <span className="text-black text-xs">Date de production : {production_date}</span>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
