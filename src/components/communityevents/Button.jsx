import React from 'react';
import styled from 'styled-components';
import arrow from '../../assets/arrow.svg';


const Wrapper = styled.div`
  margin: 0 20px;
`;
const ButtonContainer = styled.div`
/* width: 343px; */
background-color: red;


@media only screen and (min-width:1440px){
  margin-top: 24px;
  width:380px;

}

`;
const AnchorLink = styled.a`
  text-decoration: none;

`;
const ButtonElem = styled.button`
display: block;
margin: auto;
padding: 10px 30px;
gap: 16px;
border:none;
margin-top:24px ;
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

`;
const Arrow = styled.img`
     
height: 10.5018949508667px;
width: 12.00133991241455px;
margin-left: 10px;
top: 6.7490234375px;
border-radius: 0px;

`;

export const Button = ({BtnText}) => {
  return (
    <Wrapper>
        <AnchorLink href='https://forms.gle/NnPexB59VkgcNxts7' target='_blank' rel='noreferrer'>
        <ButtonElem><span>{BtnText}</span> <Arrow src={arrow} /></ButtonElem>
        </AnchorLink>

    
    </Wrapper>
  )
}
