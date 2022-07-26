import React from 'react';
import styled from 'styled-components';
import arrow from '../../assets/arrow.svg';
import {Link} from 'react-router-dom';

const ButtonContainer = styled.div`

/* margin: 30px auto 30px;
width:380px; */

`;
const ButtonElem = styled.button`

padding: 10px 30px 10px 30px;

/* width: 247px; */
display:block;
background: #5C2CC7;
border-radius: 10px;
border:none;
margin:18px auto 0 ;


span{
font-family: techathonFont;
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 35px;
color: #FFFFFF;
}

&:hover span{
    color:#fff;
    opacity: 0.8;
    cursor: pointer;
    background: #5C2CC7;
}

@media only screen and (max-width:768px){
  padding: 10px 30px 10px 30px;
/* width: 247px; */
display:block;
background: #5C2CC7;
border-radius: 10px;
border:none;
margin:16px auto 0 ;


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

export const BecomeAMentors = ({BtnText}) => {
  return (
    <ButtonContainer>
      <Link to="/about">
        <ButtonElem ><span>{BtnText}</span> <Arrow src={arrow} /></ButtonElem>
        </Link>

    </ButtonContainer>
  )
}
