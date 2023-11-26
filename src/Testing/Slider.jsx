import 'react-slideshow-image/dist/styles.css'

import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
  padding: '0',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '700px'
}
const slideImages = [
  {
    url: 'https://www.exchange4media.com/news-photo/109773-behrouz.jpg'
  },
  {
    url: 'https://hips.hearstapps.com/vidthumb/images/180820-bookazine-delish-01280-1536610916.jpg?crop=0.855xw:0.721xh;0,0.275xh'
  },
  {
    url: 'https://static-prod.adweek.com/wp-content/uploads/2022/07/1-12-652x342.png'
  },
  {
    url: 'https://www.kitchenherald.com/wp-content/uploads/2022/11/southfood.jpg'
  }
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
          
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle }}>
                <span style={spanStyle}>{slideImage.caption}</span>
                <img src={slideImage.url} width='100%' height='100%'/>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}
export default Slideshow;