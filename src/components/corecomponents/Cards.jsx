import React from 'react';
import styled from 'styled-components';



const CoreCards = styled.div`
    width: 308px;
    /* min-width: 308px; */
    border-radius: 8px;
    padding:24px 24px 48px 24px;
    background-color: #ffffff;
    box-shadow:  0px 1px 15px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    text-align: center;
    margin:20px auto;

    @media only screen and (max-width:600px){
        margin:10px 0;
        width: 100%;
    }
    /* for 820 max screen */
    @media only screen and (min-width:600px){
        width:100%;
      margin:10px 0;
    
    }
    @media only screen and (min-width:768px){
       width:100%;
      margin:0px 10px; 
    
    }
    @media only screen and (min-width:1024px){
        width:30%;
        margin:10px 0;
    
    }
 
`;
const Image = styled.img`
   background-color:#F0E1DC ;
   padding: 13.18px;
   border-radius: 82.3864px;
`;
const Title = styled.h3`
/* Designers used Lato font which is not ours */
 font-family: techathonFont;
 font-weight: 700;
 font-size:19.7727px;
 line-height: 24px;
 text-align: center;
 margin-top:19.77px;
 margin-bottom:23.27px;
`;
const Description = styled.p`
/* Designers used Lato font which is not ours */
    font-family: techathonFont;
    font-weight:400;
    font-size: 14.829px;
    line-height: 22px;
    text-align: center;
    color:#1D1D1D;

`;

export const Cards = ({title, description, image}) => {
  return (
   
      <CoreCards>
            <Image src={image}></Image>
            <Title>{title}</Title>
            <Description>{description}</Description>   
      </CoreCards>

   
  )
}
