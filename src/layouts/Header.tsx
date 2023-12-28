import React from 'react';

const Header: React.FC = ( (props) => {

  return (
    <>
      <h1>Header {JSON.stringify(props)} </h1>
    </>
  );

});

export default Header;