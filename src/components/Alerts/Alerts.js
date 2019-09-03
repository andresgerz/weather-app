import React, { useState, useEffect } from 'react';

// Styles
import './Alerts.css';

export default function Alerts(props) {
   
    return (
            <div>
              <div className="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Red Alert!</strong> Attention
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
    );
  
}

