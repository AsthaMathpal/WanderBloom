import React from 'react';
import LightGallery from 'lightgallery/react';

import './Css/Gallery.css';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const GalleryComp = () => {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    return (
        <div className='w-full px-8 md:px-16 mt-10 mb-16'>
            <div>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-3 font-serif'>
                    Our Gallery
                </h2>
                <hr className='text-teal-500 w-[200px] bg-teal-500 mx-auto h-1 mb-10'/>
            </div>

            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                {/* Flex layout: zero horizontal gap, vertical spacing added */}
                <div className="flex flex-wrap justify-center w-full gap-y-6">
                    {Array.from({ length: 12 }, (_, i) => (
                        <a key={i} href={`/Hero${i + 1}.jpg`}>
                            <img
                                src={`/Hero${i + 1}.jpg`}
                                alt={`Hero${i + 1}`}
                                className="w-[400px] h-[300px] object-cover rounded-3xl shadow-md"
                            />
                        </a>
                    ))}
                </div>
            </LightGallery>
        </div>
    );
};

export default GalleryComp;
