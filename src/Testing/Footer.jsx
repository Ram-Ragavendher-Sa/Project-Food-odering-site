import { Link } from '@mui/material';
import React from 'react';
import { Instagram, Twitter, Facebook } from '@mui/icons-material';

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
        <h2 style={{color:'white'}}>ABOUT FOODO</h2>
        <ul style={listStyle}>
          <li style={listItemStyle}><Link style={{color:'white'}}>
            Who We Are
          </Link>
            </li>
          <li style={listItemStyle}><Link style={{color:'white'}}>Blog</Link></li>
          <li style={listItemStyle}><Link style={{color:'white'}}>Work With Us</Link></li>
          <li style={listItemStyle}><Link style={{color:'white'}}>Investor Relations</Link></li>
          <li style={listItemStyle}><Link style={{color:'white'}}>Report Fraud</Link></li>
          <li style={listItemStyle}><Link style={{color:'white'}}>Press Kit</Link></li>
          <li style={listItemStyle}><Link style={{color:'white'}}>Contact Us</Link></li>
        </ul>
      </div>
      <div style={paperStyle}>
        <h2 style={{color:'white'}}>FOODOVERSE</h2>
        <ul style={listStyle}>
        <li style={listItemStyle}><Link style={{color:'white'}}>Foodo</Link></li>
          <li style={listItemStyle}><Link style={{color:'white'}}>Blinket</Link></li>
          <li style={listItemStyle}><Link style={{color:'white'}}>Feeding India</Link></li>
          <li style={listItemStyle}><Link style={{color:'white'}}>Hyperpure</Link></li>
          <li style={listItemStyle}><Link style={{color:'white'}}>Foodoland</Link></li>
        </ul>
      </div>
      <div style={lastPaperStyle}>
        <h2 style={{color:'white'}}>FOR RESTAURANTS</h2>
        <ul style={listStyle}>
        <li style={listItemStyle}><Link style={{color:'white'}}>Partner With Us</Link></li>
          <li style={listItemStyle}><Link style={{color:'white'}}>Apps For You</Link></li>
          
        </ul>
        <h2 style={{color:'white'}}>FOR ENTERPRISES</h2>
        <ul style={listStyle}>
          
          <li style={listItemStyle}><Link style={{color:'white'}}>Foodo For Enterprise</Link></li>
        </ul>
      </div>
      <div style={paperStyle}>
        <h2 style={{color:'white'}}>LEARN MORE</h2>
        <ul style={listStyle}>
        <li style={listItemStyle}><Link style={{color:'white'}}>Privacy</Link></li>
          <li style={listItemStyle}><Link style={{color:'white'}}>Security</Link></li>
          <li style={listItemStyle}><Link style={{color:'white'}}>Terms</Link></li>
          <li style={listItemStyle}><Link style={{color:'white'}}>Sitemap</Link></li>
        </ul>
      </div>
    <div>

   <Facebook/>
    <Twitter/>
    <Instagram/>
    </div>
    </div>

  );
};

export default Footer;
