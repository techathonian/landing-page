import React from 'react'
import { TeamCard } from './TeamCard'
import styled from 'styled-components';
import { AboutPage } from './AboutPage';
import { Button } from './Button';
import Heroarc from '../../assets/herovector.svg'
import Twitter from '../../assets/twitter.svg'
import Ig from '../../assets/bxl_instagram-alt.svg'
import LinkIn from '../../assets/akar-icons_linkedin-box-fill.svg'


const Container = styled.div`
background-image: url();
   
`;


const MentorBox = styled.div`
padding:0 128px;


@media only screen and (max-width:768px){
    padding:0 20px;
}


`;

const AboutHead = styled.h2`
    font-family: techathonFont;
    font-style: normal;
    font-weight: 500;
    font-size: 44px;
    line-height: 70px;
    text-align: center;
    color: #32376F;

    span{
        color: #986DF6;
    }


    @media only screen and (max-width:768px){
        font-family: techathonFont;
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 70px;
        color: #32376F
    }
`;
const HeroVectorArc = styled.img`
    display: inline-block;
    margin-top: 8px;
    width: 155px;
    margin-left: 51.1%;
/* background-color: red; */
    
    @media only screen and (max-width:768px){
    display: inline-block;
    margin-top: 2px;
    width: 117px;
    margin-left: 45%;
    }




`;
const Aboutpara= styled.p`
    font-family: techathonFont;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    color: #32376F;
    margin-top:30px;

`;


const FlexContainerTop= styled.div`
display: grid;
/* grid-template-columns: auto auto auto; */
grid-template-columns:repeat(auto-fit, minmax(325px, auto));
gap:30px;
margin-top: 80px;

@media only screen and (max-width:768px){
    gap:16px;
}


`;
const FlexContainer= styled.div`
display: grid;
/* grid-template-columns: auto auto auto; */
grid-template-columns:repeat(auto-fit, minmax(325px, auto));
gap:30px;
margin-top: 80px;


@media only screen and (max-width:768px){
    gap:16px;
}


`;
const MentorsCardOne  = styled.div`
   
    background-image: url(https://firebasestorage.googleapis.com/v0/b/tecthathonlandingpage.appspot.com/o/assets%2Fbg%2Fmentors%2FDSC_0886.JPG?alt=media&token=d5a16b4d-aa0b-429a-9033-7c7e512b268c);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width:329px;
    height: 350px;
    border-radius: 8px;
    margin:16px auto 0;
    top:44px;
    border: 2px solid #986DF6;
    padding:16px;
    position:relative;
    overflow:hidden;   



    
    &:hover{
   
    filter: sepia(40%);

   .overview {
        transform:translateY(0);
        cursor:pointer;
    }
    
   
}

  

`;
// Card start
const MentorsCardTwo  = styled.div`
   
    background-image: url(https://firebasestorage.googleapis.com/v0/b/tecthathonlandingpage.appspot.com/o/assets%2Fbg%2Fmentors%2Fphoto1659188210.jpeg?alt=media&token=3f410364-83cf-471a-9af0-a8dec4b1fab9);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width:329px;
    height: 350px;
    border-radius: 8px;
    margin:16px auto 0;
    border: 2px solid #986DF6;
    padding:16px;
    position:relative;
    overflow:hidden;   




    &:hover{
   
    filter: sepia(40%);

   .overview {
        transform:translateY(0);
        cursor:pointer;
    }
    
   
}

  

`;// Card start
// Card start
const MentorsCardThree  = styled.div`
   
    background-image: url(https://firebasestorage.googleapis.com/v0/b/tecthathonlandingpage.appspot.com/o/assets%2Fbg%2Fmentors%2Fphoto1659274453.jpeg?alt=media&token=91292faa-6ca2-4094-a69e-fea77aac65b7);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width:329px;
    height: 350px;
    border-radius: 8px;
    margin:16px auto 0;
    border: 2px solid #986DF6;
    padding:16px;
    position:relative;
    top:44px;
    overflow:hidden;   




    &:hover{
   
    filter: sepia(40%);

   .overview {
        transform:translateY(0);
        cursor:pointer;
    }
    
   
}

  

`;// Card start

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
    margin-top:16px;
`;

const StyledMentor = styled.div`
margin-top: 176px;
background-color: #171C54;
color: #fff !important;
padding:10px 20px 10px 20px ;
border-radius:8px ;
    position:absolute;
    left:0;
    right:0;
    bottom:0;
    padding:1rem;
    max-height:100%;
    transform:translateY(101%);
    transition:transform 0.3s ease-in;
    overflow:auto;





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
const JoinUs =styled.div`

/* height: 312px; */
padding:64px 0;
margin-top: 120px;

background: #171C54;


@media only screen and (max-width:768px){
    padding:32px 0;

}
`;
const JoinHeading=styled.h3`
        text-align: center;
        font-family: techathonFont;
        font-style: normal;
        font-weight: 500;
        font-size: 30px;
        line-height: 45px;
        color: #FFFFFF;
        @media only screen and (max-width:768px){

            font-family: techathonFont;
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            line-height: 36px;
            text-align: center;
            color: #FFFFFF;
        }
`;

