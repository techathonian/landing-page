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
   


`;

const Nav = styled.nav`
  
    
`;

const NavContainer = styled.div`
        margin:0 128px ;
        /* margin:0 0.060078125% ;  */
        height: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media only screen and (max-width:1200px) and (min-width:769px){
            margin:0 80px ;


        }
        @media only screen and (max-width:768px){
        margin:0 20px;
        height: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
     
        }
       
        /* Navcontainer margin when res is 820 */
    
     
`;
const Image = styled.img`
 
        width: 100%;
        object-fit: contain; 
 
`;
const LogoContainer = styled.div`
/*         
        margin-top:15px; this is just a hack
        width:197px;
        height: 48px; */

        @media only screen and (max-width:820px){
        margin-top:15px; /*this is just a hack*/
        width:120px;
        height: 48px;
        }
   
`;

const ListContainer = styled.div`
    @media only screen and (max-width:768px){
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

       
      
        &&#hidden{
         /* background-color: red;
         position: absolute;
         right:100%; */
         right:0;
     }
    }
     
`;

const UnorderdList = styled.ul`
    list-style-type: none;
    margin:0;
    padding:0;
  
`;

const ListItem = styled.li`
 
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

    a:hover{
        color: #FFFFFF;
        opacity: 0.8;
        transition: 2sec linear;
    }

    @media only screen and (max-width:1008px) and (min-width:769px){

        display:inline;
        color:#fff;

    a{
        text-decoration: none;
      
        padding: 14px 20px;
        font-family: techathonFont;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
    
     
    }
}

    @media only screen and (max-width:768px){
        display:flex;
        color:#1D1D1D;

    a{
       
        padding: 14px 40px;
        font-family: techathonFont;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 35px;
        color: #1D1D1D;
    }
    a:hover{
       
        padding: 14px 40px;
        font-family: techathonFont;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 35px;
        color: #32376F;
    }
    }
    /* Responsive for anchor tags when res is 820 */
    /* @media only screen and (max-width:820px){
        a{
        text-decoration: none;
      
        padding: 14px 20px;
        font-family: techathonFont;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 35px;
        color: #1D1D1D;
      
    }
        } */
    
   
    
`;

const HambugerMenu = styled.div`
     display: none;
     @media only screen and (max-width:768px){
        display: block;
        padding:7px 3.5px;
        width: 50px;
        height: 50px;
      
     }

`;
const HambugerMenuClose = styled.div`
     display: none;
     @media only screen and (max-width:768px){
        display: block;
        padding:7px 3.5px;
        width: 50px;
        height: 50px;
        margin-left: 70%;
        /* position: fixed;
        right:20px; */

     }

`;
const MenuIcon = styled.img`
   display: none;
 

   @media only screen and (max-width:768px){
    display: block;
   
    width:100%; 
   
  
     height:100%;
 
   }

`;

export const NavBar = () => {
    const [toggleNav, setToggleNav] = useState(false)
    const [{officalLogo}] = Logo;
  return (
    <Header>
        <Nav >
            <NavContainer>
                <Link to="/">
                <LogoContainer>
                    <img src={officalLogo}/>
                </LogoContainer>
                </Link>
              
               <ListContainer  id={`${toggleNav ? "hidden" : ""}`}>{/* List conatiner start */}
                <HambugerMenuClose onClick={()=>setToggleNav(!toggleNav)}>
                < MenuIcon src={menuiconClose} />
                </HambugerMenuClose>
                    <UnorderdList>
                    <ListItem><Link to="/">Home</Link></ListItem>
                        {/* <ListItem><HashLink smooth to="#home">Home</HashLink></ListItem> */}
                        <ListItem onClick={()=>setToggleNav(!toggleNav)}><HashLink smooth to="/#components">Components</HashLink></ListItem>
                        <ListItem onClick={()=>setToggleNav(!toggleNav)}><HashLink smooth to="/#events">Events</HashLink></ListItem> 
                        <ListItem onClick={()=>setToggleNav(!toggleNav)}><Link to="/about">About us</Link></ListItem>
                        <ListItem onClick={()=>setToggleNav(!toggleNav)}><HashLink smooth to="/#partners">Partners</HashLink></ListItem>
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
