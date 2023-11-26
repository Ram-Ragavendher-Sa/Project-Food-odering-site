import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid, Icon } from '@mui/material';
import { CardActionArea } from '@mui/material';

export default function Res1() {
  const cardData = [
    { title: 'Card 1', description: 'Description 1', image: '/static/images/cards/contemplative-reptile.jpg' },
    { title: 'Card 2', description: 'Description 2', image: '/static/images/cards/contemplative-reptile.jpg' },
    { title: 'Card 3', description: 'Description 3', image: '/static/images/cards/contemplative-reptile.jpg' },
    { title: 'Card 4', description: 'Description 4', image: '/static/images/cards/contemplative-reptile.jpg' },
    { title: 'Card 5', description: 'Description 5', image: '/static/images/cards/contemplative-reptile.jpg' },
    { title: 'Card 6', description: 'Description 6', image: '/static/images/cards/contemplative-reptile.jpg' },
    { title: 'Card 7', description: 'Description 7', image: '/static/images/cards/contemplative-reptile.jpg' },
    { title: 'Card 8', description: 'Description 8', image: '/static/images/cards/contemplative-reptile.jpg' },
    { title: 'Card 9', description: 'Description 9', image: '/static/images/cards/contemplative-reptile.jpg' },
    { title: 'Card 10', description: 'Description 10', image: '/static/images/cards/contemplative-reptile.jpg' },
    { title: 'Card 11', description: 'Description 11', image: '/static/images/cards/contemplative-reptile.jpg' },
    { title: 'Card 12', description: 'Description 12', image: '/static/images/cards/contemplative-reptile.jpg' },
  ];

  return (
    <center>
        <h3>Restaurent 1</h3>
      <Grid container spacing={2}>
        {cardData.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia sx={{ height: 140 }} image={card.image} title={card.title} />
              <link
         rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'flex-end' }}>
                <Icon>remove_circle</Icon>
                <Icon>add_circle</Icon>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </center>
  );
}
