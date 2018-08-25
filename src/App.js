import React, { Component } from 'react'
import './App.css'
import BlankPiece from './BlankPiece.js'
import OPiece from './OPiece.js'
import XPiece from './XPiece.js'
import Board from './Board.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Switch>
          <Route exact path="/" component={Board}/>
          <Route path="/" component={BlankPiece}/>
          <Route path="/" component={OPiece}/>
          <Route path="/" component={XPiece}/>
        </Switch>
        </div>
      </Router>
    )
  }
}

export default App
