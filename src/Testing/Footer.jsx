import React from 'react';

const Footer = () => {
  const columnStyle = {
    display: 'flex',
    flexDirection: 'row',
  };

  const paperStyle = {
    flex: 1,
    borderRight: '1px solid #ccc',
    padding: '20px',
    textAlign: 'center',
  };

  const lastPaperStyle = {
    ...paperStyle,
    borderRight: 'none',
  };

  return (
    <div style={columnStyle}>
      <div style={paperStyle}>
        <h2>ABOUT TOMATO</h2>
        
        <li></li>
        <li></li>
        <li></li>
      </div>
      <div style={paperStyle}>
        <h2>TOMAVERSE</h2>
      </div>
      <div style={paperStyle}>
        <h2>FOR RESTAURANTS</h2>
      </div>
      <div style={lastPaperStyle}>
        <h2>FOR ENTERPRISES</h2>
      </div>
    </div>
  );
};

export default Footer;
