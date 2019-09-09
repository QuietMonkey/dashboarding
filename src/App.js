import React, { Component } from 'react'

import { Doughnut, Line, Bar, HorizontalBar } from 'react-chartjs-2'
import Board from "react-trello"

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
    },
    
    dataTasks: {
      lanes: [
        {
          id: 'lane1',
          title: 'To Do',
          cards: [
            {id: 'Card1', title: 'Rassembler les 7 boules de cristal', description: 'Pour rescussiter nos amis', label: '125 épisodes'},
            {id: 'Card2', title: "S'entrainer encore", description: 'Pour surpasser Kakarot', label: '8 épisodes'},
            {id: 'Card7', title: 'Trouver la boule de Cristal n°6', description: 'Pour rescussiter nos amis', label: '12 épisodes'},
            {id: 'Card8', title: 'Trouver la boule de Cristal n°7', description: 'Pour rescussiter nos amis', label: '12 épisodes'}
          ]
        },
        {
          id: 'lane2',
          title: 'In Progress',
          cards: [
            {id: 'Card3', title: 'Trouver la boule de Cristal n°1', description: 'Pour rescussiter nos amis', label: '12 épisodes'},
            {id: 'Card4', title: 'Trouver la boule de Cristal n°2', description: 'Pour rescussiter nos amis', label: '12 épisodes'},
            {id: 'Card5', title: 'Trouver la boule de Cristal n°3', description: 'Pour rescussiter nos amis', label: '12 épisodes'},
            {id: 'Card6', title: 'Trouver la boule de Cristal n°5', description: 'Pour rescussiter nos amis', label: '12 épisodes'},
          ]
        },
        {
          id: 'lane3',
          title: 'Completed',
          cards: [
            {id: 'Card9', title: 'Trouver la boule de Cristal n°4', description: 'Pour rescussiter nos amis', label: '12 épisodes'}
          ]
        },
        {
          id: 'lane4',
          title: 'Repeat',
          cards: [
            {id: 'Card10', title: 'Rescussiter Krilin', description: "Comme d'hab", label: 'tout les 130 épisodes', draggable: false}
          ]
        }
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

        <Board data={this.state.dataTasks} draggable />

        
      </div>
    )
  }
}

export default App
