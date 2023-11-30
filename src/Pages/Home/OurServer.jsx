import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../App.css";
import logo from "./asstes/IMG-20231123-WA0000-removebg-preview copy.png";
export default function OurServer() {
    return (
        <>
        <section id="AboutMe" className="contact--section " >
            <div className="hero--section--content--box about--section--box">
                <div className="conatact--section--content">


                    <h1 className="skills-section--heading ">Rising Media Club Server</h1>
                    <br />
                    <br />

                    <p className="hero--section-description ">
                        Get in touch with our team and have benefit from our weekly informative activities by joining our community server.
                    </p>
                    <br />
                    <br />
                    
                  
                </div>
                <div className="ouserver ">
                
                <div class="box">
                    <div class="content">
                        <img src={logo} />
                        <h2 > Join Our<br /><span>Community server</span></h2>
                        <a href="#"> Join Us </a>
                    </div>
                </div>
            </div>
            </div>
            <FontAwesomeIcon icon="fa-brands fa-square-facebook" className="icon-face" />    </section>
         </>
    );
}
