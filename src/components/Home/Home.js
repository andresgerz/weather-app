import React, { Component } from 'react';

import Find from './Find/Find';
import ForecastTable from './ForecastTable/ForecastTable';
import Maps from './Maps/Maps';
import News from './News/News';

export default class Home extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      cityCountry: 'Buenos Aires, AR',
    };

    this.onCityChange = this.onCityChange.bind(this);
  
  }
 

  onCityChange(cityCountry) {

    console.log(cityCountry);
   

    this.setState({
      cityCountry: cityCountry
    }); 
  }

  
  render() {
    
    return (
              <div className="App text-white">
                      
                <div id="background-top"> 
                  <Find id="find" onCityChange={this.onCityChange} cityCountry={this.state.cityCountry} />
                </div>
                <div id="background-center">
                  <ForecastTable id="table" cityCountry={this.state.cityCountry} />
                  <Maps />
                </div>
                <div id="background-bottom">
                  <News />
                </div>
              </div>
    );
  }
}

