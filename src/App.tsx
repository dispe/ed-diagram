// The App component is the root component of the application.
// It is the parent of all other components.
// It will hold the layout using the MaterialUI (MUI) library
// All the styles for all components will be done using MUI with scss and css modules files
// The layout should work on desktop and mobile so should be responsive
// The layout consists in 3 rows: header, body and footer
// The header row it is a dedicated component and will be detailed in there
// The header row is on top (first row) with fixed postion, fixed height, will not leave the viewport by scrolling
// The body row is on the middle (second row) , starting under the header row and will scroll with the page
// The body row is a flexible 3 columns layout with left and right sidebars and a content area
// All 3 body components will be detailed in their dedicated components
// All 3 body components should fill the body row area on all height between the header row and footer
// The sidebars are on the left and right side of the body row area
// The sidebars should be collapsable and should have a minimum width just to hold material ui icon width with a resonable margin
// The sidebars should be dragble
// The collapsable and dragable functionality should be in sidebar component
// The sidebars are fixed positioned and will not leave the viewport by scrolling
// The sidebars should have a minimum width just to hold material ui icon width with a resonable margin
// The sidebars should have a maximum width in order to hold like 3 or 4 icons per row
// The content area should adapt it's width based on sidebars width when these are resized or collapsed
// The content area should fill all the height between the header row and footer
// The footer row is on the bottom (third row) with a fixed height and will not leave the viewport by scrolling


import React, { useRef, useState } from 'react';
import Header from './layouts/Header';
import Sidebar from './layouts/Sidebar';
import Content from './layouts/Content';
import Footer from './layouts/Footer';
import { styled } from '@mui/material';
import { ExcalidrawImperativeAPI } from '@excalidraw/excalidraw/types/types';

const LayoutBox = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: theme.palette.primary.light,
}));

const HeaderBox = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  height: '64px',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: theme.spacing(2),
}));

const ContentBox = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: 'yellow',
  height: 'calc(100vh - 64px)',
});

const FooterBox = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  height: '64px',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: theme.spacing(2),
}));

const App = () => {

  // we need to store the excalidraw API in order to use it in all components
  // it is set by the Excalidraw component
  const [excalidrawAPI, setExcalidrawAPI] = useState<ExcalidrawImperativeAPI | null>(null);

  const excalidrawAPIHandler = (api: ExcalidrawImperativeAPI) => {
    setExcalidrawAPI(api);
  };

  return (
    <LayoutBox>
      <HeaderBox><Header /></HeaderBox>
      <ContentBox>
        <Sidebar position='left' excalidrawAPI={excalidrawAPI} />
        <Content
          excalidrawAPIHandler={excalidrawAPIHandler}
        />
        <Sidebar position='right' excalidrawAPI={excalidrawAPI} />
      </ContentBox>
      <FooterBox><Footer /></FooterBox>
    </LayoutBox>
  );
};

export default App;