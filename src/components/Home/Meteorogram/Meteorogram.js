import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux';
import moment from 'moment';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  width: '700px',
  height: '500px',
  margin: '0px auto'
};


class Meteorogram extends Component {
  
  constructor(props) {
    super(props);
    

    this.state = {
      data: { 
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
    console.log("render");
    console.log(this.props.weather);
   
    let days = [];
    let result = this.props.weather[0];
    let chartObject = {};
    let forecastObject = {};
    let weatherObject = {};

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

    }
    console.log('chartobj');
    console.log(chartObject);
      
    const datasetsCopy = this.state.data.datasets;

    
    datasetsCopy[0].data = chartObject.temp.slice();
    
    const label = chartObject.date.slice();

    this.setState({
      data: Object.assign({}, this.state.data, {
          datasets: datasetsCopy,
          labels: label
      })
    });
  }
 
  componentDidUpdate(prevProps) {
    // Uso tipico (no olvides de comparar los props):
    if (this.props.weather !== prevProps.weather) {
      console.log("updateDATA");
      this.updateData();
    }
  }
  
 
  render() {
   
    return(
      
      <div style={styles}>
        <div>
          <h2>Meteorogram</h2>
          <Line data={this.state.data} />
        </div>
      </div>
    )}
};
  



function mapStateToProps({ weather} ) {
  return { weather };
}


export default connect(
  mapStateToProps
)(Meteorogram);