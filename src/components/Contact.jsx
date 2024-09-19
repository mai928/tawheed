import React from 'react'
import Form from './Form'
import { Link } from 'react-router-dom'
import Social from './Social'

const Contact = () => {
    return (

        <section id='contact' className=''>
            <div className='px-5 lg:px-16 py-10 lg:py-20 bg-black'>
                <div className=' block lg:flex gap-10 items-center'>
                    <div className='lg:w-[50%]'>
                        <Form />
                    </div>

                    <div className=" lg:w-[50%] ">
                        <div className='border-[1px] border-gray-200 rounded-md py-10  ps-5 lg:ps-14 bg-dark_Green'>
                            <h3 className=' text-center lg:text-start text-lg lg:text-5xl font-semibold font-Outfit leading-relaxed text-white'>{("بيانات التواصل")}</h3>


                            <div className="flex gap-4 items-center  mt-10">
                                <div className=" p-2 lg:p-3 bg-white-400 rounded-full">

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        height={20}
                                        className="fill-primary_color"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />

                                    </svg>

                                </div>
                                {/* {data?.email} */}
                                <div>


                                    <Link href={``} className='block text-white font-Outfit my-2'>{'eltawhed.company@gmail.com'}</Link>

                                </div>

                            </div>


                            <div className="flex items-center gap-4 mt-6">
                                <div className=" p-2 lg:p-3 bg-white-400 rounded-full ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        height={20}
                                        className="fill-primary_color"
                                        viewBox="0 0 384 512"
                                    >
                                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                    </svg>
                                </div>

                                <div>
                                    <p className='text-white font-Outfit py-1'>{'24 عمارات تقسيم الأوقاف - ميدان السواح - سراي القبة.'}</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center  mt-6">
                                <div className=" p-2 lg:p-3 bg-white-400 rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        height={20}
                                        className="fill-primary_color"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                                    </svg>
                                </div>
                                {/* {data?.phone1} */}


                                <Link href={``} className='block text-white font-Outfit py-1'>{'01017669053'}</Link>



                            </div>

                            <div className='py-10'>
                                <div className='opacity-60 border-t-2 border-t-secondary_color w-[50%] m-auto'/>
                                <Social />
                            </div>


                        </div>



                    </div>



                </div>
            </div>

        </section>
    )
}

export default Contact