import React, { useEffect, useState } from 'react';

const ScrollToUp = () => {
    const [isVisible, setIsVisible] = useState(false);
    
    const toggleVisibility = () => {
        setIsVisible(window.scrollY > 200);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                className='fixed cursor-pointer md:block hidden duration-150 hover:bg-red-600 bg-red-500 px-4  py-3  rounded-md bottom-9 right-9 text-white z-50 shadow-lg'
            >
                <i className="fa-solid text-2xl fa-arrow-up"></i>
            </button>
        )
    );
};

export default ScrollToUp;
