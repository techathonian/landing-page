import React from 'react'
import styled from 'styled-components';
const Container = styled.div`
padding-top: 36px;
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


`;

const Text = styled.p`
    font-family: techathonFont;
    font-weight: 400;
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    margin-top: 4px;

`;
export const Meet = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Meet our mentors</Heading>
        <Text>
            A team of professionals committed to providing the skill and mentoring to anyone who want to transition into tech from a non-technical background.
        </Text>
        </Wrapper>
    </Container>
  )
}
