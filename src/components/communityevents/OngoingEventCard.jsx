import React from 'react'
import styled from 'styled-components';

const Container = styled.div`

display: flex;
flex-direction: column;
/* justify-content: center;
align-items: center; */
padding: 20.9162px 20.4581px;
gap: 15.69px;
background-color: #FFFFFF;
border-radius: 5.22905px;
width: 70%;
margin:40px auto 0;


@media only screen and (min-width: 600px){
  width: 50%;
margin:40px auto 0;
}
@media only screen and (min-width: 768px){
  width: 48%;
/* margin:40px auto 0; */
/* margin-right:40px; */
}
@media only screen and (min-width: 1024px){
  width:45%;
/* margin:40px auto 0; */
}

`;
const Wrapper = styled.div`
  margin: 0 20px;




 
`;
const Image = styled.img`
   padding: 10.4581px;
  margin:24.07px auto 12.04px;
  width: 36.6px;
  height: 36.6px;
  background: #D2D5FA;
  border-radius: 65.3631px;
  display:block;
`;

const Heading = styled.h2`
  text-align: center;
  font-family: techathonFont;
`;

export const OngoingEventCard = ({title, list, image}) => {
  return (
    <Container 

      
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    >
      <Wrapper>
       <Image  src={image} />
      <Heading>{title}</Heading>
      {list}
      </Wrapper>
    </Container>
  )
}
