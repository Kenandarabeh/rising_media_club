import AboutMe from "../AboutMe";
import CardContainerCommittee from "../CardContainercommittee.jsx";
import OurGols from './../OurGols.jsx';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
export default function AboutUS() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
    <br />b
    <br />
      <AboutMe />
      <br />
      <br />
      <br />
      <br />
      <CardContainerCommittee/>
      <OurGols/>
    </>
  );
}
