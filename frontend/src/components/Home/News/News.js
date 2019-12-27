import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

/*import './News.css';*/

// Hook component
export default class News extends Component {


    render() {
      return (
              
                // CSS Grid
                <div className="container text-white">
                  <div className="item item-1 bg-info">11</div>
                  <div className="item item-2 bg-danger">2</div>
                  <div className="item item-3 bg-primary">3</div>
                </div>

    );
  }
}  