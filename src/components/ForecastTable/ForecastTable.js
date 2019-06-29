import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

import './ForecastTable.css';
import { isArray } from 'util';

export default class ForecastTable extends Component {
  
  constructor() {
    super();

    this.state = {
      name: [],
      temp1: "",
      tmin1: "",
      tmax2: "",
      tmin2: "",
      tmax3: "",
      tmin3: "",
      tmax4: "",
      tmax4: "",
      tmin5: "",
      tmax5: ""
     
    };

    axios.get("https://api.openweathermap.org/data/2.5/forecast?id=3433955&units=metric&appid=6200f7fd2611fa3c695ade64a041d5f7")
    .then(
      
      result=>{
      
        let days = [];
        let forecastObject = {};
    

        for (let i = 0; i < result.data.list.length; i++) {
          let forecastDate = moment(result.data.list[i].dt_txt).format('YYYY-MM-DD');

          if (!forecastObject.hasOwnProperty(forecastDate)) {
            forecastObject[forecastDate] = [result.data.list[i].main];
           } else {
            forecastObject[forecastDate].push(result.data.list[i].main);
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
        console.log(forecastObject)
        console.log(dailyTemp);

      this.setState({

        name: result.data.city.name,
        tmin1: Math.round(dailyTemp[days[0]].temp_min),
        tmax1: Math.round(dailyTemp[days[0]].temp_max),
        tmin2: Math.round(dailyTemp[days[1]].temp_min),
        tmax2: Math.round(dailyTemp[days[1]].temp_max),
        tmin3: Math.round(dailyTemp[days[2]].temp_min),
        tmax3: Math.round(dailyTemp[days[2]].temp_max),
        tmin4: Math.round(dailyTemp[days[3]].temp_min),
        tmax4: Math.round(dailyTemp[days[3]].temp_max),
        tmin5: Math.round(dailyTemp[days[4]].temp_min),
        tmax5: Math.round(dailyTemp[days[4]].temp_max)
       

      });
      
    }).catch(error => {
      console.log(error);
    })
  }


  render() {
    return (
      
      <div className="container forecast-wrapper">
        <div className="row forecast-days">

          <div className="column">
            <div className="row-top big-box">Today</div>
            <div className="row-bottom">
              <p>{this.state.name}</p>
              <h1>{this.state.tmax1} ºC</h1>
              <p>{this.state.tmin1} ºC</p>
            </div>
          </div>

          <div className="column">
            <div className="row-top">Day 2</div>
            <div className="row-bottom-next-days"><strong>{this.state.tmax2} ºC</strong><br></br>{this.state.tmin2} Cº</div>
          </div>
          <div className="column">
            <div className="row-top">Day 3</div>
            <div className="row-bottom-next-days"><strong>{this.state.tmax3} ºC</strong><br></br>{this.state.tmin3} Cº</div>
          </div>
          <div className="column">
            <div className="row-top">Day 4</div>
            <div className="row-bottom-next-days"><strong>{this.state.tmax4} ºC</strong><br></br>{this.state.tmin4} Cº</div>
          </div>
          <div className="column">
            <div className="row-top">Day 5</div>
            <div className="row-bottom-next-days"><strong>{this.state.tmax5} ºC</strong><br></br>{this.state.tmin5} Cº</div>
          </div>
        
        </div>
      </div>   
    );
  }
}

