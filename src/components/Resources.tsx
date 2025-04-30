import React, { useRef, useState, useEffect } from 'react';
import SectionTitle from '../sections/SectionTitle';
import { resources } from '../utils/Data';


const Resources: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [isMobile, setIsMobile] = useState(false);


  // Check if the screen is mobile size
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIsMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkIsMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setScrollPosition(scrollLeft);
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      // On mobile, scroll one full card width
      const cardWidth = isMobile 
        ? scrollContainerRef.current.querySelector('.resource-card')?.clientWidth || 300
        : 300;
      
      const newPosition = direction === 'left' 
        ? scrollPosition - cardWidth 
        : scrollPosition + cardWidth;

      scrollContainerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={<><span className='font-normal'>Featured</span><br />Resources</>} 
          centered 
        />

        <div className="relative w-full py-8 overflow-hidden">
          {showLeftButton && (
            <button 
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2"
              onClick={() => scroll('left')}
              aria-label="Scroll left"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 px-4 pb-4 snap-x scrollbar-hidden"
            onScroll={handleScroll}
            style={{
              scrollSnapType: 'x mandatory',
              scrollPaddingLeft: isMobile ? '0px' : '16px',
              scrollPaddingRight: isMobile ? '0px' : '16px',
            }}
          >
            {resources.map((resource) => (
              <div 
                key={resource.id} 
                className={`resource-card flex-shrink-0 snap-center ${
                  isMobile ? 'w-full' : 'w-64 md:w-72'
                }`}
                style={{
                  scrollSnapAlign: 'center',
                }}
              >
                <div className="flex flex-col h-full bg-white rounded-lg">
                  <div className="h-40 w-full overflow-hidden rounded-t-lg">
                    <img 
                      src={resource.image} 
                      alt={`Resource ${resource.id}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-4 flex flex-col justify-between flex-grow">
                    <h3 className="text-sm font-medium text-gray-800 mb-4">{resource.title}</h3>
                    <div className="flex justify-end mt-2">
                      <button className="flex items-center text-purple-700 text-sm font-medium">
                        Read More
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {showRightButton && (
            <button 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2"
              onClick={() => scroll('right')}
              aria-label="Scroll right"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resources;