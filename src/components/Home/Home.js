import React, { Component } from 'react';

import Find from './Find/Find';
import ForecastTable from './ForecastTable/ForecastTable';
import Maps from './Maps/Maps';
import News from './News/News';

export default class Home extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      city: '',
      cityID: 3433955
    };

    this.onCityChange = this.onCityChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  
  }
 

  onCityChange(cityName) {
    
    const cityID = this.findCity(cityName);

    this.setState({
      city: cityName,
      cityID: cityID
    }); 
  }



  // every city assign his ID
  findCity(param) {

    const cities = {
      "Buenos Aires": 3433955,
      "Bariloche": 7647007,
      "Posadas": 3429886,
      "Resistencia": 3429577,
      "Ushuaia": 3833367,
      "Tokyo": 1850147,
      "New York": 5128581,
      "Montevideo": 3441575,
      "Rio de Janeiro": 3451190,
      "Berlin": 2950159
    }
    const city = cities[param]
    return city
  }
  
  render() {
    console.log(this.state.city);

    return (
              <div className="App text-white">
                      
                <div id="background-top"> 
                  <Find id="find" onCityChange={this.onCityChange} />
                </div>
                <div id="background-center">
                  <ForecastTable id="table" cityID={this.state.cityID} />
                  <Maps />
                </div>
                <div id="background-bottom">
                  <News />
                </div>
              </div>
    );
  }
}

