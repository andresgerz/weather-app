import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

import Find from './Find/Find';
import ForecastTable from './ForecastTable/ForecastTable';
import Maps from './Maps/Maps';
import News from './News/News';


export default class Home extends Component {
  
  constructor(props) {
  super(props);
 
    
    this.state = {
      cityCountry: "Buenos Aires, AR",
      errorStatus: false, 
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
          let forecastObject = {};
          let weatherObject = {};
          console.log(result);

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
          
          
          let currentForecast = {
            name: this.state.cityCountry,
            day1Right: moment().format("DD MMM"),
            day1Left: moment().locale("en").format("dddd"),
            tmax1: Math.round(dailyTemp[days[0]].temp),
            tmin1: Math.round(dailyTemp[days[0]].temp_min),
            humidity1: result.data.list[0].main["humidity"],
            pressure1: result.data.list[0].main["pressure"],
            wind1: result.data.list[0].wind["speed"] + " km/h",
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
          }  
        
        console.log(forecastObject);
        console.log(dailyTemp);
        console.log(currentForecast);


        this.setState({
          cityForecast: currentForecast
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
      return (  <div>
                        
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
                    <Maps />
                  </div>
                  <div id="background-bottom">
                    <News />
                  </div>
                </div>
    );
  }
}