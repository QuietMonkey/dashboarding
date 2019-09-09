import React, { Component } from 'react'

import ChartistGraph from 'react-chartist'

import { emailsSubscriptionChart, completedTasksChart } from "./variables/charts.js"
import './App.css'

class App extends Component {
  render() {

    return (
      <div className="App">
        <div className='cardsChart'>

          <div className='card one'>
            <ChartistGraph
              className="ct-chart"
              data={emailsSubscriptionChart.data}
              type="Bar"
              options={emailsSubscriptionChart.options}
              responsiveOptions={emailsSubscriptionChart.responsiveOptions}
              listener={emailsSubscriptionChart.animation}
            />
          </div>

          <div className='card two'>
            <ChartistGraph
              className="ct-chart"
              data={completedTasksChart.data}
              type="Line"
              options={completedTasksChart.options}
              listener={completedTasksChart.animation}
            />
          </div>

          <div className='card three'>
         
          </div>

        </div>
      </div>
    )
  }
}

export default App
