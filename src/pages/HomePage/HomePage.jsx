import React from 'react'
import { Button, Card, Carousel, Container, Row, Col } from 'react-bootstrap';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ProjectsCarousel from '../../components/ProjectsCarousel/ProjectsCarousel';
import './HomePage.css'

function HomePage() {
  const services = [
    {
      titolo: "Costruzione",
      descrizione: "Servizi di costruzione di alta qualità per ogni esigenza.",
    },
    {
      titolo: "Ristrutturazione",
      descrizione: "Progetti di ristrutturazione per abitazioni e uffici.",
    },
    {
      titolo: "Progettazione",
      descrizione: "Progettazione personalizzata per ogni tipo di edificio.",
    },
  ]

  const projects = [
    {

    },
    {

    },

  ]

  return (
    <div className='container-fluid gx-0'>
      <Header/>
        <main>
          {/* Hero Section */}
          <section className="hero-section text-center text-white" style={{ backgroundImage: 'url("/path/to/hero-image.jpg")', backgroundSize: 'cover', padding: '80px 20px' }}>
            <h1>Costruiamo il futuro con competenza</h1>
            <p className="lead">Esperienza e qualità per ogni progetto</p>
            <Button variant="warning" className="mt-3">Richiedi un preventivo</Button>
          </section>

          {/* Sezione Servizi */}
          <section className="services-section py-5 bg-light">
            <Container>
              <h2 className="text-center mb-4">I nostri servizi</h2>
              <Row>
                {services.map((service, index) => (
                  <Col md={4} key={index}>
                    <Card className="mb-3">
                      <Card.Body>
                        <Card.Title>{service.titolo}</Card.Title>
                        <Card.Text>{service.descrizione}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </section>

          {/* Sezione Progetti Recenti */}
          <section className="projects-section py-5">
            <ProjectsCarousel/>
          </section>

          {/* Sezione Testimonianze */}
          <section className="testimonials-section py-5 bg-light">
            <Container>
              <h2 className="text-center mb-4">Cosa dicono i nostri clienti</h2>
              <Carousel>
                <Carousel.Item>
                  <p>"Servizio eccezionale e qualità impeccabile!"</p>
                  <small>- Mario Rossi</small>
                </Carousel.Item>
                <Carousel.Item>
                  <p>"Un team di veri professionisti!"</p>
                  <small>- Lucia Bianchi</small>
                </Carousel.Item>
              </Carousel>
            </Container>
          </section>

          {/* Sezione Chi Siamo */}
          <section className="about-us-section py-5">
            <Container>
              <h2 className="text-center mb-4">Chi siamo</h2>
              <Row>
                <Col md={6}>
                  <p>La nostra azienda è specializzata in costruzioni e ristrutturazioni di alta qualità.</p>
                  <Button variant="warning">Scopri di più</Button>
                </Col>
                <Col md={6}>
                  <img src="/path/to/about-image.jpg" alt="Chi siamo" className="img-fluid" />
                </Col>
              </Row>
            </Container>
          </section>

          {/* Sezione Contatti */}
          <section className="contact-cta-section text-center text-white py-5" style={{ backgroundColor: '#333' }}>
            <Container>
              <h2>Hai un progetto in mente?</h2>
              <p>Contattaci oggi stesso per discutere i dettagli e richiedere un preventivo gratuito.</p>
              <Button variant="light" className="mt-3">Contattaci</Button>
            </Container>
          </section>
        </main>
      <Footer/>
    </div>
  )
}

export default HomePage