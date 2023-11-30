import "../../App.css";
import backgroundImage from "./asstes/purpleblur copy.png"
export default function AboutTeam() {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',

  };
  return (
    <section className="contact--section" style={{backgroundImage:`url(${backgroundImage})`}}>
      
      <div className="hero--section--content--box about--section--box">

        <div className="conatact--section--content">


          <h1 className="skills-section--heading">Our Team</h1>
          <br />
          <br />
          <p className="hero--section-description">
          We are proud to introduce our media team at the university club, where our team comprises a diverse group of talents and skills in the fields of media and communication. We all work diligently to deliver high-quality content and highlight the fantastic events and activities taking place at our university.
          </p>
        </div>
      </div>
    </section>
  );
}
