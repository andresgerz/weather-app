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


 export default class ForecastTable extends Component {
  
  constructor(props) {
    super(props);
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
    return iconTable[param]
  }    


    render() { 
      return (  <div className="container forecast-wrapper">
                  <div className="row forecast-days">

                    <div className="column">
                      <div className="row-top big-box"><p className="float-left ml-2">{this.props.cityForecast.day1Left}</p><p className="float-right mr-2">{this.props.cityForecast.day1Right}</p></div>
                      <div className="row-bottom">
                        <p>{this.props.cityForecast.name}</p>
                        <div className="temp-now w-50 float-left">
                        {this.props.cityForecast.tmax1}ºC
                        </div>
                        <div><FontAwesomeIcon icon={this.changeIcon(this.props.cityForecast.icon1)} size="5x" className="weather-icon today-icon ml-5 mt-4" /></div> 
                        <div>
                          HR: {this.props.cityForecast.humidity1} %  <br></br>
                          Pressure: {this.props.cityForecast.pressure1} hPa <br></br>
                          Wind: {this.props.cityForecast.wind1} km/h
                        </div>   
                      </div>
                    </div>

                    <div className="column">
                      <div className="row-top">{this.props.cityForecast.day2}</div>
                      <div className="row-bottom-next-days">
                        <div>
                          <FontAwesomeIcon icon={this.changeIcon(this.props.cityForecast.icon2)} size="3x" className="weather-icon" />
                        </div>
                        <div>
                          <strong>{this.props.cityForecast.tmax2}ºC</strong><br></br>{this.props.cityForecast.tmin2}ºC
                        </div>
                      </div>
                    </div>

                    <div className="column">
                      <div className="row-top">{this.props.cityForecast.day3}</div>
                      <div className="row-bottom-next-days">
                        <div>
                          <FontAwesomeIcon icon={this.changeIcon(this.props.cityForecast.icon3)} size="3x" className="weather-icon" />  
                        </div>
                        <div>
                          <strong>{this.props.cityForecast.tmax3}ºC</strong><br></br>{this.props.cityForecast.tmin3}ºC</div>
                        </div>
                    </div>

                    <div className="column">
                      <div className="row-top">{this.props.cityForecast.day4}</div>
                      <div className="row-bottom-next-days">
                        <div>
                          <FontAwesomeIcon icon={this.changeIcon(this.props.cityForecast.icon4)} size="3x" className="weather-icon" />
                        </div>
                        <div>
                          <strong>{this.props.cityForecast.tmax4}ºC</strong><br></br>{this.props.cityForecast.tmin4}ºC</div>
                        </div>            
                    </div>

                    <div className="column">
                      <div className="row-top">{this.props.cityForecast.day5}</div>
                      <div className="row-bottom-next-days">
                        <div>
                          <FontAwesomeIcon icon={this.changeIcon(this.props.cityForecast.icon5)} size="3x" className="weather-icon" />
                        </div>
                        <div>
                          <strong>{this.props.cityForecast.tmax5}ºC</strong><br></br>
                          {this.props.cityForecast.tmin5}ºC
                        </div>              
                      </div>
                    </div>

                  </div>
                </div>   
  )};
}

