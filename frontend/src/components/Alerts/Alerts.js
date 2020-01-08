import React, { useState, useEffect } from 'react';

// Styles
import './Alerts.css';


export default function Alerts(props) {
   
    return (
            <div className="alert-wrapper">
              <div className="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Alert!</strong> The provinces: ...
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <img 
                width="300px"
                src="./src/images/radar.gif" 
                alt="radar don't work" /> 
            </div>
    );
}

