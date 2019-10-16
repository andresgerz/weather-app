import { updateState } from './action'

const updateWord = cityForecast => {
  return {
    type: updateState,
    payload: cityForecast
  }
}

export default upDateWord;