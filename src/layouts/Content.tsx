import React from 'react';
import { styled } from '@mui/material';
import { Excalidraw } from '@excalidraw/excalidraw';
import { ExcalidrawImperativeAPI } from '@excalidraw/excalidraw/types/types';
import { useExcalidrawAPI } from '../utils/ExcalidrawAPIContext';

const ContentBox = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
});


const Content: React.FC = (() => {
  const { setExcalidrawAPI } = useExcalidrawAPI();

  const excalidrawAPIHandler = (excalidrawAPI: ExcalidrawImperativeAPI) => {
    setExcalidrawAPI(excalidrawAPI);
  };

  return (
    <>
      <ContentBox>
        <Excalidraw
          gridModeEnabled={true}
          excalidrawAPI={(api: ExcalidrawImperativeAPI) => excalidrawAPIHandler(api)}
        />
      </ContentBox>
    </>
  );

});

export default Content;
