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

background: #5C2CC7;
border-radius: 10px;
font-family: techathonFont;
font-style: normal;
font-weight: 600;
color: #FFFFFF;
font-size: 14px;
line-height: 35px;

&:hover span{
    color:#fff;
    opacity: 0.8;
    cursor: pointer;
    background: #5C2CC7;
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

export const Button = ({BtnText}) => {
  return (
    <Wrapper>
        <AnchorLink href='https://forms.gle/NnPexB59VkgcNxts7' target='_blank' rel="noreferrer">
        <ButtonElem><span>{BtnText}</span> &nbsp; <Arrow src={arrow} /></ButtonElem>
        </AnchorLink>
        
        {/* https://forms.gle/NnPexB59VkgcNxts7  waitlist*/}
        {/* https://forms.gle/bdNUWjJjHbWFMQs9A become a mentor */}
       
    
    </Wrapper>
  )
}
