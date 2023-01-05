import React from 'react';
import styled from "styled-components";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #cfb9e4;
  position: relative;
  overflow: hidden;

`
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: orange;
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
  z-index: 2;
`
const Wrapper = styled.div`
height: 100%;
  display: flex;
  transform: translateX(0vw);
  
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
    height: 400px;
  width: 500px;
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 50%;
`
const Title = styled.h1`
  font-size: 70px
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
    const handleClick = (direction) =>{

    }
    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftIcon/>
            </Arrow>
<Wrapper>
    <Slide bg = "f5fafd">
<ImageContainer>
    <Image src="https://makeup-api.herokuapp.com/assets/lips-c35ec4a3350ec779c6bf6a785981ad9ef2e21bd9fe26a2be1c766d56edb2e11f.png"/>
</ImageContainer>
    <InfoContainer>
        <Title>
Summer Sale
        </Title>
        <Description>
Dont compromise get your best look!
        </Description>
        <Button>
Show now
        </Button>
    </InfoContainer>
    </Slide>

    <Slide bg = "fbf0f4">
        <ImageContainer>
            <Image src=""/>
        </ImageContainer>
        <InfoContainer>
            <Title>
                Winter Sale
            </Title>
            <Description>
                Dont compromise get your best look!
            </Description>
            <Button>
                Show now
            </Button>
        </InfoContainer>
    </Slide>

    <Slide bg = "fcf1ed">
        <ImageContainer>
            <Image src=""/>
        </ImageContainer>
        <InfoContainer>
            <Title>
                Spring Sale
            </Title>
            <Description>
                Dont compromise get your best look!
            </Description>
            <Button>
                Show now
            </Button>
        </InfoContainer>
    </Slide>
</Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightIcon/>
            </Arrow>
            
        </Container>
    );
};

export default Slider;