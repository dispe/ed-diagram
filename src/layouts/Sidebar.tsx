import React from 'react';
import { styled } from '@mui/material';
import { Margin } from '@mui/icons-material';

type SidebarProps = {
  position: 'left' | 'right';
};

const getSidebarBox = (position: SidebarProps['position']) => styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.primary.main,
  // Add CSS styles to position the sidebar
  marginLeft: position === 'left' ? 0 : 'auto',
  marginRight: position === 'right' ? 0 : 'auto',
  width: '240px',
  // height: 'calc(100vh - 64px)',
}));

const Sidebar: React.FC<SidebarProps> = ({ position }) => {
  const maxWidth = 240;
  // set a minimum width for the sidebar in order to hold one standard material UI icon with margin of 2px
  const minWidth = 48 + 2 * 2;
  const SidebarBox = getSidebarBox(position);

  return (
    <SidebarBox>
      <h1>Sidebar position: {position} </h1>
    </SidebarBox>
  );
};

export default Sidebar;