import { Link } from "react-router-dom";
import "../../App.css";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, we are </p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">RISING MEDIA </span>{" "}
            <br />
            CLUB
          </h1>
          <p className="hero--section-description">
          Welcome to our website and Join us in order to be a distinguished media personality.         </p>
        </div>
        <br />
        <Link to="/joinUs">
        <button className="btn btn-primary"style={{position:"relative",left:"28px"}}>Join Us</button>
        </Link>   
      </div>
      <div className="hero--section--img">
        <img src="./img/club_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
