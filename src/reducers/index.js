import { combineReducers } from 'redux';
import Weather_Reducer from './weather_reducer';


const rootReducer = combineReducers({
  weather: Weather_Reducer
});

export default rootReducer;