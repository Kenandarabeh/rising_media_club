import React, { useEffect } from 'react';
import photo1 from"./asstes/th.jpg";
import photo3 from"./asstes/th (2).jpg";
import photo4 from "./asstes/20230611_155741 (1).jpg";
import photo5 from"./asstes/th (3).jpg";
import photo6 from "./asstes/nature-images..jpg";
import photo7 from"./asstes/th (1).jpg";
import "./PhotoGallery.css"
const PhotoGallery = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      // Cleanup observer on component unmount
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="parent">
      <div className="item1">
        <img src='../img/1.jpg'alt="Product Chain" className="hidden" />
      </div>
      <div></div>
      <div className="item2">
        <div className="item2-1">
          <img src='../img/2.jpg' alt="" className="hidden" />
        </div>

        <div className="item2-3"></div>
        <div className="item2-2">
          <img src='../img/6.jpg'alt="" className="hidden" />
        </div>
        <div className="item2-4"></div>
      </div>
      <div></div>
      <div className="item3">
        <img src='../img/4.jpg' alt="" className="hidden" />
      </div>
      <div></div>
      <div className="item4">
        <div className="item4-1">
          <img src='../img/5.jpg' alt="" className="hidden" />
        </div>

        <div className="item4-3"></div>
        <div className="item4-2">
          <img src='../img/3.jpg' alt="" className="hidden" />
        </div>
        <div className="item4-4"></div>
      </div>
      <div></div>
      <div className="item5">
        <img src='../img/7.jpg' alt="" className="hidden" />
      </div>
    </div>
  );
};

export default PhotoGallery;
