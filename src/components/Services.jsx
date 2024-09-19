import React from 'react'
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/effect-fade";
import 'swiper/css/autoplay'
import { services } from '../data'
import DOMPurify from 'dompurify';

const Services = () => {
    const truncateText = (text, wordCount) => {
        return text?.split(' ').slice(0, wordCount).join(' ') + '...';
    };



    const breakpoints = {
        1024: {
            slidesPerView: 2,
            spaceBetween: 20,

        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,

        },
        320: {
            slidesPerView: 1,
            spaceBetween: 0,

        },
        310: {
            slidesPerView: 1,
            spaceBetween: 0,

        },
    };
    return (
        <section id='service' className=' px-5 lg:px-16  py-10 lg:py-20 bg-black'>
            <div>
                <div className="py-5 text-center ">
                    <div className="flex  justify-center items-center mb-3">
                    </div>

                    <h3 className=" text-2xl lg:text-4xl  font-bold my-5 text-secondary_color">
                        {/* {t("Currently we are")} <br /> {i18n.language === 'ar'?(''):("selling organic food")} */}
                        خدمات شركة التوحيد للمعدات
                    </h3>
                </div>

                <Swiper

                    modules={[Navigation, Autoplay, Pagination]}
                    slidesPerView={2}
                    breakpoints={breakpoints}
                    speed={4000}
                    autoplay={{ delay: 0 }}
                    loop={true}
                >
                    <div>
                        {services?.map((item, index) => (
                            <SwiperSlide key={index} className=" mt-5">

                                <div className="relative rounded-lg border-4 border-secondary_color shadow-md overflow-hidden group">
                                    {/* Image and overlay wrapper */}
                                    <div className="relative overflow-hidden">
                                        {/* Image */}
                                        <img
                                            className="w-full h-[500px] object-cover rounded-md transform transition-transform duration-500 group-hover:scale-110"
                                            alt="img"
                                            src={item?.photo}
                                        />

                                        {/* Overlay */}
                                        <div className="bg-black absolute inset-0 opacity-30 pointer-events-none" />
                                    </div>

                                    {/* Text content */}
                                    <div className=' absolute   top-[60%]'>
                                        <div className='flex items-center'>
                                            <div className="p-3 ">
                                                <h2 className="text-5xl font-bold text-secondary_color mb-2 mt-4">
                                                    {item.title}
                                                </h2>
                                                <div
                                                    className="text-lg text-secondary_color font-[500] mb-4"
                                                    dangerouslySetInnerHTML={{
                                                        __html: DOMPurify.sanitize((item.details), {
                                                            ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br', 'ul', 'li', 'ol', 'span'],
                                                            ALLOWED_ATTR: ['href', 'target', 'style'],
                                                        }),
                                                    }}
                                                />
                                            </div>

                                            <div className='m-10 z-50'>
                                                <svg
                                                    width="34"
                                                    height="28"
                                                    viewBox="0 0 34 28"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    // style={{ fill: '#BFF747', stroke: '#BFF747' }}
                                                >
                                                    <path
                                                        d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26"
                                                        stroke="#BFF747"
                                                        strokeWidth="3"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>




                                            </div>
                                        </div>

                                    </div>



                                </div>


                            </SwiperSlide>
                        ))}
                    </div>

                </Swiper>

            </div>
        </section>
    )
}

export default Services

{/* <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26" stroke="#FDFDE1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg> */ }