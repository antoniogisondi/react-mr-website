import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './ServicesCarousel.css'
import img1 from '/img/progettazione-edile.jpg'
import img2 from '/img/costruzione-edile.jpg'
import img3 from '/img/ristrutturazione-edile.jpg'
import img4 from '/img/manutenzione-edile.jpg'
import img5 from '/img/consulenza-edile.jpg'

function ServicesCarousel() {
    const [selectedIndex, setSelectedIndex] = useState(2)
    const services = [
        { id: 0, title: 'Progettazione', description: 'Descrizione del servizio di progettazione', img:img1},
        { id: 1, title: 'Costruzione', description: 'Descrizione del servizio di costruzione', img:img2},
        { id: 2, title: 'Ristrutturazione', description: 'Descrizione del servizio di ristrutturazione', img:img3},
        { id: 3, title: 'Manutenzione', description: 'Descrizione del servizio di manutenzione', img:img4},
        { id: 4, title: 'Manutenzione', description: 'Descrizione del servizio di manutenzione', img:img5},
    ]

    const selectCard = (index) =>{
        setSelectedIndex(index)
    }
    return (
        <div className="fan-carousel-container">
            <div className="fan-carousel">
                {services.map((service, index) => {
                const position = index - selectedIndex;
                const rotation = position * 15; // Rotazione a ventaglio
                const translation = position * 150; // Distanza laterale
        
                return (
                    <div
                    key={service.id}
                    className={`card ${index === selectedIndex ? 'selected' : ''}`}
                    style={{
                        transform: `translateX(${translation}px) rotate(${rotation}deg) scale(${
                        index === selectedIndex ? 1.1 : 0.9
                        })`,
                        zIndex: index === selectedIndex ? 10 : 10 - Math.abs(position),
                        opacity: index === selectedIndex ? 1 : 0.6,
                        backgroundImage: `url(${service.img})`,
                    }}
                    onClick={() => selectCard(index)}
                    >
                    <Link>{service.title}</Link>
                    <p>{service.description}</p>
                    </div>
                );
                })}
            </div>
        </div>
    )
}

export default ServicesCarousel