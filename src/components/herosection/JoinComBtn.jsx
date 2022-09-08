import React from 'react';
import styled from 'styled-components';
import arrow from '../../assets/arrow.svg';
import {Link} from 'react-router-dom';


const Wrapper = styled.div`


`;
const ButtonContainer = styled.div`




`;
const AnchorLink = styled.a`
  text-decoration: none;
  

`;
const ButtonElem = styled.button`

display: block;

padding: 10px 30px;
gap: 16px;
border:none;
margin-top:24px ;
/* margin-left: 7px; */
margin-left: 0;
/* width: 343px; */
/* height: 55px; */

/* background: #5C2CC7; */
/* opacity: 0.8; */
border: 2px solid #5C2CC7;
border-radius: 10px;
font-family: techathonFont;
font-style: normal;
font-weight: 600;
color: #5C2CC7;
font-size: 14px;
line-height: 35px;

&:hover span{
    color:#fff;
    opacity: 0.8;
    cursor: pointer;
    /* background: #5C2CC7; */
}




@media only screen and (max-width:796px) and (min-width:769px){
    padding:10px 20px;
 
}
@media only screen and (max-width:768px){
  margin: 24px auto 0;
}
`;

/*******************JOIN US ON TELEGRAM */
const TelegramBtn = styled.button`

display: block;

padding: 10px 30px;
gap: 16px;
border:none;
margin-top:24px ;
/* margin-left: 7px; */
margin-left: 0;
/* width: 343px; */
/* height: 55px; */

background: #fff;
/* opacity: 0.8; */
border: 2px solid #5C2CC7;
border-radius: 10px;
font-family: techathonFont;
font-style: normal;
font-weight: 600;
color: #5C2CC7;
font-size: 14px;
line-height: 35px;

&:hover span{
    color:#5C2CC7;
    opacity: 0.7;
    cursor: pointer;
    /* background: #5C2CC7; */
}




@media only screen and (max-width:796px) and (min-width:769px){
    padding:10px 20px;
 
}
@media only screen and (max-width:768px){
  margin: 24px auto 0;
}
`;

const Arrow = styled.img`
     


`;

export const JoinComBtn = ({JoinTele}) => {
  return (
    <Wrapper>
        
        <TelegramBtn><span>{JoinTele}</span> &nbsp; <i class="fa fa-long-arrow-right" aria-hidden="true"></i></TelegramBtn>
      
        
        {/* https://forms.gle/NnPexB59VkgcNxts7  waitlist*/}
        {/* https://forms.gle/bdNUWjJjHbWFMQs9A become a mentor */}
       
    
    </Wrapper>
  )
}
