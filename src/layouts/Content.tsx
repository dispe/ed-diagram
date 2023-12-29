import React from 'react';
import { styled } from '@mui/material';
import { Excalidraw } from '@excalidraw/excalidraw';
import { ExcalidrawImperativeAPI } from '@excalidraw/excalidraw/types/types';
import { useDispatch } from 'react-redux';

const ContentBox = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
});

const Content: React.FC = (() => {
  const dispatch = useDispatch();

  const setExcalidrawAPI = (excalidrawAPI: ExcalidrawImperativeAPI) => {
    dispatch({ type: 'SET_EXCALIDRAW_API', payload: excalidrawAPI });
  };

  return (
    <>
      <ContentBox>
        <Excalidraw
          gridModeEnabled={true}
          excalidrawAPI={setExcalidrawAPI}
        />
      </ContentBox>
    </>
  );

});

export default Content;