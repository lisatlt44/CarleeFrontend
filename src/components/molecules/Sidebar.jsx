import React, { useEffect, useState } from 'react'
import { ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';
import { BsGrid, BsGear, BsPerson, BsSearch, BsCalendar4Week, BsCarFront, BsBoxArrowRight } from "react-icons/bs";
import useWindowWidth from '../../hooks/resizeWindow';


const Sidebar = () => {
  const navigate = useNavigate()
  const { logout } = useAuth()
  const windowWidth = useWindowWidth()
  const isMobile = windowWidth < 768

  const handleLogout = () => {    
    logout()
    navigate('/')
  }

  return (
  <>
      <div className="max-w-[300px] shadow-sidebar" style={{ width: isMobile ? '70px' : '300px' }}>
        <div className="flex items-center justify-center">
          <img 
            src={require("../../assets/CarleeWhite.png")} 
            alt="" 
            className={isMobile ? 'w-16 p-2' : 'w-full p-8'} 
          />
        </div>
        <div className="bg-white shadow-none p-4 gap-4 flex flex-col">
          <Link to="/dashboard" style={{ textDecoration: 'none' }}>
            <ListItem button style={{ borderRadius: '16px' }}>
              <ListItemIcon style={{ fontSize: '20px', color: 'black' }}>
                <BsGrid />
              </ListItemIcon>
              {!isMobile && (
                <ListItemText primary="Tableau de bord" primaryTypographyProps={{ fontFamily: 'openSans', fontSize: '14px', fontWeight: 500 }} />
              )}
            </ListItem>
          </Link>
          <Link to="/indicators" style={{ textDecoration: 'none' }}>
            <ListItem button style={{ borderRadius: '16px' }}>
              <ListItemIcon style={{ fontSize: '20px', color: 'black' }}>
                <BsSearch />
              </ListItemIcon>
              {!isMobile && (
                <ListItemText primary="Chercher un voyant" primaryTypographyProps={{ fontFamily: 'openSans', fontSize: '14px', fontWeight: 500 }} />
              )}
            </ListItem>
          </Link>
          <Link to="/cars" style={{ textDecoration: 'none' }}>
            <ListItem button style={{ borderRadius: '16px' }}>
              <ListItemIcon style={{ fontSize: '20px', color: 'black' }}>
                <BsCarFront />
              </ListItemIcon>
              {!isMobile && (
                <ListItemText primary="Mes véhicules" primaryTypographyProps={{ fontFamily: 'openSans', fontSize: '14px', fontWeight: 500 }} />
              )}
            </ListItem>
          </Link>
          <Link to="/account" style={{ textDecoration: 'none' }}>
            <ListItem button style={{ borderRadius: '16px' }}>
              <ListItemIcon style={{ fontSize: '20px', color: 'black' }}>
                <BsPerson />
              </ListItemIcon>
              {!isMobile && (
                <ListItemText primary="Mon compte" primaryTypographyProps={{ fontFamily: 'openSans', fontSize: '14px', fontWeight: 500 }} />
              )}
            </ListItem>
          </Link>
          <Link to="/calendar" style={{ textDecoration: 'none' }}>
            <ListItem button style={{ borderRadius: '16px' }}>
              <ListItemIcon style={{ fontSize: '20px', color: 'black' }}>
                <BsCalendar4Week />
              </ListItemIcon>
              {!isMobile && (
                <ListItemText primary="Calendrier" primaryTypographyProps={{ fontFamily: 'openSans', fontSize: '14px', fontWeight: 500 }} />
              )}
            </ListItem>
          </Link>
          <Link to="/settings" style={{ textDecoration: 'none' }}>
            <ListItem button style={{ borderRadius: '16px' }}>
              <ListItemIcon style={{ fontSize: '20px', color: 'black' }}>
                <BsGear />
              </ListItemIcon>
              {!isMobile && (
                <ListItemText primary="Paramètres" primaryTypographyProps={{ fontFamily: 'openSans', fontSize: '14px', fontWeight: 500 }} />
              )}
            </ListItem>
          </Link>
          <ListItem button style={{ borderRadius: '16px' }} onClick={handleLogout}>
            <ListItemIcon style={{ fontSize: '20px', color: 'black' }}>
              <BsBoxArrowRight />
            </ListItemIcon>
            {!isMobile && (
                <ListItemText primary="Déconnexion" primaryTypographyProps={{ fontFamily: 'openSans', fontSize: '14px', fontWeight: 500 }} />
              )}
          </ListItem>
        </div>
      </div>
    </>
  )
}

export default Sidebar
