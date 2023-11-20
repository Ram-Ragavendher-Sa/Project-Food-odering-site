import { Grid } from '@mui/material'
import { display } from '@mui/system'
import React from 'react'
import RecipeReviewCard from './CarComp/Carcomp'
import RecipeReviewCard1 from './CarComp/Carcomp1'
import RecipeReviewCard2 from './CarComp/Carcomp2'
import RecipeReviewCard3 from './CarComp/Carcomp3'
import Footer from './Footer'
import MenuAppBar from './Homepgappbar'
import Bim from './img/thai-food.jpg'
const Homeimgfile = () => {
  return (
    <div style={{backgroundColor: "#F5E8C7"}}>
        <div style={{backgroundImage:`url(${Bim})`,height:'60vh',width:'100vw'}} >
            <MenuAppBar/>
            <Grid align='center' sx={{padding:'20px'}}>
                <br /><br />
                <br />
                <h1 style={{fontFamily:'Lucida Console',color:'white',fontSize:'50px'}}>Tomato</h1>
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
        <Footer></Footer>
     </div>
  )
}

export default Homeimgfile