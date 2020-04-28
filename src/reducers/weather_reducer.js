import { SEARCH_WEATHER_SUCCESS } from '../actions/index';


export default (state = [], action) => {
  
  switch (action.type) {
    case SEARCH_WEATHER_SUCCESS:
      return [action.payload.data];
    }
  
  return state;  
}