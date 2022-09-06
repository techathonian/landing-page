import React from 'react'
import styled from 'styled-components';

const Container =styled.div`
  background-image: url(https://firebasestorage.googleapis.com/v0/b/tecthathonlandingpage.appspot.com/o/assets%2Fbg%2FCircuit%20background%20dark.png?alt=media&token=42b2b1de-e65a-4c88-b2f7-d53086aa51dc);

`;
const Wrapper = styled.div`
      margin: 0 20px;
      padding: 35px 0 36.86px;
`;
const Card  = styled.div`
  padding: 26px 0 24px;
  text-align: center;
  width: 162px;
  /* height: 104px; */
  margin: 9px auto;
  background: #FFFFFF;
  border-radius: 5.21705px;

`;

const Heading = styled.h2`
    font-family: techathonFont;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    color: #1D1D1D;
`;
const Small = styled.h3`
    font-family: techathonFont;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    color: #1D1D1D;
    margin-top: 26px;
`;
const Text = styled.p`
    font-family: techathonFont;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    color: #1D1D1D;
    margin: 8px 9px 0;
`;
const Image   = styled.img`

`;

export const PartnerContent = ({title, text, image, partner}) => {
  return (
    <Container>
      <Wrapper>
        <Heading      data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="40"
            data-aos-duration="700"
            data-aos-easing="ease-in-out">{title}</Heading >
        <Text    data-aos="fade-in"
             data-aos-offset="200"
             data-aos-delay="50"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out">{text}</Text>
        {/* <Card  data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
            <Image src={image} alt="" />
            <Small >{partner}</Small  >
        </Card> */}
        </Wrapper>
    </Container>
  )
}
