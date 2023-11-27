import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Grid, Icon } from '@mui/material';
import MenuAppBar from "./Homepgappbar";
import Footer from "./Footer";

export default function Res4() {
  const [cart, setCart] = React.useState([]);

  const cardData = [
    { title: 'Chicken Biriyani', description: 'Non-veg', price: 130, image: 'https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg' },
    { title: 'Chicken Noodles', description: 'Non-veg', price: 120, image: 'https://www.whiskaffair.com/wp-content/uploads/2018/03/Chicken-Hakka-Noodles-2-3.jpg' },
    { title: 'Chicken Rice', description: 'Non-veg', price: 120, image: 'https://www.kannammacooks.com/wp-content/uploads/street-style-chicken-rice-recipe-1-3.jpg' },
    { title: 'Chicken Chilli', description: 'Non-veg', price:50, image: 'https://i.ytimg.com/vi/dLp6s7ZeFuM/maxresdefault.jpg' },
    { title: 'Paneer Rice', description: 'Veg', price:90, image: 'https://revi.b-cdn.net/wp-content/uploads/2017/01/paneer-biryani-main.jpg' },
    { title: 'Vegetable Biriyani', description: 'Veg', price:90, image: 'https://www.cookwithmanali.com/wp-content/uploads/2019/09/Vegetable-Biryani-Restaurant-Style.jpg' },
    { title: 'Chicken Gravy', description: 'Non-veg', price:80, image: 'https://butfirstchai.com/wp-content/uploads/2023/01/chicken-chettinad-curry-recipes.jpg' },
    { title: 'Mutton Gravy', description: 'Non-veg', price:100, image: 'https://i.ytimg.com/vi/aGYM7X-x6ZU/maxresdefault.jpg' },
    { title: 'Parotta', description: 'Veg', price:20, image: 'https://www.thisday.app/uploads/Malabar_Parotta_9d1c0ff00b.png' },
    { title: 'Dosa', description: 'Veg', price:10, image: 'https://cdn.tasteatlas.com/images/dishes/8c4f54edbd5745db832dc6285acdcaeb.jpg?w=600' },
    { title: 'Idli', description: 'Veg', price:10, image: 'https://images.healthshots.com/healthshots/en/uploads/2022/09/30115812/idli.jpg' },
    { title: 'Payasam', description: 'veg', price:30, image: 'https://www.milkmaid.in/sites/default/files/2020-06/Semiyan-Payasam-590x436.jpg' },
    // Add more card data as needed
  ];

  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.title === item.title);

    if (existingItemIndex !== -1) {
      const updatedCart = cart.map((cartItem, index) => {
        if (index === existingItemIndex) {
          return { ...cartItem, qty: cartItem.qty + 1 };
        }
        return cartItem;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.title === item.title);

    if (existingItemIndex !== -1 && cart[existingItemIndex].qty > 1) {
      const updatedCart = cart.map((cartItem, index) => {
        if (index === existingItemIndex) {
          return { ...cartItem, qty: cartItem.qty - 1 };
        }
        return cartItem;
      });
      setCart(updatedCart);
    } else {
      const updatedCart = cart.filter((cartItem) => cartItem.title !== item.title);
      setCart(updatedCart);
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.qty, 0);
  };

  return (
    <div  style={{ backgroundColor: "#435585" }}>
      <MenuAppBar />

    <center>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <h3 style={{color:"white"}}>RADISSON BLU</h3>
      <Grid container spacing={2}>
        {cardData.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345, backgroundColor: '#818FB4' }}>
              <CardMedia sx={{ height: 140 }} image={card.image} title={card.title} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description} - Price: ${card.price}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'space-between' }}>
                <Button style={{ color: "orangered" }} onClick={() => addToCart(card)}>
                  <Icon>add_circle</Icon>
                </Button>
                <Button style={{ color: "orangered" }} onClick={() => removeFromCart(card)}>
                  <Icon>remove_circle</Icon>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Display Cart Items */}
      <div style={{ marginTop: '20px' }}>
        <h4>Shopping Cart</h4>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.title} - ${item.price} x {item.qty}
            </li>
          ))}
        </ul>
        <h4>Total: ${calculateTotal()}</h4>
      </div>

      <Footer />
    </center>
    </div>
  );
}



