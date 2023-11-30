// Card.js
import React from 'react';
import './style.css';


function Card() {
  return (
    <div class="card">
       <div class="image-content">
        <span className="overlay"/>
        <div className="card-image">
        <img src="./club_img.png" alt="" class="card-img"/>
        </div>
      </div>
      <div class="card-content">
      <h2 class="name"> i3lami saide</h2>
      <p class="description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
          veniam ea nisi quibusdam, fuga, qui ipsa quas architecto alias est
          maiores natus repudiandae dignissimos! Quas sapiente rem libero aut
          itaque?
        </p>
        <button class="button">view more</button>
      </div>
    </div>
  );
}

export default Card;
