import React, { useState } from 'react'
import LandingPage from '../components/LandingPage/LandingPage';
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar';
import Info from '../components/Info/Info';
import { homeObjOne } from '../components/Info/Data';

const HomePage = () => {
    const [isOpen ,setIsOpen] = useState(false);

    const toggle = () =>
    {
        setIsOpen(!isOpen)
    }

    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={ toggle } />  
          <LandingPage />
          <Info {...homeObjOne}/>
        </>
    );
};

export default HomePage
