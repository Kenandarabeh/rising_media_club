import React from 'react';
import './style.css';
import data from '../../data/index.json';
import { Link } from 'react-router-dom';

function CardEvent() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
            {data?.Events.map((event) => (

                <div key={event.id} className="card-wrapper" style={{ width: "250px", whiteSpace: "nowrap", margin: "10px" }}>
                            <Link to={`/ourEvent/${event.id}`}  style={{ textDecoration: 'none' }}>

                        <div className="Card-Event">

                            <div className="Card-image-Event">
                                <img src={`${event.src}`} alt="" />
                            </div>

                            <div className="text-Card-Event">
                            <h4>{event.name}</h4>
                            </div>

                        </div>
                        </Link>

                </div>

            ))}
        </div>

    );
}

export default CardEvent;
