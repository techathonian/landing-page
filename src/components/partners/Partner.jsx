import React from 'react'
import { PartnerContent } from './PartnerContent'
import opensource from  '../../assets/opensource.png';
import styled from 'styled-components';

const Container =styled.div`

`;

export const Partner = () => {
  return (
    <Container id="partners">
        
    <PartnerContent
        title="Meet our Partners"
        text="Join Our Partners to promote a seamless transitioning of mentees"
        image={opensource}
        partner="Open Source Initiative"
    />
  

    </Container>
  )
}
