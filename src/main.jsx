import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppContext from './Context/AppContext.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  //browserRouter is used for react router dom
  //appcontext is used to transfer states and value in the useContext
  <BrowserRouter>
    <AppContext>
        <App />
   </AppContext>
  </BrowserRouter>

 
)
