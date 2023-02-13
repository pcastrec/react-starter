import React from 'react'
import App from './App'
import ReactDOM from 'react-dom/client'
import { Home } from './components/Home'
import './index.css'
import { Props } from './components/Props'
import { State } from './components/State'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <Props name='Pierre' autre={['pierre', 'jean', 'paul']} />
    <State />
  </React.StrictMode>,
)
