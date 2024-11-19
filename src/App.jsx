import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import HomePage from './pages/HomePage/HomePage'
import Services from './pages/Services/Services'
import Projects from './pages/Projects/Projects'
import Contacts from './pages/Contacts/Contacts'
import About from './pages/About/About'
import Costruzione from './pages/Services/Costruzione/Costruzione';
import Ristrutturazione from './pages/Services/Ristrutturazione/Ristrutturazione';
import Manutenzione from './pages/Services/Manutenzione/Manutenzione';
import Consulenza from './pages/Services/Consulenza/Consulenza';
import Progettazione from './pages/Services/Progettazione/Progettazione';

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
          <Route path='/servizi/progettazione' element={<Progettazione/>}/>
          <Route path='/servizi/costruzione' element={<Costruzione/>}/>
          <Route path='/servizi/ristrutturazione' element={<Ristrutturazione/>}/>
          <Route path='/servizi/manutenzione' element={<Manutenzione/>}/>
          <Route path='/servizi/consulenza' element={<Consulenza/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
