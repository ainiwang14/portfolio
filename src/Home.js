import React from 'react';
import aileen from './media/aileen.jpg';
import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #6AC9DA;
  height: 94vh;
`
const AboutHeader = styled.div`
  font-weight: 800;
  font-size: 32px;
`
const AboutInfo = styled.div`
  width: 400px;
  height: auto;
`

const Headshot = styled.img`
  width: 300px;
  height: auto;
  border-radius: 50%;
  box-shadow: 8px 4px 8px 2px rgba(0,0,0,.5);
`
const Home = () => {
  return (
    <FlexContainer>
        <Headshot src={aileen} alt='Aileen'/>
        <AboutHeader>
          About:
        </AboutHeader>
        <AboutInfo>
          Hello! This is my website! I'm a law student at UCLA and also I decided to take a coding bootcamp. I don't mind working from home because I have two cats. Have a nice day!
        </AboutInfo>
    </FlexContainer>
  );
}

export default Home;
