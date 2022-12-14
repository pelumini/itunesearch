import React from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Switch as ThemeSwitch,
} from '@mui/material';

interface IAppBarComponentProps {
  handleDrawerToggle: () => void;
  onThemeChange: () => void;
  isDarkMode: boolean;
  isDrawerOpen: boolean;
}

export const AppBarComponent: React.FC<IAppBarComponentProps> = ({
  handleDrawerToggle,
  onThemeChange,
  isDarkMode,
  isDrawerOpen,
}): JSX.Element => {
  return (
    <div>
      <AppBar position="static" variant="elevation" className="appbar-wrapper">
        <Toolbar variant="dense">
          <IconButton
            color="inherit"
            onClick={handleDrawerToggle}
            edge="start"
            sx={{ mr: 2, ...(isDrawerOpen && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
            ITuneSearch
          </Typography>
          {isDarkMode ? <DarkModeIcon /> : null}
          <ThemeSwitch size="small" onChange={onThemeChange} color="default" />
          {!isDarkMode ? <LightModeIcon /> : null}
        </Toolbar>
      </AppBar>
    </div>
  );
};
