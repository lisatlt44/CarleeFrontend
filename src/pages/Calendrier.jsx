import React from 'react';
import Sidebar from '../components/molecules/Sidebar';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import '../styles/Calendrier.css';

function Calendrier() {
  return (
    <div className='flex w-full h-full absolute'>
      <Sidebar />
      <div className='flex-grow p-4 md:p-16 flex flex-col'>
        <h1 className='text-2xl font-semibold font-playpen mb-4'>Rappels</h1>
        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>NOM DU RAPPEL</TableColumn>
            <TableColumn>DATE</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>Contrôle technique</TableCell>
              <TableCell>20/07/2024</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Rendez-vous garage</TableCell>
              <TableCell>30/09/2024</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default Calendrier;