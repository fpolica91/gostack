import React from 'react'
import './config/reactotron'
import Routes from './routes/index'
import { Router } from 'react-router-dom'
import history from './services/history'

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  )
}

export default App
