import React, { Component } from 'react';

// Styles
import './Alerts.css';

export default class Alerts extends Component {
   
  render() {
    return (
              <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Red Alert!</strong> Attention
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
    );
  }
}

