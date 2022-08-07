import React from 'react'
import styled from 'styled-components';
import { Button } from './Button';
const Container = styled.div`
/* padding-top: 36px; */
padding-bottom:32px;

`;
const Wrapper = styled.div`
margin: 0 20px;
`;

const Heading = styled.h2`
  font-family: techathonFont;
  font-weight: 500;
  text-align: center;
  line-height: 36px;
  margin:3px 0 4px;


`;

const Text = styled.p`
    font-family: techathonFont;
    font-weight: 400;
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    margin:0 0 36px;

`;
export const Meet = () => {
  return (
    <Container>
      <Wrapper>
        <Heading 
        
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        
        >Meet our mentors</Heading>
        <Text
        
        
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="40"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        
        >
            A team of professionals committed to providing the skill and mentoring to anyone who want to transition into tech from a non-technical background.
        </Text>
        <Button BtnText={'Meet our mentors'} />
        </Wrapper>
    </Container>
  )
}
