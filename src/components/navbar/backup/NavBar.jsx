import React, {useState} from 'react';
import styled from 'styled-components';
import { Logo } from '../../store/data';
import menuicon from './/menuicon.svg';
import menuiconClose from '../../assets/menuiconClose.svg';
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';


const Header = styled.header`
    height: 80px;
    width:100%;
    background-color: #32376F;
    position: fixed;
    top:0;
    left:0;
    box-shadow:0 1px 4px hsl(0 4% 15% / 10%);
    z-index:1;
  

@media only screen and (min-width:1440px){
    height: 80px;
    width:100%;
    background-color: #32376F;
    position: fixed;
   

}
`;

const Nav = styled.nav`
  
    
`;

const NavContainer = styled.div`

        margin:0 20px;
        height: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
     

     @media only screen and (min-width:1440px){
        margin:0 128px;
        height: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
     }
`;
const Image = styled.img`
    /* width:197px;
    height: 48px; */
    width: 100%;
    object-fit: contain;
    @media only screen and (min-width:1440px){
        width: 100%;
        object-fit: contain; 
    }
`;
const LogoContainer = styled.div`


    @media only screen and (min-width:1440px){
        margin-top:15px; /*this is just a hack*/
        width:197px;
        height: 48px;
    }
`;

const ListContainer = styled.div`
        /* display: none; */
        /* position:absolute;
        right: 0;
        top:85px;
        height: 100vh;
        width:80%; */
        /* min-width:60vw; */
        background-color: black;
        position:fixed;
        top:0;
        right:-100%;
        width:212px;
        min-height:100vh;
        padding:20px;
        background-color:#fff;
        box-shadow: -2px 0 4px hsl(0 40% 15% / 10%);
        transition:.4s;

        @media only screen and (min-width:600px){
        display: block;
        position: relative;
        top:-20px;
        height: 0;
        min-width:0;
        }
      
        &&#hidden{
         /* background-color: red;
         position: absolute;
         right:100%; */
         right:0;
     }
     
`;

const UnorderdList = styled.ul`
    list-style-type: none;
    margin:0;
    padding:0;
    
`;

const ListItem = styled.li`
    display:flex;
    color:#fff;

    a{
       
        padding: 14px 40px;
        font-family: techathonFont;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 35px;
        color: #1D1D1D;
    }

    @media only screen and (min-width:1440px){
        display:inline;
        color:#fff;

    a{
        text-decoration: none;
      
        padding: 14px 40px;
        font-family: techathonFont;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 35px;
        color: #FFFFFF;
    }
    }
`;

const HambugerMenu = styled.div`
        padding:7px 3.5px;
        width: 40px;
        height: 40px;
        

        @media only screen and (min-width:768px){
            display: none;
        }
       

`;
const MenuIcon = styled.img`
width:100%;
height:100%;

`;

export const NavBar = () => {
    const [toggleNav, setToggleNav] = useState(false)
    const [{officalLogo}] = Logo;
  return (
    <Header>
        <Nav >
            <NavContainer>
                <LogoContainer>
                    <img src={officalLogo}/>
                </LogoContainer>
                <ListContainer  id={`${toggleNav ? "hidden" : ""}`}>{/* List conatiner start */}
                <HambugerMenu  onClick={()=>setToggleNav(!toggleNav)}>
                < MenuIcon src={menuiconClose} />
                </HambugerMenu>
                    <UnorderdList>
                        <ListItem><HashLink smooth to="#home">Home</HashLink></ListItem>
                        <ListItem><HashLink smooth to="#components">Components</HashLink></ListItem>
                        <ListItem><HashLink smooth to="#events">Events</HashLink></ListItem> 
                        <ListItem><Link to="/about">About us</Link></ListItem>
                        <ListItem><HashLink smooth to="#partners">Partners</HashLink></ListItem>
                    </UnorderdList>
                </ListContainer > {/* List conatiner start */}
                <HambugerMenu  onClick={()=>setToggleNav(!toggleNav)}>
                    < MenuIcon src={menuicon} />
                  
                </HambugerMenu>
                  
                </NavContainer>
        </Nav>
     
    </Header>
  )
}
