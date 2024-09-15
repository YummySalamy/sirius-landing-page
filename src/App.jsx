
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './views/LandingPage'
import NotFound from './views/NotFound'
import './App.css'

function App() {

  return (
    <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
  )
}

export default App

