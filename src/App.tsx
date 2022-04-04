import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Admin from './container/admin/Admin'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Admin />
      </div>
    </BrowserRouter>
  )
}

export default App
