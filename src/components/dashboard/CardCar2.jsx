import { Card, CardBody } from "@nextui-org/react"
import React from "react"
import { FaCar } from "react-icons/fa"
import { FaGasPump } from "react-icons/fa6"
import { BsSpeedometer2 } from "react-icons/bs"
import { TbBrandApplePodcast } from "react-icons/tb"
import { GrVmMaintenance } from "react-icons/gr"

export const CardCar2 = (props) => {
  const { brand, color, country_iso_code, fuel_type, last_maintenance_date, mileage, model, name, plate_number, production_date } = props.car

  return (
    <Card isPressable className="bg-success rounded-xl shadow-md px-3 w-full">
      <CardBody className="py-5">
      <div className=" rounded-lg p-4 w-full text-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{name}</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <div className=" text-white rounded-full p-2">
          <FaCar size={64}/>
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
