import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import "../../App.css";

const MyPortfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [

    
      {
        src: "./img/product-chain-1.png",
        title: "Press Committee",
        description: "This field is the foundation of the club, concerned with design, editing, activation, presentation, television and radio hosting, as well as photographic shooting"
      },
       
      {
        src: "./img/product-chain-1.png",
        title: "Press Committee",
        description: "This field is the foundation of the club, concerned with design, editing, activation, presentation, television and radio hosting, as well as photographic shooting"
      },
       
      {
        src: "./img/product-chain-1.png",
        title: "Press Committee",
        description: "This field is the foundation of the club, concerned with design, editing, activation, presentation, television and radio hosting, as well as photographic shooting"
      },
       
      {
        src: "./img/product-chain-1.png",
        title: "Press Committee",
        description: "This field is the foundation of the club, concerned with design, editing, activation, presentation, television and radio hosting, as well as photographic shooting"
      }, 
      {
        src: "./img/product-chain-1.png",
        title: "Press Committee",
        description: "This field is the foundation of the club, concerned with design, editing, activation, presentation, television and radio hosting, as well as photographic shooting"
      },
    
    // Add more data as needed
  ];

  const cardWidth = 19.5; // Adjust the width of each card as needed
  const containerWidth = (cardWidth + 10) * data.length; // Adjust the width calculation as needed

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <div className="my-portfolio">
      <style>
        {`
          .carousel {
            display: flex;
            overflow: hidden;
            transition: transform 0.5s ease-in-out;
            margin: 20px;
            width: ${containerWidth}%; // Set the width of the container
          }

          .carousel-item {
            flex: 0 0 ${cardWidth}% !important;
            opacity: 0.7;
            margin: 0 2px;  // Adjust margin as needed
            transition: opacity 0.5s ease-in-out;
          }

          .carousel-item.active {
            opacity: 1;
          }

          .skills--section--card {
            padding: 32px;
            gap: 12px;
            width: 180px;
            border-radius: 10.6px;
            background: var(--bg-shade);
            min-height: 250px;
          }

          .skills--section--card img {
            width: 80%;
            height: auto;
          }

          .carousel-controls {
            margin-top: 10px;
            display: flex;
            justify-content: space-between;
          }

          .carousel-controls button {
            padding: 5px 10px;
            cursor: pointer;
            border: none;
            border-radius: 4px;
            background-color: #007bff;
            color: #fff;
            font-size: 1rem;
            display: flex;
            align-items: center;
          }

          .carousel-controls button:hover {
            background-color: #0056b3;
          }

          .carousel-controls .icon {
            margin-right: 5px;
          }
        `}
      </style>

      <div className="carousel" style={{ transform: `translateX(${-currentIndex * (cardWidth + 10)}%)` }}>
        {data.map((item, index) => (
          <div
            key={index}
            className={`carousel-item${index === currentIndex ? ' active' : ''}`}
          >
            <div className="skills--section--card">
              <div className="skills--section--img">
                <img src={item.src} alt={`Card ${index + 1}`} />
              </div>
              <div className="skills--section--card--content">
                <h3 className="skills--section--title">{item.title}</h3>
                <p className="skills--section--description">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="carousel-controls">
        <button onClick={prevSlide} disabled={currentIndex === 0}>
          <span className="icon"><FontAwesomeIcon icon={faArrowLeft} /></span> Previous
        </button>
        <span>{currentIndex}</span>
        <button onClick={nextSlide} disabled={currentIndex ===  1}>
          Next <span className="icon"><FontAwesomeIcon icon={faArrowRight} /></span>
        </button>
      </div>
    </div>
  );
};

export default MyPortfolio;
