import React, { Component } from 'react'

import { Doughnut, Line, Bar, HorizontalBar } from 'react-chartjs-2';

import './App.css'

class App extends Component {
  state = {
    dataBar: {
      datasets: [{
        data: [10, 35, 28, 17],
        backgroundColor: ['rgba(95, 133, 248, 1)', 'rgba(95, 133, 248, 1)', 'rgba(29, 145, 25, 1)', 'rgba(240, 98, 209, 1)'],
        borderColor: ['rgb(255,255,255)'],
        label: 'Nombre de Kamehameha par Arc'
      }],
      labels: [
        'Sayens',
        'Frieza',
        'Cell',
        'Buu',
      ]
    },

    dataLine: {
      datasets: [{
          data: [9500, 21750, 65268, 156018],
          backgroundColor: ['rgba(225, 75, 75, 1)', 'rgba(95, 133, 248, 1)', 'rgba(29, 145, 25, 1)', 'rgba(240, 98, 209, 1)'],
          borderColor: ['rgb(255,255,255)'],
          label: 'Puissance moyenne des Kamehamehas par Arc',
          fill: false
      }],
      labels: [
          'Sayens',
          'Frieza',
          'Cell',
          'Buu',
      ]
    },
    
    dataPie: {
      datasets: [{
          data: [135, 72, 37],
          backgroundColor: ['rgba(95, 133, 248, 1)', 'rgba(29, 145, 25, 1)', 'rgba(240, 98, 209, 1)'],
      }],
      labels: [
          'Goku',
          'Gohan',
          'Goten',
      ]
    }    
  }
  render() {

    return (
      <div className="App">
        <div className='cardsChart'>

          <div className='card one'>
            <Bar data={this.state.dataBar}/>
          </div>

          <div className='card two'>
            <Line data={this.state.dataLine}/>
          </div>

          <div className='card three'>
          <Doughnut data={this.state.dataPie}/>
          </div>

        </div>
      </div>
    )
  }
}

export default App