const Text = styled.p`
font-family: techathonFont;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 24px;
text-align: center;
margin:20px 0;
color: #FFFFFF;

@media only screen and (max-width:768px){

    font-family: techathonFont;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
text-align: center;
color: #FFFFFF;
}
`;
export const About = () => {
  return (
    <Container>

       <div className="hero" style={{backgroundImage:'url(https://firebasestorage.googleapis.com/v0/b/tecthathonlandingpage.appspot.com/o/assets%2Fbg%2FCircuit%20background%20dark.png?alt=media&token=42b2b1de-e65a-4c88-b2f7-d53086aa51dc)'}}>
       
       <MentorBox>
            <AboutHead style={{padding:'160px 0 0'}}>Meet <span>our</span> mentors</AboutHead>
            <HeroVectorArc  src={Heroarc} />
            <Aboutpara>Together we are building a community where anyone can transition into tech from zero to ground up.</Aboutpara>
            
            <FlexContainerTop>
                <MentorsCardOne style={{marginTop:'44px',}} 
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="40"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                
                
                >
                <Heading>Developer</Heading>
                  <StyledMentor className='overview'>
                  <StyledMentorName >Lamodots Wisdom</StyledMentorName>
                   <StyledMentorProfession >Front-end Developer, Lead Mentor</StyledMentorProfession>
                   <div style={{display:'flex', gap:'16px', alignItems:'center'}}>
                   <a href='#'><img src={Twitter}  style={{ width:'32px'}}/></a>
                   <a href='#'><img src={Ig}  style={{ width:'32px'}}/></a>
                   <a href='#'><img src={LinkIn}  style={{ width:'28px'}}/></a>
                   </div>
                  </StyledMentor>
                </MentorsCardOne  >

                <MentorsCardTwo style={{marginTop:'44px',}}
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="40"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                
                >
                <Heading>Developer</Heading>
                  <StyledMentor className='overview'>
                  <StyledMentorName >Chigbo James</StyledMentorName>
                   <StyledMentorProfession >Front-end Developer, React Js Mentor</StyledMentorProfession>
                   <div style={{display:'flex', gap:'16px', alignItems:'center'}}>
                   <a href='#'><img src={Twitter}  style={{ width:'32px'}}/></a>
                   <a href='#'><img src={Ig}  style={{ width:'32px'}}/></a>
                   <a href='#'><img src={LinkIn}  style={{ width:'28px'}}/></a>
                   </div>
                  </StyledMentor>
                </MentorsCardTwo  >

                <MentorsCardThree style={{marginTop:'44px',}}
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="40"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                
                >
                <Heading>UI/UX</Heading>
                  <StyledMentor className='overview'>
                  <StyledMentorName >Kudirat Ibeabuchi</StyledMentorName>
                   <StyledMentorProfession >Product Designer, Product Design Mentor</StyledMentorProfession>
                   <div style={{display:'flex', gap:'16px', alignItems:'center'}}>
                   <a href='#'><img src={Twitter}  style={{ width:'32px'}}/></a>
                   <a href='#'><img src={Ig}  style={{ width:'32px'}}/></a>
                   <a href='#'><img src={LinkIn}  style={{ width:'28px'}}/></a>
                   </div>
                  </StyledMentor>
                </MentorsCardThree>
               

            </FlexContainerTop>

           
           
        </MentorBox>
     
       </div>
       <MentorBox>
            <FlexContainer>
            
            <MentorsCardOne style={{marginTop:'44px',}}
            data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
            
            >
                <Heading>Developer</Heading>
                  <StyledMentor className='overview'>
                  <StyledMentorName >Lamodots Wisdom</StyledMentorName>
                   <StyledMentorProfession >Front-end Developer, Lead Mentor</StyledMentorProfession>
                   <div style={{display:'flex', gap:'16px', alignItems:'center'}}>
                   <a href='#'><img src={Twitter}  style={{ width:'32px'}}/></a>
                   <a href='#'><img src={Ig}  style={{ width:'32px'}}/></a>
                   <a href='#'><img src={LinkIn}  style={{ width:'28px'}}/></a>
                   </div>
                  </StyledMentor>
                </MentorsCardOne  >
                <MentorsCardTwo style={{marginTop:'44px',}}
                data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="40"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
                
                >
                <Heading>Developer</Heading>
                  <StyledMentor className='overview'>
                  <StyledMentorName >Chigbo James</StyledMentorName>
                   <StyledMentorProfession >Front-end Developer, React Js Mentor</StyledMentorProfession>
                   <div style={{display:'flex', gap:'16px', alignItems:'center'}}>
                   <a href='#'><img src={Twitter}  style={{ width:'32px'}}/></a>
                   <a href='#'><img src={Ig}  style={{ width:'32px'}}/></a>
                   <a href='#'><img src={LinkIn}  style={{ width:'28px'}}/></a>
                   </div>
                  </StyledMentor>
                </MentorsCardTwo  >
                <MentorsCardThree style={{marginTop:'44px',}}
                data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
                
                
                >
                <Heading>UI/UX</Heading>
                  <StyledMentor className='overview'>
                  <StyledMentorName >Kudirat Ibeabuchi</StyledMentorName>
                   <StyledMentorProfession >Product Designer, Product Design Mentor</StyledMentorProfession>
                   <div style={{display:'flex', gap:'16px', alignItems:'center'}}>
                   <a href='#'><img src={Twitter}  style={{ width:'32px'}}/></a>
                   <a href='#'><img src={Ig}  style={{ width:'32px'}}/></a>
                   <a href='#'><img src={LinkIn}  style={{ width:'28px'}}/></a>
                   </div>
                  </StyledMentor>
                </MentorsCardThree>
               
            
            </FlexContainer>
       
       
       </MentorBox>
        <JoinUs>
            <JoinHeading>Join us</JoinHeading>
            <Text>Do enjoy helping others learn? then join us and become a mentor</Text>
           <Button BtnText="Become a mentor"/>
        </JoinUs>
        
    </Container>
  )
}
