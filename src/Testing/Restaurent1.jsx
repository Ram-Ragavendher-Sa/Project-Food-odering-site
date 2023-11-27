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
    { title: 'Chicken Biriyani', description: 'Non-veg/ Price-130', image: 'https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg' },
    { title: 'Chicken Noodles', description: 'Non-veg/ Price-120', image: 'https://www.whiskaffair.com/wp-content/uploads/2018/03/Chicken-Hakka-Noodles-2-3.jpg' },
    { title: 'Chicken Rice', description: 'Non-veg/ Price-120', image: 'https://www.kannammacooks.com/wp-content/uploads/street-style-chicken-rice-recipe-1-3.jpg' },
    { title: 'Chicken Chilli', description: 'Non-veg/ Price-50', image: 'https://i.ytimg.com/vi/dLp6s7ZeFuM/maxresdefault.jpg' },
    { title: 'Paneer Rice', description: 'Veg/ Price-90', image: 'https://revi.b-cdn.net/wp-content/uploads/2017/01/paneer-biryani-main.jpg' },
    { title: 'Vegetable Biriyani', description: 'Veg/ Price-90', image: 'https://www.cookwithmanali.com/wp-content/uploads/2019/09/Vegetable-Biryani-Restaurant-Style.jpg' },
    { title: 'Chicken Gravy', description: 'Non-veg/ Price-80', image: 'https://butfirstchai.com/wp-content/uploads/2023/01/chicken-chettinad-curry-recipes.jpg' },
    { title: 'Mutton Gravy', description: 'Non-veg/ Price-100', image: 'https://i.ytimg.com/vi/aGYM7X-x6ZU/maxresdefault.jpg' },
    { title: 'Parotta', description: 'Veg/ Price-20', image: 'https://www.thisday.app/uploads/Malabar_Parotta_9d1c0ff00b.png' },
    { title: 'Dosa', description: 'Veg/ Price-10', image: 'https://cdn.tasteatlas.com/images/dishes/8c4f54edbd5745db832dc6285acdcaeb.jpg?w=600' },
    { title: 'Idli', description: 'Veg/ Price-10', image: 'https://images.healthshots.com/healthshots/en/uploads/2022/09/30115812/idli.jpg' },
    { title: 'Payasam', description: 'veg/ Price-30', image: 'https://www.milkmaid.in/sites/default/files/2020-06/Semiyan-Payasam-590x436.jpg' },
    // Add more card data as needed
  ];

  return (
    <center sx={{bgcolor:'#F5E8C7'}}>
        <h3>SS HYDERABAD BIRIYANI</h3>
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
                <Button style={{color:"orangered"}}>

                <Icon>remove_circle</Icon>
                </Button>
                <Button style={{color:"orangered"}}>

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

