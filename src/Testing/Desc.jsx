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
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptates reiciendis architecto? Fugit tempore exercitationem optio dolore animi? Excepturi deserunt odio, architecto facere eius quod totam voluptatum quis reiciendis cum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quos sed eum nemo vero eveniet optio repellendus nobis deleniti ab ut, alias consequuntur a illum dolorem voluptate, quo, laudantium recusandae.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis consequatur deleniti pariatur quidem voluptate eveniet dolorum, quibusdam vitae non. Consequatur fugiat delectus ad illo est, tempore magni asperiores ab vel?
                </div>
            </div>
        </Container>
        <Container >
            <img src="https://d3v3ndrh54pjik.cloudfront.net/app/wp-content/uploads/2020/11/3869314.jpg" alt="img" style={{height:'50vh',width:'40vw'}}/>
        </Container>
    </div>
    <div style={{display: 'flex',flexDirection: 'row',justifyContent:'space-evenly',margin:'20px'}}>
        <Container>
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/05/7d/97/20/tandoori-chicken-sizzler.jpg" alt="img" style={{height:'50vh',width:'40vw'}}/>
        </Container>
        <Container>
            <div style={{color:'white'}}>
                <h1 >Serving you Hot....</h1>
                <br></br>
                <div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptates reiciendis architecto? Fugit tempore exercitationem optio dolore animi? Excepturi deserunt odio, architecto facere eius quod totam voluptatum quis reiciendis cum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quos sed eum nemo vero eveniet optio repellendus nobis deleniti ab ut, alias consequuntur a illum dolorem voluptate, quo, laudantium recusandae.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis consequatur deleniti pariatur quidem voluptate eveniet dolorum, quibusdam vitae non. Consequatur fugiat delectus ad illo est, tempore magni asperiores ab vel?
                </div>
            </div>
        </Container>
    </div>

    </div>
  )
}

export default Desc