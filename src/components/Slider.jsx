import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import 'swiper/css/navigation'; // Ensure this is included
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { sliderData } from '../data';
import DOMPurify from 'dompurify';
import { Link } from 'react-router-dom';
const Slider = () => {

    const [show, setShow] = useState(false)
    const [loading, SetLoading] = useState(false)

    return (
        <section className='relative z-0'
            onMouseOver={() => setShow(true)}
            onMouseOut={() => setShow(false)}
        >
            {
                loading ? (
                    <div className=' mt-20 flex justify-center items-center'>
                        <Loader type="bubble-scale" bgColor={'#f7c35f'} color={'red'} title={""} size={100} />
                    </div>
                ) : (<Swiper
                    className="static"

                    loop={true}
                    autoplay={{ delay: 5000 }}
                    effect="fade"
                    pagination={{ clickable: true }}
                    modules={[Navigation, Autoplay, EffectFade]}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}

                >

                    <>

                        <div className={`swiper-button-next  text-white  ${show ? 'opacity-100' : 'opacity-0'}`}></div>
                        <div className={`swiper-button-prev text-white ${show ? 'opacity-100' : 'opacity-0'} `}></div>

                    </>
                    {
                        sliderData.map((slide, index) => (
                            <SwiperSlide key={index} className="swiper-slide">
                                <div className='relative h-[90vb] overflow-hidden'>
                                    <img className='w-full h-full object-cover object-center' loading='eager' alt='img' src={slide.photo} />
                                    <div className='absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-40'></div>
                                </div>

                                <div key={index} className='absolute top-10 lg:top-28  lg:start-[10%]  lg:w-[60%]'>
                                    <p className='text-primary_color mb-4 font-bold text-xl'>Let’s Start Now</p>
                                    {slide.title?.split(' ')?.map((item) =>
                                    (
                                        <span className='text-xl text-white font-[700] lg:text-7xl'>
                                            <span className={`text-primary_color }`}>{item[0]}</span>
                                           {item.slice(1) + '  '}
                                        </span>
                                    )
                                    )
                                    }
                                    {/* <p className=' lg:mt-16 mb-10 text-white  font-Outfit text-[12px] lg:text-[17px]  font-semibold lg:font-bold w-[80%]'>{t(slide.details)}</p> */}
                                    <div className='mt-10 lg:mt-6 mb-10 text-white   text-[12px] lg:text-[19px]  font-semibold lg:font-bold ' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize((slide?.details)) }} />
                                    <Link href={'/services'} className='bg-transparent border-2 border-primary_color  text-base lg:text-lg   px-4 lg:px-4 text-white lg:py-1 rounded-lg '>{("Discover More")}</Link>
                                </div>
                            </SwiperSlide>
                        ))
                    }



                </Swiper>)
            }


        </section>
    )
}

export default Slider