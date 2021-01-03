import React from 'react';
import aileen from 'public/aileen.jpg';

const Home = () => {
  return (
    <div>
      About:
      <div>
        <img src={aileen} alt='Aileen'/>
      </div>
    </div>
  );
}

export default Home;
