import React from 'react';
import { useExcalidrawAPI } from '../utils/ExcalidrawAPIContext';

const Header: React.FC = ( (props) => {
  const { excalidrawAPI } = useExcalidrawAPI();
  const diagram_name = excalidrawAPI?.getAppState().name;

  return (
    <>
      <h1>Header {JSON.stringify(props)} Opened diagram: {diagram_name} </h1>
    </>
  );

});

export default Header;