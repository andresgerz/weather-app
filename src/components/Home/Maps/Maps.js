import React, { Component } from 'react';

import './Maps.css';
var moment = require('moment');

export default class Maps extends Component {
  
  constructor(props) {
    super(props);

  }
  

  render() {
    return (  <div className="maps-wrapper">
                <h2 className="maps-title">Maps</h2>
                
                <div className="maps">
                  <img width="234.25px" className="rounded" alt="No image" src="src/images/ch2.gif" />
                  <img width="234.25px" className="rounded" alt="No image" src="src/images/ch9.gif" />
                  <img width="234.25px" className="rounded" alt="No image" src="src/images/ch13.gif" />
                  <img className="maps-radars" height="234.25px" className="rounded" alt="No image" src="" />
                </div>                
              </div>
    );
    }
}

