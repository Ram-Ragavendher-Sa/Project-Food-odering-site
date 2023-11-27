import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';
export default function ActionAreaCard3() {
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
          image="https://t4.ftcdn.net/jpg/03/41/57/93/360_F_341579361_gKr5MAjemhMpBmhd61tj9MGRqX86KgNq.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Parotta
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Parotta is a flaky kerala flatbread which is popular all over the world. This bread is easy to make at home as well.
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