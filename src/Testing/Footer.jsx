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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const lastPaperStyle = {
    ...paperStyle,
    borderRight: 'none',
  };

  const listStyle = {
    listStyleType: 'none', // Remove bullet points
    padding: 0, // Remove default padding
    textAlign: 'left',
    marginTop: '10px',
  };

  const listItemStyle = {
    marginBottom: '8px', // Adjust spacing between list items
  };

  return (
    <div style={columnStyle}>
      <div style={paperStyle}>
        <h2>ABOUT ZOMATO</h2>
        <ul style={listStyle}>
          <li style={listItemStyle}>Who We Are</li>
          <li style={listItemStyle}>Blog</li>
          <li style={listItemStyle}>Work With Us</li>
          <li style={listItemStyle}>Investor Relations</li>
          <li style={listItemStyle}>Report Fraud</li>
          <li style={listItemStyle}>Press Kit</li>
          <li style={listItemStyle}>Contact Us</li>
        </ul>
      </div>
      <div style={paperStyle}>
        <h2>ZOMAVERSE</h2>
        <ul style={listStyle}>
          <li style={listItemStyle}>Zomato</li>
          <li style={listItemStyle}>Blinkit</li>
          <li style={listItemStyle}>Feeding India</li>
          <li style={listItemStyle}>Hyperpure</li>
          <li style={listItemStyle}>Zomaland</li>
        </ul>
      </div>
      <div style={lastPaperStyle}>
        <h2>FOR RESTAURANTS</h2>
        <ul style={listStyle}>
          <li style={listItemStyle}>Partner With Us</li>
          <li style={listItemStyle}>Apps For You</li>
        </ul>
        <h2>FOR ENTERPRISES</h2>
        <ul style={listStyle}>
          <li style={listItemStyle}>Zomato For Enterprise</li>
        </ul>
      </div>
      <div style={paperStyle}>
        <h2>LEARN MORE</h2>
        <ul style={listStyle}>
          <li style={listItemStyle}>Privacy</li>
          <li style={listItemStyle}>Security</li>
          <li style={listItemStyle}>Terms</li>
          <li style={listItemStyle}>Sitemap</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
