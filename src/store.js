import { createStore } from 'redux';

const initialState = {
  city: [{
  cityCountry: 'Buenos Aires, AR',
  id: 1
  }],
  errorStatus: false
  
}

const reducer = (state = initialState, action) => {
  return state;
}


export default createStore(reducer);