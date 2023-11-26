import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {motion} from 'framer-motion';

export default function ActionAreaC2() {
  return (
    <div>
    <motion.div style={{backgroundColor:'inherit'}}>
    <motion.button whileHover={{scale:'1.1'}} style={{backgroundColor:'inherit',borderColor:'transparent'}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://lakegenevacountrymeats.com/wp-content/uploads/Grilling-Chicken-Breast-1.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          007 PUNJABI DHABA
          </Typography>
          <Typography variant="body2" color="text.secondary">
          North Indian, South Indian, Shawarma, Chinese, Beverages
        <br></br>
      
        Open -11am(Everyday) Closes -11pm(Everyday)
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </motion.button>
              </motion.div>
            </div>
  );
}