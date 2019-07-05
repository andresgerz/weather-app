import React, { Component } from 'react';

import Find from './Find/Find';
import ForecastTable from './ForecastTable/ForecastTable';
import Maps from './Maps/Maps';
import News from './News/News';

export default class Home extends Component {
  state = {  }
  render() {
    return (
              <div className="App text-white">
                      
                <div id="background-top"> 
                  <Find id="find" />
                </div>
                <div id="background-center">
                  <ForecastTable id="table" />
                  <Maps />
                </div>
                <div id="background-bottom">
                  <News />
                </div>
              </div>
    );
  }
}

