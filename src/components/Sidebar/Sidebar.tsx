import React from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Divider, Drawer, IconButton, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { DrawerHeader, LogoStyled } from './Sidebar.styled';

interface ISidebarProps {
  isOpen: boolean;
  handleDrawerToggle: () => void;
  children: React.ReactNode;
}

const DRAWER_WIDTH = 240;

export const Sidebar: React.FC<ISidebarProps> = ({
  isOpen,
  children,
  handleDrawerToggle,
}) => {
  const theme = useTheme();
  return (
    <>
      <Drawer
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          '& .MUIDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={isOpen}
      >
        <DrawerHeader>
          <LogoStyled>
            <Typography variant="subtitle2" component="div" align="left">
              ITuneSearch Logo
            </Typography>
          </LogoStyled>
          <IconButton onClick={handleDrawerToggle}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {children}
      </Drawer>
    </>
  );
};
