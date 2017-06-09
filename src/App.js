import React, { Component } from 'react'
import './App.css'
import { voteAngular, voteReact, voteVue } from './actions'

class App extends Component {
  constructor(props) {
    super(props)
    this.store = this.props.store
  }

  handleVoteAngular = () => {
    this.store.dispatch(voteAngular())
  }

  handleVoteReact = () => {
    this.store.dispatch(voteReact())
  }

  handleVoteVue = () => {
    this.store.dispatch(voteVue())
  }

  render() {
    return (
      <div>
        <div className='jumbotron center-text'>
          <h2>What is your favorite front-end framework?</h2>
          <h4>Click on the logos below to vote!</h4>
          <br />
          <div className="row center-text left-move">
            <div className="col-xs-2 center-text">
              <img src="angular.svg" height="96" width="96" alt="angular" onClick={this.handleVoteAngular} />
            </div>
            <div className="col-xs-2 center-text"></div>
            <div className="col-xs-2 center-text">
              <img src="react.svg" height="96" width="96" alt="react" onClick={this.handleVoteReact} />
            </div>
            <div className="col-xs-2 center-text"></div>
            <div className="col-xs-2 center-text">
              <img src="vue.svg" height="90" width="96" alt="vue" onClick={this.handleVoteVue} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
