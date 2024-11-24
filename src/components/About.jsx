import React from 'react'
import about from '../assets/logo.jpg'
import DOMPurify from 'dompurify';
import star from '../assets/star.png'

const About = () => {
    const sanitizedContent = DOMPurify.sanitize((''), {
        ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br', 'ul', 'li', 'ol', 'span'],
        ALLOWED_ATTR: ['href', 'target', 'style']
    });
    return (
        <section id='about' className=' px-5 lg:px-16 py-10'>
            <div className=' block lg:flex items-start gap-24 '>

                <div className='lg:w-[50%] lg:mt-20 text-center lg:text-start'>
                    <div className='flex items-center justify-center lg:justify-start gap-5'>
                        {/* <img width={40} src={star} /> */}
                        <h2 className='text-color_heading text-xl lg:text-5xl lg:leading-[3.5rem]  font-bold  my-10'>About Us </h2>

                    </div>


                    <p className='text-gray-500 font-[500] font-Outfit text-lg leading-10 '>
                        The first real estate podcast in Egypt
                        Everything that is new and important in the world of real estate in a different form and style
                    </p>


                </div>

                <div className='lg:w-[50%]'>
                    <img className='w-full h-full' alt='img' src={about} />
                </div>


            </div>
        </section>
    )
}

export default About