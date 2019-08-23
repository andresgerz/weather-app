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

    param = param.toLocaleLowerCase();

    const cities = {
      "buenos aires": 3433955,
      "bariloche": 7647007,
      "posadas": 3429886,
      "resistencia": 3429577,
      "ushuaia": 3833367,
      "tokyo": 1850147,
      "new york": 5128581,
      "montevideo": 3441575,
      "rio de janeiro": 3451190,
      "berlin": 2950159
    }
    const city = cities[param]
    return city
  }
  
  render() {
    console.log(this.state.city);

    return (
              <div className="App text-white">
                      
                <div id="background-top"> 
                  <Find id="find" onCityChange={this.onCityChange} cityID={this.state.cityID} />
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

