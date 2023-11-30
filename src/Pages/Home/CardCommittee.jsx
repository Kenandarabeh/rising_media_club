// Card.js
import React from 'react';
import './style.css';
import data from '../../data/index.json';

function Card() {
    return (
        <>
            {data?.commites?.map((item, index) => (
                <div key={index} className="skills--section--card">
                    <div className="skills--section--img">
                        <img src={item.src} alt="Product Chain" />
                    </div>
                    <div className="skills--section--card--content">
                        <h3 className="skills--section--title">{item.title}</h3>
                        <p className="skills--section--description">{item.description}</p>
                    </div>
                </div>
            ))}
            </>
    );
}

export default Card;
