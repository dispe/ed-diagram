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
  width: '240px',
  // Add CSS styles to position the sidebar
  marginLeft: position === 'left' ? 0 : 'auto',
  marginRight: position === 'right' ? 0 : 'auto',
}));

const Sidebar: React.FC<SidebarProps> = ({ position }) => {
  const SidebarBox = getSidebarBox(position);

  return (
    <SidebarBox>
      <h1>Sidebar position: {position} </h1>
    </SidebarBox>
  );
};

export default Sidebar;