import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`

  padding: 120px 0 80px;
  h1{
    font-family: techathonFont;
    text-align: center;
    font-size: 24px;
    margin: 20px 0;
  }
   
  p{
    font-family: techathonFont;
    text-align: center;
   
  }

`;
const GridContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
max-width:500px;
min-width: 300px;
margin: 0 auto;

   
`;
const Container = styled.div`
  grid-column: span 3;
  place-self: center;

 
    
   
   

`;
const Form = styled.div`
margin: 10px 0;
`;



export const Certpayment = () => {
  return (
    <Wrapper>
       
        <GridContainer>
            <Container>
               
            <h1 style={{textAlign:'center'}}>
            You are about to Pay for your certificate
            
        
        </h1>
            <p><span style={{fontWeight:'bold'}}>Account Name:</span> Techathon ICT Program</p>
            <p><span style={{fontWeight:'bold'}}>Account Number:</span> 1697912414</p>
            <p><span style={{fontWeight:'bold'}}>Bank Name:</span> Access Bank</p>

            </Container>

        </GridContainer>
        <Form>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf93biWna-93BhlCB3yAddXonO0RIb1oyyvJfP_n8aSLTzs6A/viewform?embedded=true" width="100%" height="1213" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </Form>
    </Wrapper>
  )
}
