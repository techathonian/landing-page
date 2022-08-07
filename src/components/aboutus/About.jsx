import React from 'react'
import { AboutContent } from '../../store/data'
import { Meet } from './Meet'
import styled from 'styled-components';
import aos from 'aos';
import { Button } from './Button';

const Container = styled.div`
    padding: 0 0 36px;
`;

const Wrapper = styled.div`
    margin: 0 20px;
    padding-top: 32px;
    /* background-color: green; */
    @media only screen and (min-width:600px){
        margin: 0 50px;
    }

    @media only screen and (min-width:768px){
        margin: 0 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      
       
    }

    @media only screen and (min-width:1024px){
        margin: 0 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;
}
  
`;

const FlexContainer = styled.div`
display: block;

    @media only screen and (min-width:768px){
        display: none;
       
    }
`;

const FlexContainerDeskLeft = styled.div`
display: none;

@media only screen and (min-width:768px){
        display: block;
       
    }
     @media only screen and (min-width:1024px){
        display: block;
       /* width: 588px; */
  
       
    }
`;
const FlexContainerDeskRight = styled.div`
display: none;
@media only screen and (min-width:768px){
        display: block;
       
    }
     @media only screen and (min-width:1024px){
        display: block;
       
       
    }
`;

const Heading = styled.h2`
   font-weight: 500;
   font-size: 24px;
   line-height: 36px;
   color: #1D1D1D;
   text-align: center;
   font-family: techathonFont;

   @media only screen and (min-width:1024px){
       font-size:32px;
    
      text-align: left;
       margin-bottom: 18px;
   }

`;
const Image = styled.img`
width:290px;
/* height: 290px; */
display: block;
margin:  auto ;


@media only screen and (min-width:768px){
    margin:  0;
    width:368px;
}
@media only screen and (min-width:1024px){
    margin:  0;
    width:464px;
   
}


`;

const Text = styled.p`
    font-size: 16px;
    line-height: 26px;
    font-weight: 400;
    color: #1D1D1D;
    font-style: normal;
    font-family: techathonFont;
    margin: 0;

    @media only screen and (min-width:1024px){
        font-size: 18px;
        width:90%
     
     
    }


`;

export const About = () => {
  const [{title, image, textLine1, textLine2, textLine3, textLine4, desktopImage}] = AboutContent;
//     const renderAbout = AboutContent.map((content, key)=>{
      
//         return(
//          <Container content={content} key={key}>
//              <Wrapper>
//              <Heading >{content.title}</Heading >
//               <div style={{display:'flex'}}>
//                 <Image src={content.image} />
//                 <Text>{content.textLine1}</Text>
//                 </div>  
               
//             </Wrapper>
//         </Container>
//         )
//    })
//    return (
//      <Container>
       
         
//          {renderAbout}
         
//          <Meet />
//      </Container>
//    )

return(

<Container >
<Wrapper>
       <FlexContainerDeskLeft >
            <Heading>{title}</Heading>  
            <Text>{textLine1}</Text><br></br>

            <Text>{textLine2}</Text><br></br>

           <Text>{textLine3}</Text><br></br>     
            <Text>{textLine4}</Text><br></br>  
            <Button BtnText={'Become a mentor'}/>
            {/* <Button BtnText={'Join the waitlist for Techathon 2.0'}/>  */}
       </FlexContainerDeskLeft>
       <FlexContainerDeskRight>
           <Image src={desktopImage}/>
       </FlexContainerDeskRight>
       {/* mobile content */}
       <FlexContainer >
            <Heading 
            
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            
            >{title}</Heading>  
            <Image 
            
            
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="40"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            
            src={image} />
             
       </FlexContainer>
       <FlexContainer>
       <Text

            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="40"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
       >{textLine1}</Text><br></br>

        <Text
        
        data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="40"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
        >{textLine2}</Text><br></br>

        <Text
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="40"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        
        >{textLine3}</Text><br></br>     
        <Text
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="40"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        
        
        >{textLine4}</Text>  
        <Button BtnText={'Become a mentor'}/>
       </FlexContainer>
       
     
   </Wrapper>
</Container>
)
}
