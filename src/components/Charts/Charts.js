import React, { Component } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { connect } from 'react-redux';
import moment from 'moment';

import './Charts.css';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  width: '100%',
  float: 'left'
};


class Charts extends Component {
  
  constructor(props) {
    super(props);
    

    this.state = {
      navegation: 0,
      data1: { 
        labels: [],
        datasets: [
          {
            label: 'Temp',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(0,0,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 5,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: []
          },
        ]
      },
      data2: { 
        labels: [],
        datasets: [
          {
            label: 'Temp',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(0,0,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 5,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: []
          },
        ]
      },
      data3: { 
        labels: [],
        datasets: [
          {
            label: 'Temp',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(0,0,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 5,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: []
          },
        ]
      }
    }
  }


  updateData = () => {
   
    let result = this.props.weather[0];
    localStorage.setItem("result", JSON.stringify(result));

    let chartObject = {};
    let attributes = Object.keys(result.list[1].main);

    attributes.map(attr => chartObject[attr] = []);
    chartObject["date"] = [];
    
    for (let i = 0; i < result.list.length; i++) {
      let main = result.list[i].main;
      let forecastDate = `${moment(result.list[i].dt_txt).format('DD/MM')} | ${result.list[i].dt_txt.substring(11, 13)} hs`;
      
      chartObject.date.push(forecastDate);
      chartObject.temp.push(main.temp);
      chartObject.temp_max.push(main.temp_max);
      chartObject.temp_min.push(main.temp_min);
      chartObject.humidity.push(main.humidity);
      chartObject.pressure.push(main.pressure);

    }
      
    const datasetsCopy1 = this.state.data1.datasets;
    const datasetsCopy2 = this.state.data2.datasets;
    const datasetsCopy3 = this.state.data3.datasets;
  
    datasetsCopy1[0].data = chartObject.temp.slice();
    datasetsCopy1[0].label = 'Temperature';
    datasetsCopy1[0].borderColor = 'rgba(192,0,0,1)';
    datasetsCopy1[0].pointBorderColor = 'rgba(192,0,0,0.4)';
    
  
    datasetsCopy2[0].data = chartObject.pressure.slice();
    datasetsCopy2[0].label = 'Pressure';
    datasetsCopy2[0].pointBorderColor = 'rgba(192,192,192,0.4)';
    datasetsCopy2[0].borderColor = 'rgba(192,192,192,1)';
  
  
    datasetsCopy3[0].data = chartObject.humidity.slice();
    datasetsCopy3[0].label = 'Humidity';
    datasetsCopy3[0].borderColor = 'rgba(75,192,192,0.4)';
    datasetsCopy3[0].pointBorderColor = 'rgba(0,0,192,1)';
  
    const label = chartObject.date.slice();

    this.setState({
      data1: Object.assign({}, this.state.data, {
          datasets: datasetsCopy1,
          labels: label
      }),
      data2: Object.assign({}, this.state.data, {
        datasets: datasetsCopy2,
        labels: label
      }),
      data3: Object.assign({}, this.state.data, {
        datasets: datasetsCopy3,
        labels: label
      })
    });
  }
 
  componentDidUpdate(prevProps) {
    // Uso tipico (no olvides de comparar los props):
    if (this.props.weather !== prevProps.weather) {
      this.updateData();
    }
  }


  componentDidMount() {
    this.updateData();
  }
  

  render() {   
      return(
        <div id="charts-wrapper" className="container-fluid">
          <div className="row">
            <div className="col-12 p-5">
              <h2 className="text-center">Charts</h2>
            </div>
            <div className="col-12 col-sm-8 offset-sm-2 col-md-5 offset-md-1 offset-xl-0 col-xl-4 p-5" style={styles}>
              <div className="img-fluid">
                <Line height="300px" data={this.state.data1} />
              </div>
            </div>

            <div className="col-12 col-sm-8 offset-sm-2 col-md-5 offset-md-0 col-xl-4 p-5" style={styles}>
              <div className="img-fluid">
                <Line height="300px" data={this.state.data2} />
              </div>
            </div>

            <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 offset-xl-0 col-xl-4 p-5" style={styles}>
              <div className="img-fluid">
                <Bar height="300px" data={this.state.data3} />
              </div>
            </div>
          </div>
        </div>
      )
    }
};
  

function mapStateToProps({ weather} ) {
  return { weather };
}


export default connect(
  mapStateToProps
)(Charts);