import React, { useState } from 'react'
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import { Dashboard, Search, DriveEta, AccountCircle, CalendarToday, Settings, Logout } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';
import { BsGrid, BsGear, BsPerson, BsSearch, BsCalendar4Week, BsCarFront, BsBoxArrowRight } from "react-icons/bs";

const drawerWidth = 240;

const Sidebar = () => {
  const navigate = useNavigate()
  const { logout } = useAuth()

  const handleLogout = () => {    
    // Supprimer le token du local storage
    logout()
    // Rediriger vers la page d'accueil
    navigate('/')
  }

  return (
    <div>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <div sx={{ toolbar: true }} />
        <List>
          <ListItem button>
            <ListItemIcon><BsGrid  color='primary' size={20} /></ListItemIcon>
            <ListItemText primary="Tableau de bord" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><BsSearch color='primary' size={20} /></ListItemIcon>
            <ListItemText primary="Chercher un voyant" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><BsCarFront color='primary' size={20} /></ListItemIcon>
            <ListItemText primary="Mes véhicules" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><BsPerson color='primary' size={20} /></ListItemIcon>
            <ListItemText primary="Mon compte" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><BsCalendar4Week color='primary' size={20} /></ListItemIcon>
            <ListItemText primary="Calendrier" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><BsGear color='primary' size={20} /></ListItemIcon>
            <ListItemText primary="Paramètres" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><BsBoxArrowRight color='primary' size={20} /></ListItemIcon>
            <ListItemText primary="Déconnexion" onClick={handleLogout} />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default Sidebar
