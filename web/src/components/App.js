import React, { Component } from 'react'
import Programs from './programs'
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Programs} />
        </div>
      </Router>
    )
  }
}


export default App
