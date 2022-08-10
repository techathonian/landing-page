import React from 'react';
import styled from 'styled-components';
import { Mentors } from '../../store/data';

const Wrapper = styled.div`
    margin: 0 20px;
    
    
`;
const MentorsCard = styled.div`
   
    background-image: ${(prop)=>prop.bgimage};
    background-position: center;
    background-size: contain;
    width:329px;
    height: 350px;
    border-radius: 8px;
    margin:16px auto 0;
    border: 2px solid #986DF6;
    padding:16px;
    &:hover{
   
    filter: sepia(40%)
    
}
`;
const Heading = styled.h2`
    padding:10px 20px 10px 20px ;
    border-radius: 8px;
    background-color: #fff;
    width: 126px;
    font-weight: 400;
    font-size: 14px;
    line-height: 27px;
    color: #31366E;
    font-family: techathonFont;
    text-align: center; 
`;

const StyledMentor = styled.div`
margin-top: 176px;

`;
const StyledMentorName = styled.p`

font-family: techathonFont;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 24px;
color:#fff;
margin-bottom:10px;
`;
const StyledMentorProfession = styled.p`
    font-family: techathonFont;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 27px;
    color:#fff;
    margin-bottom:10px;

`;

export const AboutPage = () => {

  
   return(
       <div style={{display:'flex'}}>
           {
               Mentors.map((mentor, key)=>(
                   <Wrapper>
                   <MentorsCard bgimage={`url(${mentor.image})`} key={key}>
                    
                       <Heading>{mentor.track}</Heading>
                  <StyledMentor>
                  <StyledMentorName>{mentor.name}</StyledMentorName>
                   <StyledMentorProfession>{mentor.professionandlocation}</StyledMentorProfession>
                   <a href='#'>{mentor.twitter}</a>
                  </StyledMentor>
                   </MentorsCard>
                   </Wrapper>
               ))
           }
       </div>
   )
}
