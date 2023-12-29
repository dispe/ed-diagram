import React from 'react';
import { styled } from '@mui/material';
import { Excalidraw } from '@excalidraw/excalidraw';
import { ExcalidrawImperativeAPI } from '@excalidraw/excalidraw/types/types';

const ContentBox = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
});

type ContentProps = {
  excalidrawAPIHandler: (api: ExcalidrawImperativeAPI) => void;
};

const Content: React.FC<ContentProps> = (({ excalidrawAPIHandler }) => {

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
