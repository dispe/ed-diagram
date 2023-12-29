import React from 'react';
import { styled } from '@mui/material';
import { Excalidraw } from '@excalidraw/excalidraw';
import { ExcalidrawImperativeAPI } from '@excalidraw/excalidraw/types/types';
import { useExcalidrawAPI } from '../utils/ExcalidrawAPIContext';
import { useDiagram } from '../utils/ExcalidrawAPIContext';

const ContentBox = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
});


const Content: React.FC = (() => {
  const { setExcalidrawAPI } = useExcalidrawAPI();
  const diagram = useDiagram();
  console.log('Content diagram: ', diagram);

  const excalidrawAPIHandler = (excalidrawAPI: ExcalidrawImperativeAPI) => {
    setExcalidrawAPI(excalidrawAPI);
    
    if (diagram) {
      diagram.excalidrawAPI = excalidrawAPI;
    }

  };

  return (
    <>
      <ContentBox>
        <Excalidraw
          gridModeEnabled={true}
          excalidrawAPI={(api: ExcalidrawImperativeAPI) => excalidrawAPIHandler(api)}
          name='test-name'
        />
      </ContentBox>
    </>
  );

});

export default Content;
