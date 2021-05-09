import React , {useState} from 'react'
import Navbar from '../Navbar';
import SideBar from '../SideBar/SideBar';
import {LandingPageContainer,Heading,Paragraph,LandingPageBtn,LandingPageContent,LandingPageItems} from './LandingPageStyles'

const LandingPage = () => {
   
    const [isOpen,setIsOpen]=useState(false);

    const toggle =() => {
        setIsOpen(!isOpen);
    }
   
   
   
    return (
        <>
         <LandingPageContainer>
          <Navbar toggle={toggle} />   
          <SideBar isOpen={isOpen} toggle={toggle} />
        <LandingPageContent>
            <LandingPageItems>
            <Heading>Best Pizza In The Town🍕</Heading>
            <Paragraph>Oldest and the Juiciest!!👏 </Paragraph>
            <LandingPageBtn>Order Now!</LandingPageBtn>
            </LandingPageItems>
        </LandingPageContent>
        </LandingPageContainer> 
        </>
    );
};

export default LandingPage
