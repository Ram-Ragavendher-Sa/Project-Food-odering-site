import { Container } from '@mui/system'
import React from 'react'

const Desc = () => {
  return (
    <div>
    <div style={{display: 'flex',flexDirection: 'row',justifyContent:'space-evenly',margin:'20px'}}>
        <Container>
            <div>
                <h1 style={{color:'white'}}>Way the food Reaches You....</h1>
                <br></br>
                <div style={{color:'white'}}>
                From cultivation on farms to processing, transportation, and distribution, the journey of food is a multifaceted process. Farmers nurture crops or raise livestock, initiating the cycle. Processing facilities transform raw materials into edible products, ensuring safety and quality. Transportation methods vary, with trucks, trains, ships, and planes facilitating distribution. Retailers and vendors then make the final connection to consumers, who make choices based on preferences and needs. Throughout, regulatory measures and technology uphold food safety, making this intricate journey an essential aspect of our daily lives.






                </div>
            </div>
        </Container>
        <Container >
            <img src="https://d3v3ndrh54pjik.cloudfront.net/app/wp-content/uploads/2020/11/3869314.jpg" alt="img" style={{height:'50vh',width:'40vw'}}/>
        </Container>
    </div>
    <div style={{display: 'flex',flexDirection: 'row',justifyContent:'space-evenly',margin:'20px'}}>
        <Container>
            <img src="https://cdn.shopify.com/s/files/1/2289/1873/files/warm_plate-min.jpg?v=1668949150" alt="img" style={{height:'50vh',width:'40vw'}}/>
        </Container>
        <Container>
            <div style={{color:'white'}}>
                <h1 >Serving you Hot....</h1>
                <br></br>
                <div>
                Serving you hot transcends mere temperature; it's an experience that elevates the culinary journey. The allure of a hot meal lies not just in the sizzle and steam but in the tantalizing aroma and heightened flavors that warmth unlocks. Whether it's a morning coffee awakening your senses or a well-cooked dish emerging, steaming, from the kitchen, the heat adds a comforting touch. It transforms meals into more than sustenance; it becomes a ritual, a moment of solace, and a sensory celebration. The contrast between the warmth and your palate creates a symphony of sensations, making each bite a gratifying, memorable delight.
                </div>
            </div>
        </Container>
    </div>

    </div>
  )
}

export default Desc