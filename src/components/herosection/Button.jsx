import React from 'react';
import styled from 'styled-components';
import arrow from '../../assets/arrow.svg';


const Wrapper = styled.div`

`;
const ButtonContainer = styled.div`




`;
const ButtonElem = styled.button`

display: block;

padding: 10px 30px;
gap: 16px;
border:none;
margin-top:24px ;
margin-left: 7px;
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

@media only screen and (max-width:768px){
  margin: 24px auto 0;
}
`;
const Arrow = styled.img`
     


`;

export const Button = ({BtnText}) => {
  return (
    <Wrapper>
   
        <ButtonElem><span>{BtnText}</span> <Arrow src={arrow} /></ButtonElem>

    
    </Wrapper>
  )
}