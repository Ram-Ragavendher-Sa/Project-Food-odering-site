import 'react-slideshow-image/dist/styles.css'

import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import MenuAppBar from './Homepgappbar';

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
    url: 'https://plus.unsplash.com/premium_photo-1695931839656-f192be509203?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    url: 'https://hips.hearstapps.com/vidthumb/images/180820-bookazine-delish-01280-1536610916.jpg?crop=0.855xw:0.721xh;0,0.275xh'
  },
  {
    url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    url: 'https://www.kitchenherald.com/wp-content/uploads/2022/11/southfood.jpg'
  }
];

const Slideshow = () => {
    return (
        <div className="slide-container">
        <MenuAppBar/>
        <Slide>
          
         {slideImages.map((slideImage, index)=> (
             <div key={index}>
                <span style={spanStyle}>{slideImage.caption}</span>
              <div style={{}}>
                <img src={slideImage.url} width='100%' height='100%'/>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}
export default Slideshow;