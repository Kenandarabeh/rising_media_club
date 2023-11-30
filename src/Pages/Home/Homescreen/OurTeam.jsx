import { useParams,useLocation } from "react-router-dom";
import data from '../../../data/index.json';
import { useEffect } from "react";



export default function OurTeam() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const { id } = useParams();
  const leader = data?.Allmembers.find((item) => item.id === id);

  if (!leader) {
    // Handle case where leader with the specified ID is not found
    return <p>Leader not found</p>;
  }
  return (
    <>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div className="section-portfolio">
      <div className="portfolio">
        <div className="rmc-name">
          <h1>rising media club Member</h1>
        </div>
        <div className="name-portfolio">
          <div className="image-portfolio">
            <img src={`../../${leader.src}`} alt="" />
          </div>
          <div className="border-portfolio">
            <div className="border"></div>
          </div>
          <div className="text-portfolio">
            <div className="name">
              <div className="title">
                <h3 style={{color:"black"}}>{leader.name}</h3>
              </div>
              <h4 style={{color:"#4C4C4C"}}> {leader.role}</h4>
              <br />
              <p>{leader.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

   </>
  );
}
