import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { mainNavbarItems } from './consts/navbarItems';
import { navbarStyles } from './styles';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState(""); // Estado para controlar el enlace activo

    const handleActiveLink = (route) => setActiveLink(route); // Función para actualizar el estado del enlace activo

    return (
        <Drawer
          sx={navbarStyles.drawer}
          variant="permanent"
          anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {mainNavbarItems.map((item, index) => (
            <ListItem
                button
                key={item.id}
                component={NavLink}
                to={item.route}
                onClick={() => handleActiveLink(item.route)} // Actualizar el estado del enlace activo al hacer clic
                sx={{ // Estilos condicionales para resaltar el enlace activo
                  backgroundColor: item.route === activeLink ? "#f0f0f0" : "inherit",
                  fontWeight: item.route === activeLink ? "bold" : "normal"
                }}
            >
              <ListItemIcon
                sx={navbarStyles.icons}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                sx={navbarStyles.text}
                primary={item.label}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    );
};

export default Navbar;
