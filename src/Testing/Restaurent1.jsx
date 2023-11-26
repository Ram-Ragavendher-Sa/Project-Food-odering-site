import { createBrowserRouter } from "react-router-dom";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button,Grid, Icon } from '@mui/material';
import { CardActionArea } from '@mui/material';

export default function Res1() {
  const cardData = [
    { title: 'Chicken Biriyani', description: 'Non-veg Price-100', image: 'https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg' },
    { title: 'Chicken Noodles', description: 'Non-veg Price-100', image: 'https://www.whiskaffair.com/wp-content/uploads/2018/03/Chicken-Hakka-Noodles-2-3.jpg' },
    { title: 'Chicken Rice', description: 'Non-veg Price-100', image: 'https://www.kannammacooks.com/wp-content/uploads/street-style-chicken-rice-recipe-1-3.jpg' },
    { title: '', description: 'Description 4', image: 'https://i.ytimg.com/vi/dLp6s7ZeFuM/maxresdefault.jpg' },
    { title: 'Card 5', description: 'Description 5', image: 'https://revi.b-cdn.net/wp-content/uploads/2017/01/paneer-biryani-main.jpg' },
    { title: 'Card 6', description: 'Description 6', image: 'https://www.indianveggiedelight.com/wp-content/uploads/2020/04/veg-biryani-instant-pot.jpg' },
    { title: 'Card 7', description: 'Description 7', image: 'https://butfirstchai.com/wp-content/uploads/2023/01/chicken-chettinad-curry-recipes.jpg' },
    { title: 'Card 8', description: 'Description 8', image: 'https://i.ytimg.com/vi/aGYM7X-x6ZU/maxresdefault.jpg' },
    { title: 'Card 9', description: 'Description 9', image: '/static/images/cards/contemplative-reptile.jpg' },
    { title: 'Card 10', description: 'Description 10', image: '/static/images/cards/contemplative-reptile.jpg' },
    { title: 'Card 11', description: 'Description 11', image: '/static/images/cards/contemplative-reptile.jpg' },
    { title: 'Card 12', description: 'Description 12', image: '/static/images/cards/contemplative-reptile.jpg' },
    // Add more card data as needed
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
                <Button>

                <Icon>remove_circle</Icon>
                </Button>
                <Button>

                <Icon>add_circle</Icon>
                </Button>
                
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </center>
  );
}

