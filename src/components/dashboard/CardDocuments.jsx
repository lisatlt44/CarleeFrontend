import { Avatar, Card, CardBody } from "@nextui-org/react"
import React from "react"
import DragAndDrop from "../molecules/DragAndDrop"

export const CardDocuments = (documents) => {
  // const { brand, color, country_iso_code, fuel_type, last_maintenance_date, mileage, model, name, plate_number, production_date } = props.car
  return (
    <>
      <Card className="bg-default-50 rounded-xl shadow-md px-4 py-6 w-full">
        <CardBody className="py-5 gap-6">
          <div className="flex gap-2.5 justify-center">
            <DragAndDrop />      
          </div>
          <div className="flex flex-col gap-6 ">
          {documents.length > 0 ? (
            <ul>
              {documents.map((document) => (
                <li key={document.id}>
                  <p>Nom : {document.name}</p>
                  <p>Type : {document.type}</p>
                  <p>Fichier : {document.file}</p>
                  <p>Taille du fichier : {document.file_size}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>Aucun document trouvé.</p>
          )}
        </div>

          {/* <div className="flex items-center gap-6 flex-col">
          
          </div> */}
        </CardBody>
      </Card>
  </>
  )
}
