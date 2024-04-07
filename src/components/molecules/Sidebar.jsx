import React, { useState } from 'react'
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import { Dashboard, Search, DriveEta, AccountCircle, CalendarToday, Settings, Logout } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';
import { Button } from '@nextui-org/react';

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

  const [open, setOpen] = useState(false)

  const toggleDrawer = () => {
    setOpen(!open)
  }

  return (
    <div>
      <Button onClick={toggleDrawer}>
        {open ? 'Fermer' : 'Ouvrir'}
      </Button>
      <Drawer
        variant="persistent"
        open={open}
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
            <ListItemIcon><Dashboard color='primary' /></ListItemIcon>
            <ListItemText primary="Tableau de bord" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><Search color='primary' /></ListItemIcon>
            <ListItemText primary="Chercher un voyant" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><DriveEta color='primary' /></ListItemIcon>
            <ListItemText primary="Mes véhicules" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><AccountCircle color='primary' /></ListItemIcon>
            <ListItemText primary="Mon compte" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><CalendarToday color='primary' /></ListItemIcon>
            <ListItemText primary="Calendrier" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><Settings color='primary' /></ListItemIcon>
            <ListItemText primary="Paramètres" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><Logout color='primary' /></ListItemIcon>
            <ListItemText primary="Déconnexion" onClick={handleLogout} />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default Sidebar
