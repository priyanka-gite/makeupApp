import React, {useState} from 'react';
import styled from "styled-components";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {sliderItems} from "../../data";
import {useNavigate} from "react-router-dom";

const Container = styled.div`
    width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  flex-wrap: wrap;
`
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: teal;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0 ;
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props => props.slideIndex * -100}vw );

`
const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${props => props.bg};
`
const ImageContainer = styled.div`
  flex: 1;
`
const Image = styled.img`
  height: 500px;
  width: 500px;
  padding-left: 40%;
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 35%;
  margin-right: 40px;
`
const Title = styled.h1`
  font-size: 70px;
  color: teal;
`
const Description = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);


    const navigate = useNavigate();
    const handleClick = (direction) =>{
        if (direction==="left") {
            setSlideIndex(slideIndex>0 ? slideIndex-1 : 9)
        } else {
            setSlideIndex(slideIndex < 9 ? slideIndex +1 : 0);
        }
    }

    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftIcon/>
            </Arrow>
            <Wrapper slideIndex = {slideIndex}>
                {sliderItems.map((item)=>{
                        return (
                            <Slide key={item.id} bg ={item.bg}>
                                <ImageContainer>
                                    <Image src={item.img}/>
                                </ImageContainer>
                                <InfoContainer>
                                    <Title >
                                     {item.type}
                                    </Title>
                                    <Description>
                                        {item.desc}
                                    </Description>
                                    <Button onClick={(e)=>{
                                        console.log(item.type);
                                        navigate("/productsoverview", {state:{product_type:item.type}})

                                    }}>
                                        SHOP NOW
                                    </Button>
                                </InfoContainer>
                            </Slide>
                        )
                    }
                )}
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightIcon/>
            </Arrow>

        </Container>
    );
};

export default Slider;