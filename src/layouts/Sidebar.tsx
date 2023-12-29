import React from 'react';
import { styled, Button } from '@mui/material';
import { restoreElements } from '@excalidraw/excalidraw';
import { ImportedDataState } from '@excalidraw/excalidraw/types/data/types';
import { useExcalidrawAPI } from '../utils/ExcalidrawAPIContext';

type SidebarProps = {
  position: 'left' | 'right';
};

const getSidebarBox = (position: SidebarProps['position']) => styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.primary.main,
  width: '240px',
  marginLeft: position === 'left' ? 0 : 'auto',
  marginRight: position === 'right' ? 0 : 'auto',
}));

const Sidebar: React.FC<SidebarProps> = ({ position }) => {
  const SidebarBox = getSidebarBox(position);
  const { excalidrawAPI } = useExcalidrawAPI();


  const updateScene = () => {

    const receivedElements = [
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
      },
      {
        type: 'rectangle',
        version: 141,
        versionNonce: 461174001,
        isDeleted: false,
        id: '1DVXy8D6rom3H1-LLH2-f',
        fillStyle: 'hachure',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: 100.50390625,
        y: 93.67578125,
        strokeColor: '#b6c92a',
        backgroundColor: 'green',
        width: 186.47265625,
        height: 141.9765625,
        seed: 4968410350,
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
    ];
    const existingElements = excalidrawAPI?.getSceneElements();
    const combinedElements = [...receivedElements, ...(existingElements ?? [])];

    console.log(receivedElements);
    console.log(existingElements);
    console.log(combinedElements);

    const sceneData = {
      elements: restoreElements(combinedElements as ImportedDataState['elements'], null),
      appState: {
        viewBackgroundColor: '#edf2ff'
      }
    };
    console.log(sceneData);


    console.log(excalidrawAPI?.id);
    excalidrawAPI?.updateScene(sceneData);
  };

  const resetScene = () => {
    excalidrawAPI!.id = 'test';
    excalidrawAPI?.resetScene();
    console.log(excalidrawAPI?.id);
  }

  return (
    <SidebarBox>
      <h1>Sidebar position: {position} </h1>

      <Button variant="contained" color="success" onClick={updateScene}>
        Load
      </Button>
      <Button variant="outlined" color="error">
        Save
      </Button>
      <Button variant="outlined" color="error" onClick={resetScene}>
        Reset
      </Button>

    </SidebarBox>
  );
};

export default Sidebar;