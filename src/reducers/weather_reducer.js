import axios from 'axios';
import { SEARCH_WEATHER_SUCCESS } from '../actions/index';


let dataStorage = localStorage.getItem('result');
let initialState;

if (dataStorage === 'undefined' || dataStorage === null) {
  
  initialState = [
    {
      "list": [
          {
          "dt": 1594285200,
          "main": {
          "temp": 0,
          "temp_min": 0,
          "temp_max": 0,
          "pressure": 0,
          "humidity": 0
          },
          "weather": [
          {
          "id": 800,
          "description": ""
          }
          ],
          "wind": {
          "speed": 0.45,
          "deg": 171
          },
          "dt_txt": "2020-07-09 09:00:00"
          },
          {
          "dt": 1594296000,
          "main": {
          "temp": 0,
          "feels_like": 0,
          "temp_min": 0,
          "temp_max": 0,
          "pressure": 0,
          "humidity": 0
          },
          "weather": [
          {
          "id": 800,
          "main": "Clear",
          "description": "",
          "icon": "01d"
          }
          ],
          "wind": {
          "speed": 0,
          "deg": 96
          },
          "dt_txt": "2020-07-09 12:00:00"
          }
      ],
      "city": {
        "id": 3429577,
        "name": "Ciudad",
        "country": "AR",
      }
    }
  ]

} else {
  initialState = [JSON.parse(dataStorage)];
}

console.log("initialState");
console.log(initialState);

export default (state = initialState, action) => {
  
  switch (action.type) {
    case SEARCH_WEATHER_SUCCESS:
      return [action.payload.data];
    }
  
  return state;  
}