import React, { Component } from 'react';

import './Maps.css';
var moment = require('moment');

const axios = require('axios');

export default class Maps extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      timer: ""
    }
  }
  
  dateImages() {
      
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
  
  
  render() {
    this.dateImages();
    console.log(this.state.timer);
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
}

