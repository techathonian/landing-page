import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../store/data';
import { Socials } from '../../store/data';
import styled from 'styled-components';
import { FooterNavigate } from '../../store/data';
import { FooterLinks } from '../../store/data';

const Container =styled.div`
    background-color: #32376F;
    padding:31px 0 41px;
`;

const Wrapper =styled.div`
    margin: 0 20px;
    
    @media only screen and (min-width:768px){
        display: none;
    }
    @media only screen and (min-width:1024px){
        display: none;
       
    }
`;
const WrapperDesktop = styled.div`
    display: none;

    @media only screen and (min-width:768px){
        display: block;
        margin: 0 50px;
        padding-top: 126px;
        display:flex;
        justify-content:space-between;
    }
    @media only screen and (min-width:1024px){
        display: block;
        margin: 0 80px;
        padding-top: 126px;
        display:flex;
        justify-content:space-between;
    }
`;
const Content = styled.div`

`;
const ContentWrapper = styled.div`
display:flex;
gap: 22.33px;
margin-top:24.9px ;

@media only screen and (min-width:1024px){
    margin-top: 79px;
}


`;
const Heading = styled.h2`
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #22CBD5;
        font-family: techathonFont;
        margin-top: 33.34px;

        @media only screen and (min-width:768px){
            margin-top: 0;
            margin-bottom: 54px;
            font-size: 18px;
            font-weight: 500;
            
            line-height: 24px;


            letter-spacing: 0.11em;
            text-transform:uppercase;
        }
        @media only screen and (min-width:1024px){
            margin-top: 0;
            margin-bottom: 54px;
            font-size: 24px;
            font-weight: 500;
            
            line-height: 24px;


            letter-spacing: 0.11em;
            text-transform:uppercase;
        }
`;
 const List = styled.ul`
    list-style-type: none;
    padding-top: 8px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    font-family: techathonFont;
    
    @media only screen and (min-width:768px){
        padding-bottom: 40px;
        font-style: normal;
        font-weight: 450;
        font-size: 16px;
        line-height: 30px;

        color: #FFFFFF;
    }
    @media only screen and (min-width:1024px){
        padding-bottom: 40px;
        font-style: normal;
        font-weight: 450;
        font-size: 24px;
        line-height: 30px;

        color: #FFFFFF;
    }
 `;

 const Privacy = styled.h3`
    font-style: normal;
    font-weight: 400;
    font-size: 19.5417px;
    line-height: 20px;
    font-family: techathonFont;
    color: #FFFFFF;
    margin-top: 32px;
    opacity: 0.5;

    @media only screen and (min-width:768px){
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        color: #FFFFFF;
        margin-top: 0;
        opacity: 0.5;
    }
    @media only screen and (min-width:1024px){
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 28px;
        color: #FFFFFF;
        margin-top: 0;
        opacity: 0.5;
    }
 `;
 const Term = styled.h3`
    font-style: normal;
    font-weight: 400;
    font-size: 19.5417px;
    line-height: 20px;
    font-family: techathonFont;
    color: #FFFFFF;
    margin-top: 8px;
    opacity: 0.5;
    @media only screen and (min-width:768px){
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        color: #FFFFFF;
        margin-top: 0;
        opacity: 0.5;
    }

    @media only screen and (min-width:1024px){
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 28px;
        color: #FFFFFF;
        margin-top: 0;
        opacity: 0.5;
    }
 `;
const PrivacyTermsFlex = styled.div`
  @media only screen and (min-width:768px){
            display:flex;
            gap:40px;
            width: 282px;
            height: 28px;
            align-items: center;
          
            margin-top: 83px;
            margin-bottom: 79px;
        }
        @media only screen and (min-width:1024px){
            display:flex;
            gap:40px;
            width: 282px;
            height: 28px;
            align-items: center;
          
            margin-top: 83px;
            margin-bottom: 79px;
        }
`;
 const Copyright = styled.p`
    font-family: techathonFont;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  
    text-align: center;

    color: #FFFFFF;

    @media only screen and (min-width:768px){
        text-align: left;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 29px;
        display: flex;
        align-items: center;
        color: #FFFFFF;
    }
    @media only screen and (min-width:1024px){
        text-align: left;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        display: flex;
        align-items: center;
        color: #FFFFFF;
    }
 `;

 const ContactEmail = styled.p`
    font-size: 18px;
    color: #fff;
    font-family: techathonFont;
 `;

export const Footer = () => {

    const renderLogo = Logo.map((logo, key)=>{
        return(
            <div logo={logo} key={key} >
                <img src={logo.officalLogo} alt="" style={{width:'197px', height:'48px'}} />
                 
            </div>
        )
    });
    const renderIcons = Socials.map((icons, key)=>{
        return(
          
             <Content icon={icons} key={key}>
                <img src={icons.icon} alt=""/>
                 
            </Content>
           
        )
    });


  return (
    <Container>
        <Wrapper>
            <div >
       <div>{renderLogo }</div> 
        <ContentWrapper>
        {renderIcons }
        </ContentWrapper>
        </div>
        <div>
        <Heading >
            Navigate
        </Heading>
        {/* Naviagations here */}
            {
                FooterNavigate.map((footernav, key)=>(
                <List  key={key}>
                    <li >
                        {footernav.navigate}
                    </li>
                </List>
                ))}   
            </div>
            <div> 
        <Heading >
            
            Links
        </Heading>
        {/* Links here */}
        {
            FooterLinks.map((footerlinks, key)=>(
            <List  key={key}>
                <li>{footerlinks.foorterlinks}
                </li>
            </List>
        ))}
        </div> 
        <Privacy>Privacy Policy</Privacy>
        <Term>Terms</Term>
        <Copyright>&copy; 2022 Techathon Community</Copyright>
        </Wrapper>

        {/* Wrapper desktop */}
        <WrapperDesktop >
     
            <div >
        {renderLogo }
        <ContentWrapper>
        {renderIcons }
        </ContentWrapper>
        <PrivacyTermsFlex >
            <Term>Terms</Term>
            <Privacy>Privacy Policy</Privacy>
        </PrivacyTermsFlex>
        <Copyright>&copy; 2022 Techathon Community</Copyright>
        </div>
        <div>
        <Heading >
            Navigate
        </Heading>
        {/* Naviagations here */}
            {
                FooterNavigate.map((footernav, key)=>(
                <List  key={key}>
                    <li >
                        {footernav.navigate}
                    </li>
                </List>
                ))}   
            </div>
            <div> 
        <Heading >
            
            Links
        </Heading>
        {/* Links here */}
        {
            FooterLinks.map((footerlinks, key)=>(
            <List  key={key}>
                <li>{footerlinks.foorterlinks}
                </li>
            </List>
        ))}
        <Heading>
            Contact US
        </Heading>
                <ContactEmail>
                hello@techathonian.com
                </ContactEmail>
        </div> 
        
        
        </WrapperDesktop>
    </Container>
  )
}
