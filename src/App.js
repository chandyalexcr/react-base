import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import routes from './routes'
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          { routes.map(route => <Route {...route} />) }
        </Switch>
      </Router>
    </div>
  )
}

export default App
