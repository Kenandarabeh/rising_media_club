import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AboutEvent from "../AboutEvent.jsx";
import CardEvent from "../CardEvens.jsx";
import ImageSlider from "../ImageSlider.jsx";
export default function Events() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
    <br />
    <br />
 

  <ImageSlider/>
  <br />
  <br />
  <AboutEvent/>
  <br />
  <br />
<CardEvent/>

    </>
  );
}
