import React from 'react';
import styled from 'styled-components';
import arrow from '../../assets/arrow.svg';

const ButtonContainer = styled.div`

margin-top: 24px;
width:380px;

`;
const ButtonElem = styled.button`
display: flex;
flex-direction: row;
align-items: center;
padding: 10px 30px;
gap: 16px;
border:none;
/* width: 363px; */
height: 55px;
background: #5C2CC7;
border-radius: 10px;


font-style: normal;
font-weight: 600;
color: #FFFFFF;
font-size: 18px;
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
left: 6px;
top: 6.7490234375px;
border-radius: 0px;

`;

export const Button = ({BtnText}) => {
  return (
    <ButtonContainer>
        <ButtonElem><span>{BtnText}</span> <Arrow src={arrow} /></ButtonElem>

    </ButtonContainer>
  )
}
