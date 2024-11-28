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
                            <SwiperSlide key={index} className="swiper-slide relative">
                                <div className='relative'>
                                    <img className='w-full h-[60vb] lg:h-[100vb]' loading='eager' alt='img' src={slide.photo} />
                                    <div className='absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-40'></div>
                                </div>

                                <div key={index} className='absolute top-10 lg:top-44  lg:start-[20%] text-center lg:w-[60%]'>
                                    <h2 className=' text-xl font-[700] lg:text-7xl text-white'>{(slide.title)}</h2>
                                    {/* <p className=' lg:mt-16 mb-10 text-white  font-Outfit text-[12px] lg:text-[17px]  font-semibold lg:font-bold w-[80%]'>{t(slide.details)}</p> */}
                                    <div className='mt-10 lg:mt-16 mb-10 text-white   text-[12px] lg:text-[19px]  font-semibold lg:font-bold ' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize((slide?.details)) }} />
                                    <Link href={'/services'} className='bg-primary_color  text-base lg:text-xl    lg:font-[600] py-2 lg:py-2 px-4 lg:px-8 rounded-full hover:bg-secondary_color'>{("أكتشف المزيد")}</Link>
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