import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Lorsque le composant est export avec default pas besoin des moustaches
import App from './App'
// On peut importer plusieurs composants du meme fichier
import { Home, HomeTwo } from './components/Home'
import { Props } from './components/Props'
import { State } from './components/State'
import { UseEffect } from './components/UseEffect'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
