import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import HomePage from './pages/HomePage/HomePage'
import Services from './pages/Services/Services'
import Projects from './pages/Projects/Projects'
import Contacts from './pages/Contacts/Contacts'
import About from './pages/About/About'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/servizi' element={<Services/>}/>
          <Route path='/progetti' element={<Projects/>}/>
          <Route path='/chi-siamo' element={<About/>}/>
          <Route path='/contatti' element={<Contacts/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
