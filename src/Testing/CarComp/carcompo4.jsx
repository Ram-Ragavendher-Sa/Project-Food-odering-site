import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';
export default function ActionAreaCard4() {
  return (
    <div>
      <Link to={'/found'}>
    <motion.div style={{backgroundColor:'inherit'}}>
    <motion.button whileHover={{scale:'1.1'}} style={{backgroundColor:'inherit',borderColor:'transparent'}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://production-media.gousto.co.uk/cms/mood-image/2047---Spicy-Peanut-Chicken-Noodles0227-1616494881154.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Chicken Noodles
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Chicken noodles are a delicious flavor packed meal of stir fried noodles, chicken, vegetables and sauces.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </motion.button>
    </motion.div>
          </Link>
  </div>
  );
}