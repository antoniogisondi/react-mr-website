import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { Button, Navbar, Offcanvas } from 'react-bootstrap'
import { FaHome, FaHammer, FaPhone, FaBars } from 'react-icons/fa';
import './Header.css'

function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const handleShowMenu = () => setShowMenu(true);
  const handleCloseMenu = () => setShowMenu(false);

  return (
    <header className="header position-relative">
      {/* Logo e pulsante menu hamburger */}
      <Navbar bg="dark" variant="dark" expand="lg" className="p-3">
        <Navbar.Brand to="/" className="ms-3 text-white">
          <FaHammer /> Costruzioni
        </Navbar.Brand>
        <Button variant="outline-light" className="ms-auto me-3" onClick={handleShowMenu}>
          <FaBars /> Menu
        </Button>
      </Navbar>

      {/* Menu nascosto (overlay) */}
      <Offcanvas show={showMenu} onHide={handleCloseMenu} placement="end" backdrop>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <nav className="d-flex flex-column align-items-center mt-4">
            <Link to="/" className="nav-link text-dark fs-4 mb-3">Home </Link>
            <Link to="/servizi" className="nav-link text-dark fs-4 mb-3">Servizi</Link>
            <Link to="/progetti" className="nav-link text-dark fs-4 mb-3">Progetti</Link>
            <Link to="/chi-siamo" className="nav-link text-dark fs-4 mb-3">Chi Siamo</Link>
            <Link to="/contatti" className="nav-link text-dark fs-4 mb-3">Contatti</Link>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Icone flottanti a sinistra */}
      {/* <div className="floating-icons position-absolute top-50 start-0 translate-middle-y d-flex flex-column gap-3 ms-3">
        <Link to="/" className="text-white fs-4"><FaHome /></Link>
        <Link to="/contatti" className="text-white fs-4"><FaPhone /></Link>
        <Link to="/servizi" className="text-white fs-4"><FaHammer /></Link>
      </div> */}
    </header>
  )
}

export default Header