import { Card, CardBody } from "@nextui-org/react"
import React from "react"

export const CardDocument1 = () => {

  return (
    <Card isPressable className="bg-primary rounded-xl shadow-md px-3 w-full">
      <CardBody className="py-5">
        <div className="flex gap-2.5">
          <div className="flex flex-col">
            <h1>bye</h1>
          </div>
        </div>
      </CardBody>
    </Card>
    
  )
}
