import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import MyWork from './views/my-work'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={MyWork} path="/my-work" />
        <Route exact component={Home} path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
