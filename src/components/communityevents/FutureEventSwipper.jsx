import React from 'react';
import styled from 'styled-components';

const Container =styled.div`
 background-color:#171C54;
 

`;
const Wrapper = styled.div`
    margin: 0 20px;
    padding:1px 0 20px;
   
`;
const Heading = styled.h2`
font-weight: 400;
font-size: 24px;
line-height:45px;
font-family: techathonFont;
color:#fff;
text-align: center;
margin-top: 21px;
`;

const Text = styled.p`
  color: #fff;
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-top: 4px;
  font-family: techathonFont;
  opacity:0.3;
`;


export const FutureEventSwipper = ({event, text}) => {
    
  return (
    <Container >
      <Wrapper>
        <Heading 
        
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="40"
        data-aos-duration="700"
        data-aos-easing="ease-in-out"
        
        >{event}</Heading>
        <Text
          
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >{text}</Text>
        </Wrapper>
    </Container>
  )
}
