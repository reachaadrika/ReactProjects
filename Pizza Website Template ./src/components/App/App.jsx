import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
//import Navbar from '../Navbar'
//import styled from 'styled-components';
import LandingPage from '../LandingPage/LandingPage';
import Products from '../Products/Products';
import { productData ,productData2,productData3 } from '../Products/Data';
import Feature from '../Feature/Feature';
import Footer from '../Footer/Footer';

const App = () => {
    return (
        <Router>
          <LandingPage />
          <Products head="Choose Amongest the Best!" data={productData}/>

          <Feature />
          <Products head="Pizza is Incomplete without these  " data={productData2}/>        
          <Products head ="Sweet Treats Awaiting your way 🧁 " data={productData3}/>       
          <Footer />
        </Router>
    )
}

export default App


