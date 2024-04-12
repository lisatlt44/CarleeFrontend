import { Button } from "@nextui-org/react";
import React, { useState } from "react"
import { FileUploader } from "react-drag-drop-files"

const fileTypes = ["JPG", "PNG", "GIF", "PDF"];

function DragAndDrop() {
  const [file, setFile] = useState(null)
  const handleChange = (file) => {
    setFile(file)
  }

  return (
    <div className="flex justify-center items-center">
      <FileUploader 
        handleChange={handleChange} 
        name="file" 
        types={fileTypes}
        style={{
          border: "2px dashed #ccc",
          borderRadius: "8px",
          padding: "20px",
          textAlign: "center",
        }}
        className="text-lg font-semibold text-gray-600"
      >
        <div className="text-center">
          <p className="mb-2 font-openSans border-dashed border-2 border-divider py-2 px-6 rounded-xl">Glissez-déposez des fichiers ici ou</p>
          <Button className="text-white font-openSans mt-2" color="primary" radius="md" variant="solid">
            Parcourir
          </Button>  
        </div>
      </FileUploader>
    </div>
  )
}

export default DragAndDrop