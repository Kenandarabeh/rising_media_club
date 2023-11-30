import { useEffect } from "react";
import "../../App.css";
import data from '../../data/index.json';
import { useParams, useLocation } from 'react-router-dom';

export default function AboutOurEvent() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  const { id } = useParams();
  const Event = data?.Events.find((item) => item.id === id);

  if (!Event) {
    // Handle case where leader with the specified ID is not found
    return <p>Leader not found</p>;
  }
  return (
    <>
    <section  className="contact--section" >
      <div className="hero--section--content--box about--section--box">
        <div className="conatact--section--content">


          <h1 className="skills-section--heading">{Event.name}</h1>

          <br />
          <br />
          <p className="hero--section-description">
          {Event.description}</p>
        </div>
      </div>

    </section>
    </>
  );
}
