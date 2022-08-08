import React from 'react';
import styled from 'styled-components';
import HeroImage from '../../assets/heroimagedesktop.png'
import Heroarc from '../../assets/herovector.svg'
import { Button } from './Button';
// import arrow from '../../assets/arrow.svg';
import bgpartern from '../../assets/bgpartern.svg'
// import Bgpartern from '../../assets/bgpartern.svg'


const Container =styled.div`
  background-image: url(https://firebasestorage.googleapis.com/v0/b/tecthathonlandingpage.appspot.com/o/assets%2Fbg%2FCircuit%20background%20dark.png?alt=media&token=42b2b1de-e65a-4c88-b2f7-d53086aa51dc);

`;

const Wrapper = styled.div`
        margin:0 20px;
        padding:96px 0 0;
        display: flex;
        flex-direction: column;
        align-items:flex-start;
        gap:39px;
 
        

    @media only screen and (min-width:1440px){
        margin:0 128px;
        padding:221px 0;
        display: flex;
        align-items:flex-start;
        gap:39px;
        }
`;
const HeroContent = styled.div`
    order:2;
   
    @media only screen and (min-width:1440px){
        margin-top: 12px;
        width: 595px;
        
    }
`;
const HeroHeading = styled.h1`
width: 300px;
margin: 0 auto ;
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
    display: inline-block;
    margin-top: 2px;
    width: 117px;
  
    margin-left: 140px;
    




@media only screen and (min-width:1440px){
    display: inline-block;
    margin-top: 8px;
    margin-left: 190px;
/* background-color: red; */
}

`;
const HeroText = styled.p`
        width: 314px;
        margin-top:10px;
        margin-left: 10px;
        font-family: techathonFont;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
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
    
        width:335px;
        order: 1;
       
        margin:0 auto ;
    
        img{
            width:100%;
        }

    @media only screen and (min-width:1440px){
        margin-right: 94px;
    }

`;


// const Arrow = styled.img`
     
// height: 10.5018949508667px;
// width: 12.00133991241455px;
// left: 6px;
// top: 6.7490234375px;
// border-radius: 0px;
// margin-left: 20px;

// `;

export const HeroSection = () => {
  return (
    <Container id='home'>
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
                    <Button BtnText={"Join the waitlist for Techathon 2.0"} 
                    
                    />
                    {/* <button style={{display:'block', padding:'10px 54px 10px 20px',borderRadius:'10px', backgroundColor:'#5C2CC7', margin:' 0 auto', border:'none' }}>Join the waitlist for Techathon 2.0 <Arrow src={arrow} /></button> */}
            </HeroContent>
            <HeroIllustration>
                <img src={HeroImage} />  
            </HeroIllustration>
        </Wrapper>
    </Container>
  )
}
