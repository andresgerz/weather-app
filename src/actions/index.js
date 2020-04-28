export const SEARCH_WEATHER_REQUEST = 'SEARCH_WEATHER_REQUEST',
             SEARCH_WEATHER_SUCCESS = 'SEARCH_WEATHER_SUCCESS';



export function searchCityCountry(city) {
  
  return {
    type: SEARCH_WEATHER_REQUEST,
    payload: { city }
  }
} 