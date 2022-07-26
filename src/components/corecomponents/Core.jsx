import React from 'react';
import styled from 'styled-components';
import {Cards} from './Cards'
import rocket from '../../assets/ion_rocket.png';
import el_group from '../../assets/el_group.png';
import opensource from '../../assets/opensource.png';
import { Button } from './Button';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const CoreContainer =styled.div`
width:100%;
padding-bottom:32px;
padding-top:36px;



   
`;

const CoreWrapper = styled.div`
  margin: 0 20px;
 


  @media only screen and (min-width: 600px){
   
  }
  @media only screen and (min-width:768px){
 
  }
  @media only screen and (min-width:1024px){
    margin: 0 128px;
  }
`;




const CoreSection =styled.section`
  display: flex;
  flex-direction: column;
  

  @media only screen and (min-width: 600px){

  }
  @media only screen and (min-width: 768px){
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
     
  }
  @media only screen and (min-width:1024px){
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }

  
`;
const CoreHeading =styled.h2`
 
    font-weight:500 ;
    font-size:24px;
    color: #1d1d1d;
    text-align: center;
    line-height: 36px;
    font-family: techathonFont; 
  
    @media only screen and (min-width: 600px){

}
@media only screen and (min-width: 768px){
   /* font-size:22px; */
   font-weight:600 ;
    font-size:36px;
    color: #1d1d1d;
    text-align: center;
    line-height: 44px;
    font-family: techathonFont;
   
}
@media only screen and (min-width:1024px){
    font-size: 32px;
  }

@media only screen and (min-width:1440px){
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 43px;
display: flex;
align-items: center;
font-family: techathonFont;
color: #1D1D1D;
width:622px;
margin:auto;
  }
    
`;

const CoreText= styled.p`
    font-weight: 400;
    font-size:16px;
    line-height: 27px;
    text-align: center;
    color: #1d1d1d;
    margin-bottom: 24px;
    font-family: techathonFont;
    width:90%;
    margin: auto;

@media only screen and (min-width: 600px){
      width:90.3%;
      margin: auto;
}
@media only screen and (min-width: 768px){
   width:80.3%;
   margin:20px auto;
   font-size:18px;
   text-align:center;
   
}
@media only screen and (min-width:1024px){
    font-size: 22px;
  }
@media only screen and (min-width:1440px){
  font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 27px;
display: flex;
align-items: center;
text-align: center;
width:1012px;
   margin:20px auto;

color: #1D1D1D;
  }

  
`;





export const Core = () => {
  return (
   
      <CoreContainer id="components">
        <CoreWrapper>
        <CoreHeading 
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="40"
        data-aos-duration="700"
        data-aos-easing="ease-in-out"
        >
            Core components of the community
        </CoreHeading>
        <CoreText 
         data-aos="fade-in"
         data-aos-offset="200"
         data-aos-delay="50"
         data-aos-duration="1000"
         data-aos-easing="ease-in-out"
        
        >
        We have commited tech enthusiats on borad to guide your through your desired tech career. We cover the following services, and your other requirements as well.
        </CoreText>
    {/* Section start */}
        <CoreSection> 
       <Cards

           
            image={rocket}
            title="Kickstarter"
            description='No prior skills needed. In transitioning, you will be tutored from the very basics to the required standard of knowledge & skill needed.'
       />
       <Cards

            
            image={el_group}
            title="Mentorship"
            description='Continuous learning is guaranteed as our committed mentors are ready to take you step by step and set you on the right track in your chosen career journey.'
       />
       <Cards

          
            image={opensource}
            title="Open-source"
            description='We give back to the tech community by contributing to open-source projects which in-turn has potential benefit to everyone who has access to them. '
       />
    {/* Section start */}
       </CoreSection> 
        <Button BtnText={'View Code of Conduct'}/>
       </CoreWrapper>
    </CoreContainer>
      
 
  )
}
