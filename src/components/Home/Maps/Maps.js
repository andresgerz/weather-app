import React, { useState, useEffect } from 'react';

import './Maps.css';
var moment = require('moment');

export default function Maps(props) {
  
  const [timer, setTimer] = useState("")

  useEffect(() =>{    
    function dateImages() {
        
      let timer = 0;
      // start timer
      let todayDate = moment().format("YYYYMMDD");
      this.todayTime = setInterval(
        () => { 
          let timer = moment().format("HHmmss") 


          this.setState = ({
            timer: timer
          });

        }, 1000
      )
      //console.log(todayDate + "_");
    }
  });
  
    return (  
              <div className="maps-wrapper">
                <h2 className="maps-title">Maps</h2>
                
                <div className="maps">
                  <img width="234.25px" className="rounded" alt="No image" src="src/images/ch2.gif" />
                  <img width="234.25px" className="rounded" alt="No image" src="src/images/ch9.gif" />
                  <img width="234.25px" className="rounded" alt="No image" src="src/images/ch13.gif" />
                  <img className="maps-radars" height="234.25px" className="rounded" alt="No image" src="src/images/radar.png" />
                </div>                
              </div>
      
    );
  
}

