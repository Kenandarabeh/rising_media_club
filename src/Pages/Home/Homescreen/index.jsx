import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from "../HeroSection";
import VisitUs from "../visitUs.jsx";
import OurServer from "../OurServer.jsx";
export default function Home() {

  

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <HeroSection />
      <br />
      <br />
      <br />
      <VisitUs/>
      <OurServer/>
      
    </>
  );
}
