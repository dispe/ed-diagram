import React from 'react';
import { styled, Button } from '@mui/material';
import { restoreElements } from '@excalidraw/excalidraw';
import { ExcalidrawImperativeAPI } from '@excalidraw/excalidraw/types/types';

type SidebarProps = {
  position: 'left' | 'right';
  excalidrawAPI: ExcalidrawImperativeAPI | null;
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

const Sidebar: React.FC<SidebarProps> = ({ position, excalidrawAPI }) => {
  const SidebarBox = getSidebarBox(position);

  
const updateScene = () => {
  const sceneData = {
    elements: restoreElements(
      [
        {
          type: 'rectangle',
          version: 141,
          versionNonce: 361174001,
          isDeleted: false,
          id: 'oDVXy8D6rom3H1-LLH2-f',
          fillStyle: 'hachure',
          strokeWidth: 1,
          strokeStyle: 'solid',
          roughness: 1,
          opacity: 100,
          angle: 0,
          x: 100.50390625,
          y: 93.67578125,
          strokeColor: '#c92a2a',
          backgroundColor: 'transparent',
          width: 186.47265625,
          height: 141.9765625,
          seed: 1968410350,
          frameId: null,
          groupIds: [],
          boundElements: null,
          locked: false,
          link: null,
          updated: 1,
          roundness: {
            type: 3,
            value: 32
          }
        }
      ],
      null
    ),
    appState: {
      viewBackgroundColor: '#edf2ff'
    }
  };
  console.log(sceneData);
  
  excalidrawAPI?.updateScene(sceneData);
};


  return (
    <SidebarBox>
      <h1>Sidebar position: {position} </h1>

      <Button variant="contained" color="success" onClick={updateScene}>
        Load
      </Button>
      <Button variant="outlined" color="error">
        Save
      </Button>

    </SidebarBox>
  );
};

export default Sidebar;