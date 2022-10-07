import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { JoinComBtn } from './JoinComBtn';

const GridContainer= styled.div`
 display: grid;
 grid-template-columns: 1fr;
 padding: 30px;
 row-gap: 20px;

 @media only screen and (max-width:1440px) and (min-width: 768px){
    padding: 0 110px 30px;
    text-align: center;
    
}

`;
const VideoItem = styled.div`
padding: 120px 0 0;



    
h2{
    font-size: 16px;
    font-family: TechathonFont;
    margin-top: 20px;
    text-align: center;
    opacity: 0.8;
}
@media only screen and (max-width:1440px) and (min-width: 768px){
   
   iframe{
       width: 560px;
   }
    h2{
        font-size: 18px;
    font-family: TechathonFont;
    margin-top: 20px;
    text-align: center;
    opacity: 0.8;
    width: 560px;
    margin: auto;
    }
}


`;
const GetStarted = styled.div`
    

`;

const AnchorLink = styled.a`
        text-decoration: none;
        padding-top: 8px;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #FFFFFF;
        font-family: techathonFont;

        @media only screen and (min-width:768px){
        padding-bottom: 40px;
        font-style: normal;
        font-weight: 450;
        font-size: 16px;
        line-height: 30px;

        color: #FFFFFF;
    }
    @media only screen and (min-width:1024px){
        padding-bottom: 40px;
        font-style: normal;
        font-weight: 450;
        font-size: 24px;
        line-height: 30px;

        color: #FFFFFF;
    }

    &&:hover{
        color: #FFFFFF;
        opacity: 0.8;
    }
 `;

export const Register = () => {
  return (

    <GridContainer>
    
        <VideoItem>
        <iframe width="100%" max-width="100%" height="315" src="https://www.youtube.com/embed/qNKtfpcFRa4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h2>Watch the track explainer video to understand what each track is before getting started.</h2>
     
        </VideoItem>
        <GetStarted>
        
        <Button BtnText={'Get Started'} />
      
       
          
        </GetStarted>

    </GridContainer>
  )
}
