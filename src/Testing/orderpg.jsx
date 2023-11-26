import React from 'react'
import Slideshow from './Slider'
import { Grid } from '@mui/material'
import ActionAreaCard1 from './CarComp/carcompo1 copy 3'
import ActionAreaCard2 from './CarComp/carcompo2 '
import ActionAreaCard3 from './CarComp/carcompo3'
import ActionAreaCard4 from './CarComp/carcompo4'

const Orderpg = () => {
  return (
    <div>
        <Slideshow/>
        <center>
        <h3>Order Now</h3>
        </center>
        <Grid align="spacebetween" padding='20px' flexGrow={10} justifyContent='space-between' style={{display: 'flex', flexDirection:'row'}}>
          
          
          

          <ActionAreaCard1/>
          <ActionAreaCard2/>
          <ActionAreaCard3/>
          <ActionAreaCard4/>
          
        </Grid>
        
    </div>
  )
}

export default Orderpg