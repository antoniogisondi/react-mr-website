import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { Button, Navbar, Offcanvas } from 'react-bootstrap'
import { FaHome, FaHammer, FaPhone, FaBars, FaEnvelope } from 'react-icons/fa';
import logo from '/img/logo-mr.png'
import './Header.css'

function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const handleShowMenu = () => setShowMenu(true);
  const handleCloseMenu = () => setShowMenu(false);

  return (
    <header className="header position-relative">
      {/* Logo e pulsante menu hamburger */}
      <Navbar className="bg-color p-3">
        <Navbar.Brand to="/" className="navbar-width text-white">
          <img src={logo} alt="logo-mr" />
        </Navbar.Brand>
        <div className="middle-content text-center">
          <p className="slogan text-dark mb-1">Costruiamo il tuo futuro con passione</p>
          <div className="contact-info text-dark">
            <span><FaPhone /> +39 123 456 7890</span> | <span><FaEnvelope /> info@impresaedile.com</span>
          </div>
        </div>
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
    </header>
  )
}

export default Header