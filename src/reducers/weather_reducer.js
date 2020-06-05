import { SEARCH_WEATHER_SUCCESS } from '../actions/index';


const dataStorage = localStorage.getItem('result');

const initialState = [JSON.parse(dataStorage)];

export default (state = initialState, action) => {
  
  switch (action.type) {
    case SEARCH_WEATHER_SUCCESS:
      return [action.payload.data];
    }
  
  return state;  
}