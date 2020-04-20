import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';


const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  width: '700px',
  height: '500px',
  marginLeft: '100px'
};


class Meteorogram extends Component {
  
  constructor(props) {
    super(props);
    

    this.state = {
      data: { 
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','January', 'February', 'March', 'April', 'May', 'June', 'July','January', 'February', 'March', 'April', 'May', 'June', 'July','January', 'February', 'March', 'April', 'May', 'June', 'July','January', 'February', 'March', 'April', 'May', 'June', 'July','January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Min Temp',
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
            data: [20]
          }
        ]
      }
    }
    this.updateData = this.updateData.bind(this);
  }


  updateData() {
    console.log("render");
    console.log(this.props.chartObject);
    
    const datasetsCopy = this.state.data.datasets;
    const dataCopy = datasetsCopy[0].data.slice(0);
   // dataCopy[0] = dataCopy[0] + 10;
    this.props.chartObject.temp.map(t => {datasetsCopy[0].data.push(t)});
    
    //datasetsCopy[0].data.push(this.props.chartObject.temp[i]);

    this.setState({
      data: Object.assign({}, this.state.data, {
          datasets: datasetsCopy
      })
  });
  }
/* 
  componentWillMount() {
  } 
   */

  componentDidUpdate(prevProps) {
    // Uso tipico (no olvides de comparar los props):
    if (this.props.chartObject.temp !== prevProps.chartObject.temp) {
      console.log("updateDATA");
      this.updateData();
    }
  }
  
/*   componentDidMount() {

      this.setState(prevState => ({
        ...prevState,
        someProperty: {
            ...prevState.someProperty,
            someOtherProperty: {
                ...prevState.someProperty.someOtherProperty, 
                anotherProperty: {
                  ...prevState.someProperty.someOtherProperty.anotherProperty,
                  flag: false
                }
            }
        }
    }))
  } */
    //const { datasets } = this.state.data;
    //console.log("canvas");
    //console.log(this.refs.chart.chartInstance);
    //console.log(this.refs.chart.chartInstance.data.datasets[0].data = [0,1]);
    //console.log(this.state.datasets[0].data);
    
   /*  function adddata(){
      myLineChart.data.datasets[0].data[1] = 0;
      myLineChart.data.labels[1] = "Newly Added";
      myLineChart.update();
    }
    
    const option = {
      showLines: true
    };
  
    const myLineChart = Chart.Line(canvas,{
      data:data,
      options:option
  77  }); */
  //}

  
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
  

export default Meteorogram;