import react from 'react';
import styled from 'styled-components'
 import { HeroSection } from '../../components/herosection/HeroSection';
 import { Core} from '../../components/corecomponents/Core';
 import { EventSection } from '../../components/communityevents/EventSection';
 import { About } from '../../components/aboutus/About';
 import { Meet } from '../../components/aboutus/Meet';
 import { Partner  } from '../../components/partners/Partner';
 import { Footer} from '../../components/footer/Footer';


const Container =styled.div`

`;






export const Home = ()=>{
     
    return (

        <Container>
         
            <HeroSection  />
            <Core />
            <EventSection />
            <About />
            <Meet />
            <Partner />
            {/* <Footer /> */}
        
        </Container>
    )


}