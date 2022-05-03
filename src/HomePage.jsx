import React from 'react';
import HomeHeader from './styled/HomeHeader.js';
import HomeContent from './HomeContent.jsx';

const HomePage = () => {
  return (
    <>
    <HomeHeader justify='center'>
      <h2>Home Page</h2>
    </HomeHeader>
    <HomeContent />
    </>
  )
}



export default HomePage