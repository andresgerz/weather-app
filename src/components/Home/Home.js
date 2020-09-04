import React from 'react';

import Find from './Find/Find';
import ForecastTable from './ForecastTable/ForecastTable';
import Charts from '../Charts/Charts';
import News from './News/News';


function Home() {
  
      return (  
        <React.Fragment>
                        
          <div id="background-top">
            <Find id="find" />
          </div>
          <div id="background-center">
            <ForecastTable id="table" />
            <Charts />
          </div>
          <div id="background-bottom">
            <News />
          </div>
        </React.Fragment>
    );
}

export default Home;