import React, {Component} from 'react';

// Components
import NavBarWeb from './components/NavBarWeb/NavBarWeb';
import Find from './components/Find/Find';
import ForecastTable from './components/ForecastTable/ForecastTable';
import Maps from './components/Maps/Maps';
import Footer from './components/Footer/Footer';

import './App.css';

class App extends Component {
  render() {
    return  <div className="App">
              
              <NavBarWeb id="navbar-web" />
              <div id="background-top" className="w-100 h-50"> 
                <Find id="find" />
              </div>
              <div id="background-center" className="w-100 h-50">
                <ForecastTable id="table" />
                <Maps />
              </div>
              <div id="background-bottom" className="w-100 h-50">
                <Footer />
              </div>
             
              
              
             
          
            </div>
  }
}

export default App
