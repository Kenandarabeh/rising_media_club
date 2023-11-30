import React, { useEffect, useState } from 'react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import data from '../../data/index.json';
import photo1 from"./asstes/th.jpg";
import photo3 from"./asstes/th (2).jpg";
import photo4 from "./asstes/20230611_155741 (1).jpg";
import photo5 from"./asstes/th (3).jpg";
import photo6 from "./asstes/nature-images..jpg";
import photo7 from"./asstes/th (1).jpg";

// Import Swiper styles
import 'swiper/swiper-bundle.css';

// Use Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function ImageSlider() {
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
            <style>
                {`
                .swiper-pagination-bullet {
                    background-color: black !important;
                    opacity: 1;
                
                }
                
                .swiper-pagination-bullet-active {
                    background-color: gold !important;
                }
                
                    .swiper {
                        position:relative !important;
                        width: 80%;
                    }
                    .swiper-button-next {
                        margin-top: 50px;
                    }
                    .swiper-button-prev{
                        margin-top: 50px;
                    }
                    .swiper-navBtn {
                        color: black !important;
                        transition: color 0.3s ease;
                    }
                    
                    .swiper-navBtn:hover {
                        color: black !important;
                    }


                `}
            </style>
<br />
<br />
<br />
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                centerSlide={true}
                loop={true}
                grabCursor={true}
                fade={true}
                navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                pagination={{ el: '.swiper-pagination', clickable: true, dynamicBullets: true }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    520: { slidesPerView: 1 },
                    950: { slidesPerView: 1 },
                }}
            >
          <div className="slide-container">
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <SwiperSlide>
                             <img src="../../img/photo1.jpg" alt="Product Chain" className='ImageSlider'/>                 
                            </SwiperSlide>

                            <SwiperSlide>
                            <img src="../../img/photo2.jpg "alt="Product Chain" className='ImageSlider'/>                 
                            </SwiperSlide>
                            
                            <SwiperSlide>
                            <img src="../../img/photo3.jpg" alt="Product Chain" className='ImageSlider'/>                 
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src="../../img/photo4.jpg" alt="Product Chain" className='ImageSlider'/>                 
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src="../../img/photo5.jpg" alt="Product Chain" className='ImageSlider'/>                 
                            </SwiperSlide>
                          
                            </div>
                            </div>
            </Swiper>
            <div className="swiper-pagination swiper-navBtn" style={{marginBottom:'110px'}}></div>
            {isMobile && (
                <>
                    <div className="swiper-navBtn"></div>
                    <div className="swiper-button-next swiper-navBtn" style={{top:'200px'}}></div>
                    <div className="swiper-button-prev swiper-navBtn"style={{top:'200px'}}></div>
                </>
            )}
             
        </>
    );
}

export default ImageSlider;
{/* */ }