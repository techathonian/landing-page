import React from 'react'
import styled from 'styled-components';
import { Button } from './Button';
import { FutureEvents } from './FutureEvents';
import { OngoingEvents } from './OngoingEvents';

const Container =styled.div`
  width: 100%;
  background-color:#171C54;
  padding:0 0 20px;
`;

export const EventSection = () => {
  return (
    <Container>
        <OngoingEvents />
         <FutureEvents />
        <Button BtnText={"Join the waitlist for Techathon 2.0"} />
    </Container>
  )
}
