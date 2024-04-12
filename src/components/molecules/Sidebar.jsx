import React from 'react'
import { ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';
import { BsGrid, BsGear, BsPerson, BsSearch, BsCalendar4Week, BsCarFront, BsBoxArrowRight } from "react-icons/bs";
import { Button, Card } from '@nextui-org/react';

const Sidebar = () => {
  const navigate = useNavigate()
  const { logout } = useAuth()

  const handleLogout = () => {    
    logout()
    navigate('/')
  }

  return (
  <>
      <div className="w-[300px] shadow-sidebar">
        <div className="flex items-center justify-center">
          <img src={require("../../assets/CarleeWhite.png")} alt="" className='w-full p-8' />
        </div>
        <div className="bg-white shadow-none p-4 gap-4 flex flex-col">
          <ListItem button style={{ borderRadius: '16px' }}>
            <ListItemIcon style={{ fontSize: '20px', color: 'black' }}>
              <BsGrid />
            </ListItemIcon>
            <ListItemText primary="Tableau de bord" primaryTypographyProps={{fontFamily: 'openSans', fontSize: '14px', color: 'black', fontWeight: 500 }} />
          </ListItem>
          <ListItem button style={{ borderRadius: '16px' }}>
            <ListItemIcon style={{ fontSize: '20px', color: 'black' }}>
              <BsSearch />
            </ListItemIcon>
            <ListItemText primary="Chercher un voyant" primaryTypographyProps={{fontFamily: 'openSans', fontSize: '14px', color: 'black', fontWeight: 500 }} />
          </ListItem>
          <ListItem button style={{ borderRadius: '16px' }}>
            <ListItemIcon style={{ fontSize: '20px', color: 'black' }}>
              <BsCarFront />
            </ListItemIcon>
            <ListItemText primary="Mes véhicules" primaryTypographyProps={{fontFamily: 'openSans', fontSize: '14px', color: 'black', fontWeight: 500 }} />
          </ListItem>
          <ListItem button style={{ borderRadius: '16px' }}>
            <ListItemIcon style={{ fontSize: '20px', color: 'black' }}>
              <BsPerson />
            </ListItemIcon>
            <ListItemText primary="Mon compte" primaryTypographyProps={{fontFamily: 'openSans', fontSize: '14px', color: 'black', fontWeight: 500 }} />
          </ListItem>
          <ListItem button style={{ borderRadius: '16px' }}>
            <ListItemIcon style={{ fontSize: '20px', color: 'black' }}>
              <BsCalendar4Week />
            </ListItemIcon>
            <ListItemText primary="Calendrier" primaryTypographyProps={{fontFamily: 'openSans', fontSize: '14px', color: 'black', fontWeight: 500 }} />
          </ListItem>
          <ListItem button style={{ borderRadius: '16px' }}>
            <ListItemIcon style={{ fontSize: '20px', color: 'black' }}>
              <BsGear />
            </ListItemIcon>
            <ListItemText primary="Paramètres" primaryTypographyProps={{fontFamily: 'openSans', fontSize: '14px', color: 'black', fontWeight: 500 }} />
          </ListItem>
          <ListItem button style={{ borderRadius: '16px' }} onClick={handleLogout}>
            <ListItemIcon style={{ fontSize: '20px', color: 'black' }}>
              <BsBoxArrowRight />
            </ListItemIcon>
            <ListItemText primary="Se déconnecter" primaryTypographyProps={{fontFamily: 'openSans', fontSize: '14px', color: 'black', fontWeight: 500 }} />
          </ListItem>
        </div>
      </div>
    </>
  )
}

export default Sidebar
