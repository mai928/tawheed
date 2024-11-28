import React from 'react'
import about from '../assets/about.png'
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
                    <img width={40} src={star}/>
                                        <h2 className='text-color_heading text-xl lg:text-5xl lg:leading-[3.5rem]  font-bold  my-10'>من نحن</h2>

                </div>


                    <p className='text-gray-500 font-[500] font-Outfit text-lg leading-10 '>
                        شركة التوحيد
                        شركة التوحيد للمعدات شركة رائدة في مجال توريد معدات البناء و الشدة المعدنية منذ عام 2010 .

                        نقوم بتوريد وصيانة كافة معدات البناء

                        هزاز خرسانة
                        زمبة هزاز
                        مولد كهرباء من 1 كيلو الى 20 كيلو
                        طلمبات مياه 2 بوصة - 3 بوصة - 4 بوصة
                        خلاط خرسانة ايطالى ومحلى 1/3 - 1/4 - 1/2 متر
                        دكاكات تربة مختلفة الاوزان هليوكبتر ارضية
                        منشار فواصل
                        اوناش تشويين
                        ونش ساقية
                        موزعين معتمدين لكافة انواع محطات هوندا وروبين
                        وشواكيش التكسير والشدادات المعدنية
                        ضمان عام على كامل المعدات.
                    </p>


                </div>

                <div className='lg:w-[50%]'>
                    <img className='w-[550px] rounded-lg lg:rounded-tl-[15rem] lg:rounded-br-[15rem]' alt='img' src={about} />
                </div>
              

            </div>
        </section>
    )
}

export default About