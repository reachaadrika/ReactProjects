import React from 'react'
import { BrowserRouter as Router , Route,Switch} from 'react-router-dom'
import HomePage from '../../Pages/HomePage'

export default function App() {
    return (
        <Router>
           
           <HomePage />            
            
        </Router>
    )
}
