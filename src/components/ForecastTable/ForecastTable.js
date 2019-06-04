import React, { Component } from 'react';
import './ForecastTable.css';

export default class ForecastTable extends Component {
  
  render() {
    return (
    
        
      <div className="container forecast-wrapper">
        <div className="row forecast-days">

          
          <div className="column">
            <div className="row-top big-box">Monday</div>
            <div className="row-bottom">Buenos Aires<br></br><h1>23ºC</h1></div>
          </div>

          <div className="column">
            <div className="row-top">Tuesday</div>
            <div className="row-bottom"><strong>23ºC</strong><br></br>18º</div>
          </div>
          <div className="column">
            <div className="row-top">Wednesday</div>
            <div className="row-bottom"><strong>23ºC</strong><br></br>18º</div>
          </div>
          <div className="column">
            <div className="row-top">Thursday</div>
            <div className="row-bottom"><strong>23ºC</strong><br></br>18º</div>
          </div>
          <div className="column">
            <div className="row-top">Friday</div>
            <div className="row-bottom"><strong>23ºC</strong><br></br>18º</div>
          </div>
          <div className="column">
            <div className="row-top">Saturday</div>
            <div className="row-bottom"><strong>23ºC</strong><br></br>18º</div>
          </div>
          <div className="column">
            <div className="row-top">Sunday</div>
            <div className="row-bottom"><strong>23ºC</strong><br></br>18º</div>
          </div>
          
        </div>
       
      </div>

         
      
    );
  }
}

