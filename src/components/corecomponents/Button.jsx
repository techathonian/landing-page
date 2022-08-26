import React from 'react';
import styled from 'styled-components';
import arrow from '../../assets/arrow.svg';

const ButtonContainer = styled.div`

/* margin: 30px auto 30px;
width:380px; */

`;

const AnchorLink = styled.a`
  text-decoration: none;

`;
const ButtonElem = styled.button`

padding: 10px 30px 10px 30px;
/* width: 247px; */
display:block;
background: #5C2CC7;
border-radius: 10px;
border:none;
margin:auto;


span{
font-family: techathonFont;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 35px;
color: #FFFFFF;
}

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


/* tlp/sys/color/system-white */


     
/* height: 10.5018949508667px;
width: 12.00133991241455px;
left: 6px;
top: 6.7490234375px;
border-radius: 0px; */

`;

export const Button = ({BtnText}) => {
  return (
    <ButtonContainer>
       <AnchorLink href='https://techathonian.github.io/community-code-of-conduct/' target='_blank' rel='noreferrer'><ButtonElem><span>{BtnText}</span> <Arrow src={arrow} /></ButtonElem></AnchorLink>

    </ButtonContainer>
  )
}
