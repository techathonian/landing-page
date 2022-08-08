import React from 'react'
import styled from 'styled-components';
import { OngoingEventCard } from './OngoingEventCard';
import { CodingTrack } from '../../store/data';
import { NonCodingTrack } from '../../store/data';
import { CodingTrackIcon } from '../../store/data';
import { NonCodingTrackIcon } from '../../store/data';


const UnorderdList = styled.ul`
 list-style-image: url(https://firebasestorage.googleapis.com/v0/b/tecthathonlandingpage.appspot.com/o/assets%2Fbg%2Fdot1.png?alt=media&token=98512fa0-240e-4414-ac58-c0785005fb12);

  text-align: center;
  font-family: techathonFont;
  margin-top:20px;
  font-weight: 400;
  font-size: 12.136px;
  line-height: 18px;

  ul li::after:nth-child(2){
    list-style-image: url(https://firebasestorage.googleapis.com/v0/b/tecthathonlandingpage.appspot.com/o/assets%2Fbg%2Fdot2.png?alt=media&token=91b97616-590d-4310-b8c5-14c5ec8fde6b);
  }
`;

const Container =styled.section`
background-color:#32376F ;
padding-top: 24px;
padding-bottom: 31.56px;
`;
const Wrapper =styled.div`
    margin: 0 20px;
`;
const Heading = styled.h2`
  font-weight:500;
  font-size: 24px;
  line-height: 45px;
  text-align: center;
  color: #ffffff;
  font-family: techathonFont;

`;
const Text = styled.p`
  font-weight: 400;
font-size: 16px;
line-height: 24px;
text-align: center;
color: #ffffff;
margin-top: 4px;
font-family: techathonFont;


@media only screen and (min-width: 600px){

}
@media only screen and (min-width: 768px){
    width: 62.5%;
    margin:0 auto;
    text-align: center;
}
@media only screen and (min-width: 1024px){

}

`;

const FlexContainer = styled.div`
   @media only screen and (min-width: 600px){

}
@media only screen and (min-width: 768px){
  width: 60%;
  margin:auto;
 display: flex;
 flex-direction: row;
 gap: 40px;
 /* background-color: red; */
}
@media only screen and (min-width: 1024px){
  width: 45%;
  margin:auto;
}
`;

export const OngoingEvents = () => {

const renderCondingTrack = CodingTrack.map((coding, key)=>{

  return (
    <UnorderdList key={key} >
       <li >{coding}</li>
    </UnorderdList>
  )
});

const renderNonCodingTrack = NonCodingTrack.map((noncoding, key)=>{

  return (
    <UnorderdList key={key}>
       <li >{noncoding}</li>
    </UnorderdList>
  )
});


  return (
    <Container id='events'>
        <Wrapper>
            <Heading            
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            >


                On-going events
            </Heading>
            <Text 
            
              
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            >
            Techathon 1.0 is currently on going with both coding and non-coding courses being offered We have over 2000+ students who registered for free. The  courses being offered includes; 
            </Text>
          <FlexContainer>
          <OngoingEventCard 
           image={CodingTrackIcon}
           title="Coding"
           list={renderCondingTrack }
           />
           <OngoingEventCard 
           image={NonCodingTrackIcon}
           title="Non Coding"
           list={renderNonCodingTrack}
           style={{textAlign:'center',  padding:'12.04px', background:'#FDF3CC', borderRadius:'75.2294px', display:'block', margin:'24.07px auto 12.04px'}}
           />
          </FlexContainer>
        </Wrapper>
    </Container>
  )
}
