import React, {Component} from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

// Components
import Home from './components/Home/Home';
import NavBarWeb from './components/NavBarWeb/NavBarWeb';
import Maps from './components/Home/Maps/Maps';
import Alerts from './components/Alerts/Alerts';
import News from './components/Home/News/News';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
 
// Styles
import './App.css';

// Hook components
export default function App(props) {
       
    return  <React.Fragment id="app" className="text-white">
              <Router>              

                <NavBarWeb id="navbar-web" />

                <div>
                  <Route path="/Home" component={Home} />
                  <Route path="/Maps" component={Maps} />
                  <Route path="/Alerts" component={Alerts} />
                  <Route path="/News" component={News} />
                  <Route path="/Contact" component={Contact} />
                  <div id="footer-web">
                    <Footer />
                  </div>
                </div>                                    
              </Router>
            </React.Fragment>
}