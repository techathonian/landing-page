import React from 'react'
import styled from 'styled-components';
import { FutureEvents } from './FutureEvents';
import { OngoingEvents } from './OngoingEvents';

const Container =styled.div`
  width: 100%;
`;

export const EventSection = () => {
  return (
    <Container>
        <OngoingEvents />
         <FutureEvents />
    </Container>
  )
}
