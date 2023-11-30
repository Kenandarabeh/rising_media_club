import React, { useEffect, useRef, useState } from 'react';
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

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function CardTeam() {
  const [isMobile, setIsMobile] = useState(window.matchMedia('(min-width: 768px)').matches);
  const [selectedCommit, setSelectedCommit] = useState(''); // Default to commit1
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia('(min-width: 768px)').matches);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleCommitClick = (commit) => {
    setSelectedCommit(commit);
    if (swiperRef.current) {
      // Scroll to the Swiper component when a commit button is clicked
      swiperRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="skills--section2" >



        <h1 className="skills-section--heading2" style={{ position: 'relative', display: 'flex', top: "20px", zIndex: "50", fontSize: "55px", justifyContent: 'center', alignContent: "center" }}>Our members</h1>

      </div>
      <div className="bottons" style={{ top: "30px", zIndex: "50" }}>
        <button
          style={{ background: '#9b59b6'  }}
          className={`pill pill--selected paddingbtn ${selectedCommit === 'commit1' && 'active'}`}
          type="button"
          onClick={() => handleCommitClick('commit1')}
        >
          Press
        </button>
        <button
          style={{ background: '#7f8c8d' }}
          className={`pill pill--selected paddingbtn ${selectedCommit === 'commit2' && 'active'}`}
          type="button"
          onClick={() => handleCommitClick('commit2')}
        >
          Digital Media
        </button>
        <button
          style={{ background: '#00CB00' }}
          className={`pill pill--selected paddingbtn ${selectedCommit === 'commit3' && 'active'}`}
          type="button"
          onClick={() => handleCommitClick('commit3')}
        >
          Public Relations
        </button>
        <button
          style={{ background: '#3498db' }}
          className={`pill pill--selected paddingbtn ${selectedCommit === 'commit4' && 'active'}`}
          type="button"
          onClick={() => handleCommitClick('commit4')}
        >
          Training and Formation
        </button>
        <button
          style={{ }}
          className={`pill pill--selected ${selectedCommit === 'commit5' && 'active'}`}
          type="button"
          onClick={() => handleCommitClick('commit5')}
        >
          Information Documentation
        </button>
      </div>
      {selectedCommit && (
        <div className="hello" style={{ backgroundColor: '#ffffff' }} ref={swiperRef}>
          <Swiper
            slidesPerView={5}
            spaceBetween={20}
            centerSlide={true}
            loop={true}
            grabCursor={true}
            fade={true}
            navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
            pagination={{ el: '.swiper-pagination', clickable: true, dynamicBullets: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              520: { slidesPerView: 3 },
              950: { slidesPerView: 5 },
            }}
            containerClass="custom-slide-container"
          >
            <div className="slide-container">
              {data.Allmembers.filter((item) => item.commit === selectedCommit).map((item, index) => (
                item.rank === "members" && (
                  <SwiperSlide key={index}>
                    <div className="card-wrapper">
                      <div className="card">
                        <div className="image-content">
                          <div className="card-image2">
                            <Link to={`/ourteam/${item.id}`}>

                              <img src={item.src} alt="" className="card-img" />
                            </Link>
                          </div>
                        </div>
                        <div className="card-content">
                          <h2 className="name">{item.name}</h2>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )))}
            </div>
          </Swiper>
          {isMobile && (
            <>
              <div className="swiper-navBtn"></div>
              <div className="swiper-button-next swiper-navBtn "></div>
              <div className="swiper-button-prev swiper-navBtn"></div>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default CardTeam;