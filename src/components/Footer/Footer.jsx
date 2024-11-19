import React from 'react'
import logo from '/img/logo-mr.png'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer bg-light text-center text-lg-start text-muted">
      <section className="footer-links">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <img src={logo} alt="logo" />
              <p>
              Costruiamo il tuo futuro con passione.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Servizi</h6>
              <p><a href="#" className="text-reset">Angular</a></p>
              <p><a href="#" className="text-reset">React</a></p>
              <p><a href="#" className="text-reset">Vue</a></p>
              <p><a href="#" className="text-reset">Laravel</a></p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Progetti</h6>
              <p><a href="#" className="text-reset">Pricing</a></p>
              <p><a href="#" className="text-reset">Settings</a></p>
              <p><a href="#" className="text-reset">Orders</a></p>
              <p><a href="#" className="text-reset">Help</a></p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contatti</h6>
              <p><i className="fas fa-home me-2"></i>Lavello (PZ), 85024, Italia</p>
              <p><i className="fas fa-envelope me-3"></i>matera.riccardo.77@tiscali.it</p>
              <p><i className="fas fa-phone me-3"></i>+39 339 7796671</p>
            </div>
          </div>
        </div>
      </section>
      
      <div className="bg-color text-center p-4">
        © 2024 Copyright:
        <a className="text-reset fw-bold" href="https://example.com/">YourWebsite.com</a>
      </div>
      
    </footer>

  )
}

export default Footer
