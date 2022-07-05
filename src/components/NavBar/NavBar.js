import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CartWidget from '../CartWidget/CartWidget'
import {Link} from 'react-router-dom';
import {useState} from 'react'
import './NavBar.css';
const categories = ['Perros', 'Gatos'];


const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

  return (
    <AppBar position="static" className="nav-bar">
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          
          <h1>
            <Link className="main-link link-nav" to={`/`} ><img src="/logo.png"/></Link>
          </h1>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu 
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem  
                onClick={handleCloseNavMenu}
                >
                  <Link className="link-nav" to={`/`}>Inicio</Link>
                </MenuItem>
                <MenuItem  
                onClick={handleCloseNavMenu}
                >
                  <Link className="link-nav" to={`/aboutus`}>Nosotros</Link>
                </MenuItem>
                <MenuItem  
                onClick={handleClick}
                >
                  Productos
                </MenuItem>
                
                <MenuItem  
                onClick={handleCloseNavMenu}
                >
                  <Link className="link-nav" to={`/contact`}>Contacto</Link>
                </MenuItem>
        
            </Menu>
          </Box>
          
            <Link className="nav-title" to={'/'}><img src="/logo.png"/></Link>
          <Box className="navegacion" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Link className="link-nav" to={`/`}><Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                Inicio

              </Button></Link>
              <Link className="link-nav" to={`/aboutus`}><Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                Nosotros

              </Button></Link>
              <Button
                    sx={{ my: 2, color: 'black', display: 'block' }}
                    onClick={handleClick}
                    
                >
                    Productos
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    {categories.map( (cat) => {
                        return <MenuItem key={cat} onClick={handleClose}><Link className="link-nav" to={`/category/${cat}`}>{cat}</Link></MenuItem>
                    })}
                </Menu>
              <Link className="link-nav" to={`/contact`}><Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                Contacto
              </Button></Link>
          </Box>

          <CartWidget/>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
