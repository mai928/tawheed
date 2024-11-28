import React from 'react'
import { partnerData } from '../data';



const Partner = () => {

    return (
        <section id='partner' className=' px-5 lg:px-16 py-10'>
            <div className='py-20'>
                <h3 className=" text-center text-2xl lg:text-5xl lg:leading-[3.5rem] font-bold  "
                >موزعين معتمدين للماركات التالية</h3>
            </div>

            <div className='grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                {
                    partnerData?.map((item) => (
                        <div >
                            <img alt='partner' src={item.photo} />
                        </div>
                    ))
                }
            </div>

        </section>

    )
}

export default Partner