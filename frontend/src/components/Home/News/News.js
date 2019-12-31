import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


import './News.css';

// Hook component
export default class News extends Component {

  
  today() {
    return String(new Date().getDate() + "." + new Date().getMonth());
  };


    render() {
      return (
              
                // CSS Grid
                <div className="news-wrapper">
                  <div className="date">{this.today()}</div>
                  <div className="news">
                    <h5>New 1</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis tincidunt id aliquet risus feugiat in ante metus. Consectetur adipiscing elit duis tristique. Dui vivamus arcu felis bibendum ut tristique. Sed vulputate mi sit amet mauris.</p>
                  </div>
                  <div className="date">{this.today()}</div>
                  <div className="news">
                    <h5>New 2</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis tincidunt id aliquet risus feugiat in ante metus. Consectetur adipiscing elit duis tristique. Dui vivamus arcu felis bibendum ut tristique. Sed vulputate mi sit amet mauris.</p>
                  </div>
                  <div className="date">{this.today()}</div>
                  <div className="news">
                    <h5>New 3</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis tincidunt id aliquet risus feugiat in ante metus. Consectetur adipiscing elit duis tristique. Dui vivamus arcu felis bibendum ut tristique. Sed vulputate mi sit amet mauris.</p>
                  </div>
                </div>

    );
  }
}  