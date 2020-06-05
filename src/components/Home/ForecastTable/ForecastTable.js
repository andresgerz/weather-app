import React, { Component } from 'react';

import './ForecastTable.css';

// I import the Font Awesome icons
import { isArray } from 'util';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faSun,
  faMoon,
  faCloud,
  faCloudRain,
  faCloudSun,
  faCloudSunRain,
  faCloudShowersHeavy,
  faCloudMoon,
  faCloudMoonRain,
  faPooStorm,
  faCloudMeatball

} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(
  fab,
  faSun,
  faMoon,
  faCloud,
  faCloudRain,
  faCloudSun,
  faCloudSunRain,
  faCloudShowersHeavy,
  faCloudMoon,
  faCloudMoonRain,
  faPooStorm,
  faCloudMeatball
)

import moment from 'moment';
import { connect } from 'react-redux';

class ForecastTable extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      auxArr: [ 1, 2, 3, 4 ]
    }

    this.getForecast = this.getForecast.bind(this);
  }      

// This function convert the API's string to Font Awesome's keywork.
  changeIcon(param) {
  
    const iconTable = {
      "clear sky": faSun,
      "scattered clouds": faSun,
      "0": faMoon,
      "overcast clouds": faCloud,
      "light rain": faCloudRain,
      "moderate rain": faCloudRain,
      "broken clouds": faCloudSun,
      "few clouds": faCloudSun,
      "5": faCloudSunRain,
      "7": faCloudShowersHeavy,
      "8": faCloudMoon,
      "9": faCloudMoonRain,
      "10": faPooStorm,
      "snow": faCloudMeatball,
      "light snow": faCloudMeatball
    }    
    return iconTable[param];
  }    

  getForecast(result) {

    let days = [];
    let chartObject = {};
    let forecastObject = {};
    let weatherObject = {};

    let attributes = Object.keys(result.list[1].main);
    attributes.map(attr => chartObject[attr] = []);


    for (let i = 0; i < result.list.length; i++) {
      let main = result.list[i].main;
      let forecastDate = moment(result.list[i].dt_txt).format('YYYY-MM-DD');
      
      if (!forecastObject.hasOwnProperty(forecastDate)) {
        forecastObject[forecastDate] = [main];
        weatherObject[forecastDate] = [result.list[i].weather[0].description]
      } else {
        forecastObject[forecastDate].push(main);
        weatherObject[forecastDate].push(result.list[i].weather[0].description);
      }
                  
      chartObject.temp.push(main.temp);
      chartObject.temp_max.push(main.temp_max);
      chartObject.temp_min.push(main.temp_min);
      chartObject.humidity.push(main.humidity);
    }

    
    days = Object.keys(forecastObject);
    let dailyTemp = []
    for(let idays=0; idays < days.length; idays++) {
      for(let ihours=0; ihours < forecastObject[days[idays]].length; ihours++) {
        
        let currentDateValues = forecastObject[days[idays]][ihours];
        // Chequeo si esta key no esta seteada, la inicializo con el objeto que tenga el array en esta posicion
        if (!dailyTemp.hasOwnProperty(days[idays])) {           
          dailyTemp[days[idays]] = currentDateValues;
          continue;
        } 
        else {
          if (dailyTemp[days[idays]].temp_max < currentDateValues.temp_max) {
            dailyTemp[days[idays]].temp_max = currentDateValues.temp_max;
          }
          if (dailyTemp[days[idays]].temp_min > currentDateValues.temp_min) {
            dailyTemp[days[idays]].temp_min = currentDateValues.temp_min;
          }            
        }
      };
      
    }; 
    
    
    let currentForecast = {
      name: result.city.name,
      day1Right: moment().format("DD MMM"),
      day: [  moment().locale("en").format("dddd"),
              moment().day(2).locale("en").format("dddd"),
              moment().day(3).locale("en").format("dddd"),
              moment().day(4).locale("en").format("dddd"),
              moment().day(5).locale("en").format("dddd")
      ],
      tmax: [  Math.round(dailyTemp[days[0]].temp), 
               Math.round(dailyTemp[days[1]].temp_max),
               Math.round(dailyTemp[days[2]].temp_max),
               Math.round(dailyTemp[days[3]].temp_max),
               Math.round(dailyTemp[days[4]].temp_max)
      ],
      tmin: [  Math.round(dailyTemp[days[0]].temp_min),
               Math.round(dailyTemp[days[1]].temp_min),
               Math.round(dailyTemp[days[2]].temp_min),
               Math.round(dailyTemp[days[3]].temp_min),
               Math.round(dailyTemp[days[4]].temp_min)
      ],
      humidity1: result.list[0].main["humidity"],
      pressure1: result.list[0].main["pressure"],
      wind1: result.list[0].wind.speed + " km/h",
      icon: [   weatherObject[days[0]][0],
                weatherObject[days[1]][4],
                weatherObject[days[2]][4],
                weatherObject[days[3]][4], 
                weatherObject[days[4]][0]
    ]
    }  
  
  console.log("analysis")
  console.log(result);

  return(
    <div className="forecast-container">
    <div className="item-day">
      <div className="table-top">
        <p className="float-left ml-2">{currentForecast.day[0]}</p><p className="float-right mr-2">{currentForecast.day1Right}</p>
      </div>
      <div className="table-buttom">
        <div className="row-bottom">
          <p>{currentForecast.name}</p>
        </div> 
        
        <div className="weather-now">
          
        <div className="temp-now float-left">
        {currentForecast.tmax[0]}ºC
        </div>
        <div className="today-icon">
          <FontAwesomeIcon 
            icon={this.changeIcon(currentForecast.icon[0])} 
            size="5x" 
            className="weather-icon ml-5 mt-4" 
          />
        </div>
          <div className="today-others">
            HR: {currentForecast.humidity1} %  <br></br>
            Pressure: {currentForecast.pressure1} hPa <br></br>
            Wind: {currentForecast.wind1} 
          </div>
        </div>
      </div>   
      </div>
    { this.state.auxArr.map(iDay => { 
        return(
          <div className="item-day" key={iDay.toString()}>
            <div className="table-top">
              {currentForecast.day[iDay]}
            </div>
            <div className="table-buttom">
              <div className="boxes-next-item-day">  
                <div>
                  <FontAwesomeIcon 
                    icon={this.changeIcon(currentForecast.icon[iDay])} 
                    size="3x" 
                    className="weather-icon" 
                  />
                </div>
                <div className="temps">
                  <strong>{currentForecast.tmax[iDay]}ºC</strong><br></br>
                  <p className="text-center">{currentForecast.tmin[iDay]}ºC</p>
                </div>
              </div>
            </div>
          </div>
          )
      })
    }
  </div>
  );
}
  

  render() { 
    console.log("ForecastTABLE:");
    console.log(this.props.weather);
   

      return (

        <div className="forecast-container">
          {this.props.weather.map(this.getForecast)}
        </div>
    )};
}


function mapStateToProps({ weather} ) {
  return { weather };
}


export default connect(
  mapStateToProps
)(ForecastTable);