import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import 'swiper/css/navigation'
import "swiper/css/pagination";
import 'swiper/css/autoplay'
import { partnerData } from '../data';



const Partner = () => {



    const breakpoints = {
        1024: {
            slidesPerView: 4,
            spaceBetween: 1000,
            //  centeredSlides: true,

        },

        640: {
            slidesPerView: 2,
            spaceBetween: 30,
            centeredSlides: true,

        },
        480: {
            slidesPerView: 1,
            spaceBetween: 20
            , centeredSlides: true,

        },
        320: {
            slidesPerView: 2,
            spaceBetween: 5,
            centeredSlides: true,
        },
    }

    return (
        <section id='partner' className=' px-5 lg:px-16 py-10'>
            <div className='py-20'>
                <h3 className=" text-center text-2xl lg:text-5xl lg:leading-[3.5rem] font-bold  "
                >موزعين معتمدين للماركات التالية</h3>
            </div>
            <Swiper
            className='overflow-hidden'
                modules={[Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                speed={2500}
                autoplay={{ delay: 0 }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 100,
                    },
                }}

            >
                {partnerData.map((partner, index) => (
                    <SwiperSlide key={index}>
                        <img width={400} height={300} className='bg_img' src={`${partner.photo}`} alt={`Partner ${index + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>

    )
}

export default Partner