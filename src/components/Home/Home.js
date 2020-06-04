import React, { Component } from 'react';

import Find from './Find/Find';
import ForecastTable from './ForecastTable/ForecastTable';
import Charts from './Charts/Charts';
import News from './News/News';


export default class Home extends Component {
  
  constructor(props) {
  super(props);
 
    
    this.state = {
      cityCountry: "Buenos Aires, AR",
      errorStatus: false, 
      forecastObject: {},
      chartObject: {},
      dailyTemp: {},
      cityForecast: {
        name: "",
        day1: "",
        temp1: "",
        icon1: "",
        tmax: "",
        tmin1: "",
        humidity1: "",
        pressure1: "",
        wind1: "",
        pp:"",
        day2: "",
        tmax2: "",
        tmin2: "",
        icon2: "",
        day3: "",
        tmax3: "",
        tmin3: "",
        icon3: "",
        day4: "",
        tmax4: "",
        tmax4: "",
        icon4: "",
        day5: "",
        tmin5: "",
        tmax5: "",
        icon5: "",
        city: ""
      }
     };
     this.onCityChange = this.onCityChange.bind(this);
    }
 
    
  onCityChange(cityCountry) {
    
    this.setState({
      cityCountry: cityCountry
    }); 
    
    this.getForecast();
  }


  componentDidMount() {
    this.getForecast();
  }
  

  getForecast() {
    

  }
  

  /* componentWillMount() {
    postForecast();
  }

  postForecast() {

    axios.post()
      .then(response => {
        console.log("Response");
      })
      .catch(error => {
        console.log("Error in post method");
      })

  } */

  render() {
      return (  
        <React.Fragment>
                        
          <div id="background-top">
            <Find id="find" />
          </div>
          <div id="background-center">
            <ForecastTable id="table" />
            <Charts />
          </div>
          <div id="background-bottom">
            <News />
          </div>
        </React.Fragment>
    );
  }
}