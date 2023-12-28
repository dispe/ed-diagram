import { Excalidraw } from '@excalidraw/excalidraw';
import React from 'react';
import { styled } from '@mui/material';



const ContentBox = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
});

const Content: React.FC = ((props) => {

  return (
    <>
      <ContentBox>
        <Excalidraw gridModeEnabled={true} />
      </ContentBox>
    </>
  );

});

export default Content;