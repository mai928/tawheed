import React from 'react'
import { Productgallery } from '../data';
import { ImageGallery } from 'react-image-grid-gallery';

const Gallary = () => {


    const images = Productgallery?.map((image) => ({
        src: image?.src || "", // Default to an empty string if undefined
        alt: image?.alt || "Image", // Default alt text
        caption:image?.caption,
        customOverlay: (
            <div className="custom-overlay__caption">
                <div className='text-xl lg:text-2xl font-bold'>{image?.caption || "No caption available"}</div>
            </div>
        ),
    }));
    return (
        <section id='gallary' className=' px-5 lg:px-16  py-10 lg:py-20'>
             <div className='text-center mb-10'>
                <h3 className=" text-2xl lg:text-5xl lg:leading-[3.5rem] font-bold my-5  ">
                    {("صور")}</h3>

            </div>

       
            <ImageGallery  imagesInfoArray={images} columnWidth={300} columnCount={3} gapSize={10} />

        </section>)
}

export default Gallary