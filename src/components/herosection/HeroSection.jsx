import React from 'react';
import styled from 'styled-components';
import HeroImage from '../../assets/heroimagedesktop.png'
import Heroarc from '../../assets/herovector.svg'
import { Button } from '../button/Button';
// import Bgpartern from '../../assets/bgpartern.svg'


const Container = styled.div`
    background-image: url();
    background-position: center;
    width:100%;
    background-color: pink;
  
`;

const Wrapper = styled.div`
        margin:0 20px;
        padding:221px 0;
        display: flex;
        flex-direction: column;
        align-items:flex-start;
        gap:39px;
        background-color: yellow;

    @media only screen and (min-width:1440px){
            margin:0 128px;
        padding:221px 0;
        display: flex;
        align-items:flex-start;
        gap:39px;
        }
`;
const HeroContent = styled.div`


    @media only screen and (min-width:1440px){
        margin-top: 12px;
        width: 595px;
        
    }
`;
const HeroHeading = styled.h1`
width: 300px;
font-family: techathonFont;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 36px;
display: flex;
align-items: center;
text-align: center;
color: #32376F;


@media only screen and (min-width:1440px){
font-family: techathonFont;
font-style: normal;
font-weight: 500;
font-size: 44px;
line-height: 44px;
display: flex;
align-items: center;
color: #32376F;
width: 508px;
}

`;

const HeroVectorArc = styled.img`



@media only screen and (min-width:1440px){
    display: inline-block;
margin-top: 8px;
margin-left: 190px;
/* background-color: red; */
}

`;
const HeroText = styled.p`
width: 314px;
        font-family: techathonFont;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #32376F;
    @media only screen and (min-width:1440px){
    margin-top: 17px;
    font-family: techathonFont;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    display: flex;
    align-items: center;
    color: #32376F;
    }
`;
const HeroIllustration = styled.div`
    
        width:290px;

    
        img{
            width:100%;
        }

    @media only screen and (min-width:1440px){
        margin-right: 94px;
    }

`;



export const HeroSection = () => {
  return (
    <Container>
        <Wrapper>
            <HeroContent>
                <HeroHeading>Mentoring you from the basics to Proficiency.</HeroHeading>
                {/* image link here */}
                <HeroVectorArc  src={Heroarc} />
                <HeroText> 
                We provide you with a sutable environment for learning
                while engaging in a systematic approach to imbibe
                you with the necessary knowledge and skills.
                </HeroText>
                    {/* <Button BtnText={"Join the waitlist for Techathon 2.0"} 
                    
                    /> */}
            </HeroContent>
            <HeroIllustration>
                <img src={HeroImage} />  
            </HeroIllustration>
        </Wrapper>
    </Container>
  )
}
