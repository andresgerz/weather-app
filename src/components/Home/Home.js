import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

import Find from './Find/Find';
import ForecastTable from './ForecastTable/ForecastTable';
import Meteorogram from './Meteorogram/Meteorogram';
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
    

    if(this.state.cityCountry === "Resistencia, AR") {

      axios.get("http://localhost:4000/api/today")
        .then( result => {
          let currentForecast = {
            name: this.state.cityCountry,
            day1Right: moment().format("DD MMM"),
            day1Left: moment().locale("en").format("dddd"),
            tmax1: result.data.result[0][3],
            humidity1: result.data.result[0][4]/result.data.result[0][3],
            pressure1: result.data.result[0][9],
            wind1: result.data.result[0][8] + " km/h " + result.data.result[0][7],
            pp: result.data.result[0][12],
            day2: moment().day(2).locale("en").format("dddd"),
            day3: moment().day(3).locale("en").format("dddd"),
            day4: moment().day(4).locale("en").format("dddd"),
            day5: moment().day(5).locale("en").format("dddd")

          }  
        console.log(result.data.result[0][3]);
        this.setState({
          cityForecast: currentForecast
        });

        })
        .catch(err => {
          console.log(err);
        })
    }



    if(this.state.cityCountry != null && this.state.cityCountry != "Resistencia, AR") {

      axios.get("https://api.openweathermap.org/data/2.5/forecast?q=" + this.state.cityCountry + "&units=metric&appid=6200f7fd2611fa3c695ade64a041d5f7")
      .then(
        
        result=>{
        
          this.setState({
            errorStatus: false
          });


          let days = [];
          let chartObject = {};
          let forecastObject = {};
          let weatherObject = {};

          let attributes = Object.keys(result.data.list[1].main);
          attributes.map(attr => chartObject[attr] = []);


          for (let i = 0; i < result.data.list.length; i++) {
            let main = result.data.list[i].main;
            let forecastDate = moment(result.data.list[i].dt_txt).format('YYYY-MM-DD');
            
            if (!forecastObject.hasOwnProperty(forecastDate)) {
              forecastObject[forecastDate] = [main];
              weatherObject[forecastDate] = [result.data.list[i].weather[0].description]
              
            } else {
              forecastObject[forecastDate].push(main);
              weatherObject[forecastDate].push(result.data.list[i].weather[0].description);
              
            }
                        
            chartObject.temp.push(main.temp);
            chartObject.temp_max.push(main.temp_max);
            chartObject.temp_min.push(main.temp_min);
            chartObject.humidity.push(main.humidity);

          }
          //chartObject = this.state.chartObject.temp.push(result.data.list[i].main.temp);
          console.log("forecasDate");
          console.log(chartObject);
          
          days = Object.keys(forecastObject);
          
          for(let idays=0; idays < days.length; idays++) {
            for(let ihours=0; ihours < forecastObject[days[idays]].length; ihours++) {
              
              let currentDateValues = forecastObject[days[idays]][ihours];
              // Chequeo si esta key no esta seteada, la inicializo con el objeto que tenga el array en esta posicion
              if (!this.state.dailyTemp.hasOwnProperty(days[idays])) {           
                this.state.dailyTemp[days[idays]] = currentDateValues;
                continue;
              } 
              else {
                if (this.state.dailyTemp[days[idays]].temp_max < currentDateValues.temp_max) {
                  this.state.dailyTemp[days[idays]].temp_max = currentDateValues.temp_max;
                }
                if (this.state.dailyTemp[days[idays]].temp_min > currentDateValues.temp_min) {
                  this.state.dailyTemp[days[idays]].temp_min = currentDateValues.temp_min;
                }            
              }
            };
            
          }; 
          
          
          let currentForecast = {
            name: this.state.cityCountry,
            day1Right: moment().format("DD MMM"),
            day: [  moment().locale("en").format("dddd"),
                    moment().day(2).locale("en").format("dddd"),
                    moment().day(3).locale("en").format("dddd"),
                    moment().day(4).locale("en").format("dddd"),
                    moment().day(5).locale("en").format("dddd")
            ],
            tmax: [  Math.round(this.state.dailyTemp[days[0]].temp), 
                     Math.round(this.state.dailyTemp[days[1]].temp_max),
                     Math.round(this.state.dailyTemp[days[2]].temp_max),
                     Math.round(this.state.dailyTemp[days[3]].temp_max),
                     Math.round(this.state.dailyTemp[days[4]].temp_max)
            ],
            tmin: [  Math.round(this.state.dailyTemp[days[0]].temp_min),
                     Math.round(this.state.dailyTemp[days[1]].temp_min),
                     Math.round(this.state.dailyTemp[days[2]].temp_min),
                     Math.round(this.state.dailyTemp[days[3]].temp_min),
                     Math.round(this.state.dailyTemp[days[4]].temp_min)
            ],
            humidity1: result.data.list[0].main["humidity"],
            pressure1: result.data.list[0].main["pressure"],
            wind1: result.data.list[0].wind["speed"] + " km/h",
            icon: [   weatherObject[days[0]][0],
                      weatherObject[days[1]][4],
                      weatherObject[days[2]][4],
                      weatherObject[days[3]][4], 
                      weatherObject[days[4]][0]
          ]
          }  
        
        console.log(forecastObject);
        console.log("analysis")
        //console.log(this.state.dailyTemp);
        console.log(currentForecast);
      

        this.setState({
          cityForecast: currentForecast,
          forecastObject: forecastObject,
          chartObject: chartObject
        });
      }).catch(error => {
        
        console.log(error);
        this.setState({
          errorStatus: true
        })      
      })
    }
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
      return (  <React.Fragment>
                        
                  <div id="background-top">
                    <Find id="find" 
                      onCityChange={this.onCityChange} 
                      cityCountry={this.state.cityCountry}
                      cityForecast={this.state.cityForecast}
                      errorStatus={this.state.errorStatus}
                      />

                  </div>
                  <div id="background-center">
                    <ForecastTable id="table" 
                      cityCountry={this.state.cityCountry} 
                      cityForecast={this.state.cityForecast} 
                      />
                    <Meteorogram chartObject={this.state.chartObject} />
                  </div>
                  <div id="background-bottom">
                    <News />
                  </div>
                </React.Fragment>
    );
  }
}