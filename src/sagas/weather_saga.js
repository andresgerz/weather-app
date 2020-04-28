import { SEARCH_WEATHER_REQUEST, SEARCH_WEATHER_SUCCESS } from '../actions/index';
import { takeLatest, all, call, put } from 'redux-saga/effects';

import axios from 'axios';


const API_KEY = '6200f7fd2611fa3c695ade64a041d5f7';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


function searchCityCountry(city) {
  console.log('searchCityCountry');
  const url = `${ROOT_URL}&q=${city}&units=metric`;
  return axios.get(url);
}

export function* searchCitySaga(action) {

    try {
      
      const response = yield call(searchCityCountry, action.payload.city);
      
      yield put({ type: SEARCH_WEATHER_SUCCESS, payload: response });

    } 
    catch(err) {
      console.log(err);
    }
}

export function* watcherSagas() {
  
  yield all([
    yield takeLatest(SEARCH_WEATHER_REQUEST, searchCitySaga)
  ]);
}