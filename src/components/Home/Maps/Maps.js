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
                  <img width="234.25px" className="rounded" alt="No image" src="https://weather.msfc.nasa.gov/sport/dynamic/goesEast/abi/fullDisk/20190818_222019_sport_goesEast_abi_fullDisk_10p35um.gif" />
                  <img width="234.25px" className="rounded" alt="No image" src="https://weather.msfc.nasa.gov/sport/dynamic/goesEast/abi/fullDisk/20190818_222019_sport_goesEast_abi_fullDisk_00p64um.gif" />
                  <img width="234.25px" className="rounded" alt="No image" src="https://weather.msfc.nasa.gov/sport/dynamic/goesEast/abi/fullDisk/20190818_222019_sport_goesEast_abi_fullDisk_06p95um.gif" />
                  <img className="maps-radars" height="234.25px" className="rounded" alt="No image" src="https://estaticos.smn.gob.ar/vmsr/radar/COMP_ARG_ZH_CMAX_20190817_193000Z.png" />
                </div>                
              </div>
      
    );
  }
}

