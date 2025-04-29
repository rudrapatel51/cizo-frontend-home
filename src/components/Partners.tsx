import React, { useState, useEffect } from 'react';

interface Partner {
  id: number;
  logo: string;
  width: string;
}

const Partners: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isAutoplay, setIsAutoplay] = useState<boolean>(true);

  const partners: Partner[] = [
    {
      id: 1,
      logo: "/home/partners/1.png",
      width: "w-24"
    },
    {
      id: 2,
      logo: "/home/partners/2.png",
      width: "w-24"
    },
    {
      id: 3,
      logo: "/home/partners/3.png",
      width: "w-24"
    },
    {
      id: 4,
      logo: "/home/partners/4.png",
      width: "w-24"
    },
    {
      id: 5,
      logo: "/home/partners/5.png",
      width: "w-24"
    },
    {
      id: 6,
      logo: "/home/partners/6.png",
      width: "w-24"
    }
  ];

  const totalSlidesVisible = (): number => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 768) return 2;
      if (window.innerWidth < 1024) return 3;
      return 5;
    }
    return 5;
  };

  const nextSlide = (): void => {
    setActiveIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex >= partners.length - (totalSlidesVisible() - 1) ? 0 : newIndex;
    });
  };

  const prevSlide = (): void => {
    setActiveIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? partners.length - totalSlidesVisible() : newIndex;
    });
  };

  useEffect(() => {
    let interval: number;
    if (isAutoplay) {
      interval = setInterval(() => {
        nextSlide();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoplay]);

  const handleMouseEnter = (): void => {
    setIsAutoplay(false);
  };

  const handleMouseLeave = (): void => {
    setIsAutoplay(true);
  };

  return (
    <section className="p-8 md:p-16 bg-gray-50 ">
        
        <div className="flex justify-between items-center mb-10 relative overflow-hidden">
        <div className="hidden sm:block absolute right-1/3 bottom-0 -translate-x-1/2 translate-y-1/2 w-24 h-12 lg:h-16 rounded-t-full bg-[linear-gradient(180deg,rgba(247,102,128,1),rgba(87,0,123,1))] shadow-lg"></div>
        <div className='flex flex-col gap-5  items-start'>
      <div className="w-16 h-1 bg-purple-600"></div>
      <h2 className="text-3xl md:text-4xl font-meduim leading-relaxed">
      <span >Meet the People</span>
      <br/><span className=' font-bold'>We are Working With</span>
      </h2>
      </div>
       
          <div className="flex items-center space-x-2 sm:space-x-2 mt-4 sm:mt-0">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-purple-600 flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-colors"
              aria-label="Previous   slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-purple-600 flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-colors"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>

        <div
          className="mt-10 overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * (100 / totalSlidesVisible())}%)` }}
          >
            {partners.map((partner) => (
              <div
                key={partner.id}
                className={`${partner.width} h-20 flex-shrink-0 mx-4 transform transition-all duration-300 hover:scale-110`}
                style={{
                  flex: `0 0 calc(100% / ${totalSlidesVisible()})`,
                }}
              >
                <div
                  className="w-full h-full bg-contain bg-no-repeat bg-center"
                  style={{ backgroundImage: `url(${partner.logo})` }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8">
         {[...Array(partners.length - (totalSlidesVisible() - 1))].map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 mx-1 rounded-full ${
                index === activeIndex ? 'bg-purple-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
    </section>
  );
};

export default Partners;
