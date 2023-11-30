import React, { useEffect, useState } from 'react';
import Card from './Card';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import data from '../../data/index.json';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { Link } from 'react-router-dom';

// Use Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function CardContainer() {
  const [isMobile, setIsMobile] = useState(window.matchMedia('(min-width: 768px)').matches);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia('(min-width: 768px)').matches);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="skills--section2" >



        <h1 className="skills-section--heading2" style={{ position: 'relative', top: "130px", zIndex: "90" }}>Our leadres</h1>

      </div>
      <div className="hello" style={{ backgroundColor: "#ffffff" }}>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          centerSlide={true}
          loop={true}
          grabCursor={true}
          fade={true}
          navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
          pagination={{ el: '.swiper-pagination', clickable: true, dynamicBullets: true }}
          onPaginationShow={{}}
          breakpoints={{
            0: { slidesPerView: 1 },
            520: { slidesPerView: 2 },
            950: { slidesPerView: 3 },
          }}
          containerClass="custom-slide-container"
        >
          <div className="slide-container">
            {data?.Allmembers?.map((item, index) => (
              item.rank === "leaders" && (
                <SwiperSlide key={index}>
                  <div className="card-wrapper">
                    <div className="card">
                      <div className="image-content">
                        <span className="overlay" />
                        <div className="card-image">
                          <img src={item.src} alt="" className="card-img" />
                        </div>
                      </div>
                      <div className="card-content">
                        <h2 className="name">{item.name}</h2>
                        <p className="description">{item.role}</p>
                        <Link to={`/ourteam/${item.id}`}>
                          <button className="btn btn-primary" style={{ padding: "5px" }}>view more</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            ))}
          </div>
          <div className="swiper-pagination swiper-navBtn"></div>
        </Swiper>
        {isMobile && (
          <>
            <div className="swiper-button-next swiper-navBtn "></div>
            <div className="swiper-button-prev swiper-navBtn"></div>

          </>
        )}

      </div></>
  );
}

export default CardContainer;
