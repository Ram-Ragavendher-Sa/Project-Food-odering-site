import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {motion} from 'framer-motion';

export default function ActionAreaC4() {
  return (
    <div>
    <motion.div style={{backgroundColor:'inherit'}}>
    <motion.button whileHover={{scale:'1.1'}} style={{backgroundColor:'inherit',borderColor:'transparent'}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://c.pxhere.com/photos/22/cb/smoke_bbq_barbecue_grill_grilled_meat_food_pork-554844.jpg!d"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          RADISSON BLU
          </Typography>
          <Typography variant="body2" color="text.secondary">
          South Indian, North Indian, Chinese, Sichuan, Shawarma, Biryani, Ice Cream, Shake
          <br>
          </br>
          Open - 11am(Everyday) Closes -11pm(Everyday)
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </motion.button>
    </motion.div>
  </div>
  );
}