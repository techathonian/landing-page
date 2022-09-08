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
        text="Join our partners to promote a seamless transitioning of one person.You can reachout to us at partners@techathonian.com"
        image={opensource}
        partner="Open Source Initiative"
    />
  

    </Container>
  )
}
