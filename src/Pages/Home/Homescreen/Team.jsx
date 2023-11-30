import AboutTeam from "../AboutTeam.jsx";
import CardContainer from "../CardContainer.js";
import CardTeam from "../CardTeam.jsx";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


export default function Team() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
    <br />
    <br />

    <br />

   <AboutTeam/>
   <br />
   <CardContainer/>
   <CardTeam/>

   </>
  );
}
