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
    let chartObject = {};
    let attributes = Object.keys(result.list[1].main);
    attributes.map(attr => chartObject[attr] = []);
    
    let nextDaysData = result.list.filter(date => date.dt_txt.substring(11) === "12:00:00") 
    let todayData = nextDaysData.shift();
    
    
    return(
      <div className="forecast-container" key={42}>
      <div className="item-day">
        <div className="table-top">
          <p className="float-left ml-2">{moment().locale("en").format("dddd")}</p><p className="float-right mr-2">{moment().locale("en").format("DD-MMM")}</p>
        </div>
        <div className="table-buttom">
          <div className="row-bottom">
            <p>{result.city.name}</p>
          </div> 
          
          <div className="weather-now">
            
          <div className="temp-now float-left">
          {todayData.main.temp.toFixed(1)}ºC
          </div>
          <div className="today-icon">
            <FontAwesomeIcon 
              icon={this.changeIcon(todayData.weather[0].description)} 
              size="5x" 
              className="weather-icon ml-5 mt-4" 
            />
          </div>
            <div className="today-others">
              HR: {todayData.main.humidity} %  <br></br>
              Pressure: {todayData.main.pressure} hPa <br></br>
              Wind: {todayData.wind.speed} 
            </div>
          </div>
        </div>   
        </div>
      { nextDaysData.map((day, index) => { 
          return(
            <div className="item-day" key={index}>
              <div className="table-top">
                {moment(new Date()).day(index-1).locale("en").format("dddd")}
              </div>
              <div className="table-buttom">
                <div className="boxes-next-item-day">  
                  <div>
                    <FontAwesomeIcon 
                      icon={this.changeIcon(day.weather[0].description)} 
                      size="3x" 
                      className="weather-icon" 
                    />
                  </div>
                  <div className="temps">
                    <strong>{Math.round(day.main.temp_max)}ºC</strong><br></br>
                    <p className="text-center">{Math.round(day.main.temp_min)}ºC</p>
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