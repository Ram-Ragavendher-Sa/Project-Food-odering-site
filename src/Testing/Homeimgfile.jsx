import { Button, Grid, Stack, Typography } from '@mui/material'
import { display } from '@mui/system'
import React from 'react'
import RecipeReviewCard from './CarComp/Carcomp'
import RecipeReviewCard1 from './CarComp/Carcomp1'
import RecipeReviewCard2 from './CarComp/Carcomp2'
import RecipeReviewCard3 from './CarComp/Carcomp3'
import Footer from './Footer'
import MenuAppBar from './Homepgappbar'
import Bim from './img/thai-food.jpg'
import { Link } from 'react-router-dom'
import Desc from './Desc'
const Homeimgfile = () => {
  return (
    <div style={{backgroundColor: "#435585"}}>
        <div style={{backgroundImage:`url(${Bim})`,height:'60vh',width:'99vw'}} >
          <MenuAppBar></MenuAppBar>
        <Stack style={{display:"flex", justifyContent:"space-between"}}>
    </Stack>
            <Grid align='center' sx={{padding:'20px'}}>
                <br /><br />
                <br />
                <h1 style={{fontFamily:'serif',color:'white',fontSize:'50px'}}>Foodo !!</h1>
                <br />
                <div style={{color:'white'}}>
                    <h2>
                    End   Your Cravings 
                    <br />
                    with  us  here!!!
                    </h2>
                </div>
            </Grid>
        </div>
        <Grid align="spacebetween" padding='20px' flexGrow={10} justifyContent='space-between' style={{display: 'flex', flexDirection:'row'}}>
          <RecipeReviewCard/>
          <RecipeReviewCard1/>
          <RecipeReviewCard2/>
          <RecipeReviewCard3/>
        </Grid>
        <Desc></Desc>
        <Footer></Footer>
     </div>
  )
}

export default Homeimgfile