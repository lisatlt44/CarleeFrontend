import { Card, CardBody } from "@nextui-org/react"
import React from "react"

export const CardCarDefault = () => {
  return (
    <Card className="bg-primary rounded-xl shadow-md px-3 w-full">
      <CardBody className="py-5">
        <h1 className="text-white">Ajoute une voiture !</h1>        
      </CardBody>
    </Card>
  )
}
