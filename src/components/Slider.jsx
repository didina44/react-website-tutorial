import React, {useState} from 'react';
import styled from 'styled-components';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa" 
import { sliderItems } from "../data"

const Container=styled.div`
width:100%;
height:100vh;
display:flex;
position:relative;
overflow-x:hidden;
`

const Arrow=styled.div`
width:50px;
height:50px;
background-color:white;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:0;
bottom:0;
cursor:pointer;
opacity:0.5;

left:${props=> props.direction === "left" && "10px"};
right:${props=> props.direction === "right" && "10px"};
margin:auto;
z-index:2;
`

const Wrapper=styled.div`
height:100%;
display:flex;
transition: all 0.1s ease;
transform:translateX(${(props)=>props.slideIndex * - 100}vw);
`

const Slide=styled.div`
display:flex;
align-items:center;
width:100vw;
height:100vh;
background-color:${props => props.bg};
`

const ImgContainer=styled.div`
flex:1;
max-height:100%;
max-width:50%;
`

const Image=styled.img`
height:100%;
width:100%;
border-radius:50%;`

const InfoContainer=styled.div`
flex:1;
padding:50px;
width:50%;`

const Title=styled.h1`
font-size:50px;`

const Desc=styled.p`
font-size:25px;
margin: 20px 10px;
letter-spacing:1px;
font-weight:500;
`
const Button=styled.button`
cursor:pointer;
padding:10px;
font-size:20px;
background-color:transparent;
`


const Slider = () => {

const [slideIndex, setSlideIndex]=useState(0)
const handleClick = (direction) => {
if (direction==="left") {
setSlideIndex (slideIndex>0 ? slideIndex-1 : 2)}
else {
setSlideIndex (slideIndex<2 ? slideIndex+1 : 0)
}
};


return (
<Container> 

<Arrow direction="left" onClick={()=>handleClick("left")}>
<FaArrowLeft />
</Arrow>

<Wrapper slideIndex={slideIndex}>

{sliderItems.map((item) =>(
<Slide bg={item.bg}>
<ImgContainer>   
<Image src={item.img} />
 </ImgContainer>

<InfoContainer>    
<Title> {item.title} </Title>
<Desc> {item.desc} </Desc>
<Button> Aflati mai multe </Button>
</InfoContainer>

</Slide>
))}





</Wrapper>


<Arrow direction="right" onClick={()=>handleClick("right")}>
<FaArrowRight />
</Arrow>

</Container>
)
}

export default Slider