import React, { useEffect, useState } from 'react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import data from '../../data/index.json';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import { Link } from 'react-router-dom';

// Use Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function CardContainerCommittee() {
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
        <h1 className="skills-section--heading" style={{ textAlign:"center" }}>The  Commiettes  </h1>

        <div className="hello" style={{ backgroundColor: '#fff' }}>
            <Swiper
                slidesPerView={4}
                spaceBetween={15}
                centerSlide={true}
                loop={true}
                grabCursor={true}
                fade={true}
                navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                pagination={{ el: '.swiper-pagination', clickable: true, dynamicBullets: true }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    520: { slidesPerView: 2 },
                    950: { slidesPerView: 4 },
                }}
                containerClass="custom-slide-container"
            >
                <div className="slide-container">
                    <div className="card-wrapper">
                        {data?.commites?.map((item, index) => (
                            <SwiperSlide>
                                <div key={index} className="skills--section--card">
                                    <div className="skills--section--img">
                                        <img src={item.src} alt="Product Chain" />
                                    </div>
                                    <div className="skills--section--card--content">
                                        <h3 className="skills--section--title">{item.title}</h3>
                                        <p className="skills--section--description">{item.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                        ))}
                    </div>

                    {/* Add more SwiperSlide components as needed */}
                </div>
            <div className='swiper-pagination swiper-navBtn'></div>

            </Swiper>

            {isMobile && (
                <>
                    <div className="swiper-navBtn"></div>
                    <div className="swiper-button-next swiper-navBtn "></div>
                    <div className="swiper-button-prev swiper-navBtn"></div>
                </>
            )}
             
        </div></>
    );
}

export default CardContainerCommittee;
{/* */ }