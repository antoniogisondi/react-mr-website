import React from 'react';
import Slider from 'react-slick';
import img1 from '/img/logo-mr.png';
import './ProjectsCarousel.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function ProjectsCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        fade: true,
    };

    const slidesData = [
        {
            id: 1,
            image: img1,
            title: 'Progetto 1',
            description: 'Descrizione del progetto 1. Un lavoro di alta qualità.',
            cta: 'Scopri di più',
            link: '/progetti/1'
        },
        {
            id: 2,
            image: img1,
            title: 'Progetto 2',
            description: 'Descrizione del progetto 2. Un altro progetto esemplare.',
            cta: 'Scopri di più',
            link: '/progetti/2'
        },
    ];

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {slidesData.map(slide => (
                    <div key={slide.id} className="slide">
                        <div className="image-container">
                            <img src={slide.image} className="slide-image" alt="Project slide" />
                        </div>
                        <div className="text-container">
                            <h2>{slide.title}</h2>
                            <p>{slide.description}</p>
                            <a href={slide.link} className="cta-button">{slide.cta}</a>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default ProjectsCarousel;

