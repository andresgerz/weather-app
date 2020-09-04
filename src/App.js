import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Home from './components/Home/Home';
import NavBarWeb from './components/NavBarWeb/NavBarWeb';
import Charts from './components/Charts/Charts';
import Alerts from './components/Alerts/Alerts';
import News from './components/Home/News/News';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
 
// Styles
import './App.css';

// Hook components
export default function App() {
       
    return(
    
      <div id="app" className="text-white">
        <Router>              
          <NavBarWeb id="navbar-web" />
      
          <Route exact path="/" component={Home} />
          <Route path="/charts" component={Charts} />
          <Route path="/alerts" component={Alerts} />
          <Route path="/news" component={News} />
          <Route path="/contact" component={Contact} />
          
          <Footer />
          
        </Router>
      </div>
    )  
}