import React from 'react';
import Home from "./component/Home"
import { BrowserRouter as Router,Route,Redirect} from "react-router-dom"

import Navbar from "./component/Navbar"
import Menu from "./component/Menu"

export default function App() {
  return (
    <>
     <Navbar/> 
    <Menu/>
    <Router>
    <Route  path="/" component={Home}/> 
    <Redirect to="/"/>
    </Router> 
       
    
    </>
  )
};






