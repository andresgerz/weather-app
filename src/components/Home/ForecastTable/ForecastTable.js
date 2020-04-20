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

    this.state = {
      auxArr: [ 1, 2, 3, 4 ]
    }
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
    return (
      <div className="forecast-container">
        <div className="item-day">
          <div className="table-top">
            <p className="float-left ml-2">{this.props.cityForecast.day[0]}</p><p className="float-right mr-2">{this.props.cityForecast.day1Right}</p>
          </div>
          <div className="table-buttom">
            <div className="row-bottom">
              <p>{this.props.cityForecast.name}</p>
            <div> 
            <div className="temp-now float-left">
            {this.props.cityForecast.tmax[0]}ºC
            </div>
            <div className="icon-now">
              <FontAwesomeIcon 
                icon={this.changeIcon(this.props.cityForecast.icon[0])} 
                size="5x" 
                className="weather-icon today-icon ml-5 mt-4" 
              />
            </div>
          </div>   
          <div className="data-now">
            <p>HR: {this.props.cityForecast.humidity1} %  <br></br>
            Pressure: {this.props.cityForecast.pressure1} hPa <br></br>
            Wind: {this.props.cityForecast.wind1} 
            <p>PP: {this.props.cityForecast.pp} mm</p>
            </p>
          </div>   
          </div>
          </div>
        </div>
        { this.state.auxArr.map(iDay => { 
            return(
              <div className="item-day">
                <div className="table-top">
                  {this.props.cityForecast.day[iDay]}
                </div>
                <div className="table-buttom">
                  <div className="boxes-next-item-day">  
                    <div>
                      <FontAwesomeIcon 
                        icon={this.changeIcon(this.props.cityForecast.icon[iDay])} 
                        size="3x" 
                        className="weather-icon" 
                      />
                    </div>
                    <div className="temps">
                      <strong>{this.props.cityForecast.tmax[iDay]}ºC</strong><br></br>
                      <p className="text-center">{this.props.cityForecast.tmin[iDay]}ºC</p>
                    </div>
                  </div>
                </div>
              </div>
              )
          })
        }
      </div>
  )};
}