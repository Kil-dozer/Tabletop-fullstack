import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import { Home } from './pages/Home'

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')
const rootElement = document.getElementById('root')

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    {/* <App /> */}
    <Home />
  </BrowserRouter>,
  rootElement
)
