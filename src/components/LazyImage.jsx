import React, { useState, useEffect, useRef } from 'react';

const LazyImage = ({ src, alt, className }) => {
    const [loaded, setLoaded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const imgRef = useRef(null);

    let callback = (entries, observer) => {
        entries.forEach((entry) => {
            // Check if the observed entry is intersecting
            if (entry.isIntersecting) {
                setIsVisible(true);
                // observer.unobserve(entry.target); // Stop observing once visible
            }
            console.log('entry', entry.isIntersecting);
        });
    }
    useEffect(() => {
        let observer = new IntersectionObserver(callback)
        // const observer = new IntersectionObserver(
        //     (entries) => {
        //         entries.forEach((entry) => {
        //             // Check if the observed entry is intersecting
        //             if (entry.isIntersecting) {
        //                 setIsVisible(true);
        //                 observer.unobserve(entry.target); // Stop observing once visible
        //             }
        //         });
        //     },
        //     { threshold: 0.1 }
        // );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        // Cleanup: unobserve when component unmounts or imgRef changes
        return () => {
            if (imgRef.current) {
                observer.unobserve(imgRef.current);
            }
        };
    }, []); // Empty dependency array ensures effect runs only once

    return (
        <div className="relative w-full h-full">
            {!loaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primaryColor"></div>
                </div>
            )}
            {/* {isVisible && ( */}
                <img
                    ref={imgRef}
                    src={src}
                    alt={alt}
                    onLoad={() => setLoaded(true)} // Set loaded state when image is fully loaded
                    className={`transition-opacity duration-500 ease-in-out ${className}`}
                    style={{ opacity: loaded ? 1 : 0 }} // Apply opacity transition
                />
            {/* )} */}
        </div>
    );
};

export default LazyImage;
