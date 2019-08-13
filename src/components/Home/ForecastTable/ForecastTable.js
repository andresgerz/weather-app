import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

import './ForecastTable.css';
//import Find from './Find/Find';

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

)





export default class ForecastTable extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      name: [],
      day1: "",
      temp1: "",
      icon1: "",
      tmin1: "",
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
     
    };


    // this.onChangeCityName = this.onChangeCityName.bind(this);
  }
  
  getForecast() {
    console.log(this.props.cityID);
    if(this.props.cityID != null) {

      axios.get("https://api.openweathermap.org/data/2.5/forecast?id=" + this.props.cityID + "&units=metric&appid=6200f7fd2611fa3c695ade64a041d5f7")
      .then(
        
        result=>{
        
          let days = [];
          let forecastObject = {};
          let weatherObject = {};


          for (let i = 0; i < result.data.list.length; i++) {
            let forecastDate = moment(result.data.list[i].dt_txt).format('YYYY-MM-DD');
            
            if (!forecastObject.hasOwnProperty(forecastDate)) {
              forecastObject[forecastDate] = [result.data.list[i].main];
              weatherObject[forecastDate] = [result.data.list[i].weather[0].description]

            } else {
              forecastObject[forecastDate].push(result.data.list[i].main);
              weatherObject[forecastDate].push(result.data.list[i].weather[0].description);

            } 
          }


          let dailyTemp = {};
          days = Object.keys(forecastObject);

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
      

          console.log(weatherObject[days[2]][0]);
        
          console.log(result);
          console.log(result.data.list[0].weather[0].description);
          console.log(weatherObject);
          console.log(forecastObject);
          console.log(dailyTemp);
          


        this.setState({

          name: result.data.city.name,
          day1Right: moment().format("DD MMM"),
          day1Left: moment().locale("en").format("dddd"),
          tmax1: Math.round(dailyTemp[days[0]].temp),
          tmin1: Math.round(dailyTemp[days[0]].temp_min),
          icon1: weatherObject[days[0]][0],
          day2: moment().day(2).locale("en").format("dddd"),
          tmax2: Math.round(dailyTemp[days[1]].temp_max),
          tmin2: Math.round(dailyTemp[days[1]].temp_min),
          icon2: weatherObject[days[1]][4],
          day3: moment().day(3).locale("en").format("dddd"),
          tmax3: Math.round(dailyTemp[days[2]].temp_max),
          tmin3: Math.round(dailyTemp[days[2]].temp_min),
          icon3: weatherObject[days[2]][4],
          day4: moment().day(4).locale("en").format("dddd"),
          tmax4: Math.round(dailyTemp[days[3]].temp_max),
          tmin4: Math.round(dailyTemp[days[3]].temp_min),
          icon4: weatherObject[days[3]][4],
          day5: moment().day(5).locale("en").format("dddd"),
          tmax5: Math.round(dailyTemp[days[4]].temp_max),
          tmin5: Math.round(dailyTemp[days[4]].temp_min),
          icon5: weatherObject[days[4]][0]
        });
        
      }).catch(error => {
        console.log(error);
      })

    }
  }

  componentDidMount() {
    this.getForecast();
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps.cityID !== this.props.cityID) {
      this.getForecast();
    }
  }


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
      "10": faPooStorm

    }    
    return iconTable[param]
  }    


  


  render() {
    console.log(this.state.icon5);
    
    return (
      
      <div className="container forecast-wrapper">
        <div className="row forecast-days">

          <div className="column">
            <div className="row-top big-box"><p className="float-left ml-2">{this.state.day1Left}</p><p className="float-right mr-2">{this.state.day1Right}</p></div>
            <div className="row-bottom">
              <p>{this.state.name}</p>
               
              <div className="temp-now w-50 float-left">{this.state.tmax1}ºC</div>
                    
              <div><FontAwesomeIcon icon={this.changeIcon(this.state.icon1)} size="5x" className="weather-icon today-icon ml-5 mt-4" /></div> 
             
            </div>
          </div>

          <div className="column">
            <div className="row-top">{this.state.day2}</div>
            <div className="row-bottom-next-days">
              <div>
                <FontAwesomeIcon icon={this.changeIcon(this.state.icon2)} size="3x" className="weather-icon" />
              </div>
              <div>
                <strong>{this.state.tmax2}ºC</strong><br></br>{this.state.tmin2}ºC
              </div>
                          

            </div>
          </div>
          <div className="column">
            <div className="row-top">{this.state.day3}</div>
            <div className="row-bottom-next-days">
              <div>
                <FontAwesomeIcon icon={this.changeIcon(this.state.icon3)} size="3x" className="weather-icon" />  
              </div>
              <div>
                <strong>{this.state.tmax3}ºC</strong><br></br>{this.state.tmin3}ºC</div>
              </div>
              
              

          </div>
          <div className="column">
            <div className="row-top">{this.state.day4}</div>

            <div className="row-bottom-next-days">
              <div>
                <FontAwesomeIcon icon={this.changeIcon(this.state.icon4)} size="3x" className="weather-icon" />
              </div>
              <div>
                <strong>{this.state.tmax4}ºC</strong><br></br>{this.state.tmin4}ºC</div>
              </div>            

          </div>
          <div className="column">
            <div className="row-top">{this.state.day5}</div>
            <div className="row-bottom-next-days">
              <div>
                <FontAwesomeIcon icon={this.changeIcon(this.state.icon5)} size="3x" className="weather-icon" />
              </div>
              <div>
                <strong>{this.state.tmax5}ºC</strong><br></br>
                {this.state.tmin5}ºC
              </div>              
            </div>

          </div>
        
        </div>
      </div>   
    );
  }
}

