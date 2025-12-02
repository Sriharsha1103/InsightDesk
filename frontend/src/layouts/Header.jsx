import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/bvrit-logo.png';
import { MENU_ITEMS } from '../utils/constants';

const menuItems = MENU_ITEMS;

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleUserMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{
        px: { xs: 1, sm: 2 },
        backgroundColor: 'transparent',
        boxShadow: 'none',
      }}
    >
      <Toolbar>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            minWidth: 0,
            mr: 2,
            flexShrink: 0,
          }}
        >
          <img
            src={logo}
            alt="BVRIT Logo"
            style={{
              height: 40,
              objectFit: 'contain',
              maxWidth: '100%',
              marginRight: 8,
            }}
          />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          {menuItems.map((item) => (
            <Button key={item} color="inherit" sx={{ ml: 2 }}>
              {item}
            </Button>
          ))}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
          <IconButton
            onClick={handleUserMenuOpen}
            sx={{ p: 0, mr: 1 }}
            aria-controls={anchorEl ? 'user-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={anchorEl ? 'true' : undefined}
          >
            <Avatar alt="Harsha" src="" />
          </IconButton>
          <Typography
            variant="body1"
            sx={{
              cursor: 'pointer',
              fontWeight: 500,
              display: { xs: 'none', sm: 'block' },
            }}
            onClick={handleUserMenuOpen}
          >
            Harsha
          </Typography>
          <Menu
            id="user-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleUserMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={handleUserMenuClose}>Settings</MenuItem>
            <MenuItem onClick={handleUserMenuClose}>Logout</MenuItem>
          </Menu>
        </Box>
        {isMobile && (
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ ml: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerClose}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <Box sx={{ width: 200 }} role="presentation">
          {menuItems.map((item) => (
            <Button
              key={item}
              color="inherit"
              fullWidth
              sx={{ justifyContent: 'flex-start', py: 2 }}
              onClick={handleDrawerClose}
            >
              {item}
            </Button>
          ))}
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Header;
