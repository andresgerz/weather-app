import React, {Component} from 'react';

// Components
import NavBarWeb from './components/NavBarWeb/NavBarWeb';
import Find from './components/Find/Find';
import ForecastTable from './components/ForecastTable/ForecastTable';
import Maps from './components/Maps/Maps';
import News from './components/News/News';
import Footer from './components/Footer/Footer';

import './App.css';

class App extends Component {
  render() {
    return  <div className="App text-white">
              
              <NavBarWeb id="navbar-web" />
              <div id="background-top"> 
                <Find id="find" />
              </div>
              <div id="background-center">
                <ForecastTable id="table" />
                <Maps />
              </div>
              <div id="background-bottom">
                <News />
                <Footer />
              </div>
             
              
              
             
          
            </div>
  }
}

export default App
