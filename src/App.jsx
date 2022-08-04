import { Core } from './components/corecomponents/Core'
import styled from 'styled-components';
import { EventSection } from './components/communityevents/EventSection';
import { About } from './components/aboutus/About';
import { Partner } from './components/partners/Partner';
import { Footer } from './components/footer/Footer';
import { AboutPage } from './pages/aboutpage/AboutPage';
import { NavBar } from './components/navbar/NavBar';
import { HeroSection } from './components/herosection/HeroSection';



const Container =styled.div`

`;


function App() {


  return (
    <Container>
      <NavBar />
      <HeroSection />
      <Core />
      <EventSection />
     <About />
     <Partner />
     <Footer />
  
    </Container>
  )
}

export default App
