import React, { Component } from 'react'
import './App.css'
import BlankPiece from './BlankPiece.js'
import OPiece from './OPiece';
import XPiece from './XPiece';

class Board extends Component {
  render() {
    return (
      <section className="board">
        <div className="row1">
          <div id="vertical-line1">
            <OPiece/>
          </div>
          <div id="vertical-line2">
            <BlankPiece/>
          </div>
          <div id="horizontal-line1">
            <XPiece/>
          </div>
        <div className="row2">
          <div id="horizontal-line2">
            <OPiece/>
          </div>
          <div id="left-corner">
            <BlankPiece/>
          </div>
          <div id="right-corner">
            <BlankPiece/>
          </div>
        <div className="row3">
          <div id="bottom-left-corner">
            <XPiece/>
          </div>
          <div id="bottom-middle">
            <BlankPiece/>
          </div>
          <div id="bottom-right-corner">
            <XPiece/>
          </div>
        </div>
        </div>
        </div>
      </section>
    )
  }
}

export default Board
