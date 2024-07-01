import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const images = [
    'https://via.placeholder.com/800x400?text=Slide+1',
    'https://via.placeholder.com/800x400?text=Slide+2',
    'https://via.placeholder.com/800x400?text=Slide+3',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(interval); // Clear interval on component unmount
    };
  }, [images.length]);

 

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden relative h-64">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 ease-in-out ${
              index === currentIndex ? 'translate-x-0' : 'translate-x-full'
            } ${index === (currentIndex - 1 + images.length) % images.length ? '-translate-x-full' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

