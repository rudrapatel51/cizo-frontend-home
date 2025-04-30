import React, { useRef, useState } from 'react';
import SectionTitle from '../sections/SectionTitle';

interface Resource {
  id: number;
  title: string;
  image: string;
}

const Resources: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const resources: Resource[] = [
    {
      id: 1,
      title: "How to Build a Scalable Application up to 1 Million Users on AWS",
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/d09aad5d-108a-48d3-95e8-db2d0a5dca3f.png"
    },
    {
      id: 2,
      title: "How to Build a Scalable Application up to 1 Million Users on AWS",
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/e1602230-4cc3-49eb-ad45-b7833d4a1daf.png"
    },
    {
      id: 3,
      title: "How to Build a Scalable Application up to 1 Million Users on AWS",
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/efba1194-dad2-47dd-8753-9464ea8834aa.png"
    },
    {
      id: 4,
      title: "How to Build a Scalable Application up to 1 Million Users on AWS",
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/eda7a6f7-b6f5-4963-a14a-dbb20ba57a4b.png"
    },
    {
      id: 5,
      title: "How to Build a Scalable Application up to 1 Million Users on AWS",
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/eda7a6f7-b6f5-4963-a14a-dbb20ba57a4b.png"
    },
    {
      id: 6,
      title: "How to Build a Scalable Application up to 1 Million Users on AWS",
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/eda7a6f7-b6f5-4963-a14a-dbb20ba57a4b.png"
    },
    {
      id: 7,
      title: "How to Build a Scalable Application up to 1 Million Users on AWS",
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/eda7a6f7-b6f5-4963-a14a-dbb20ba57a4b.png"
    }
  ];

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
      const scrollAmount = 300;
      const newPosition = direction === 'left' 
        ? scrollPosition - scrollAmount 
        : scrollPosition + scrollAmount;
      
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
        className="flex overflow-x-auto gap-4 px-4 pb-4 scrollbar-hidden"
        onScroll={handleScroll}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {resources.map((resource) => (
          <div key={resource.id} className="flex-shrink-0 w-64 md:w-72">
            <div className="flex flex-col h-full bg-white rounded-lg">
              <div className="h-40 w-full overflow-hidden rounded-t-lg">
                <img 
                  src={resource.image} 
                  alt={resource.alt}
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
      
      {/* Custom scrollbar styling */}
      <style jsx>{`
        .scrollbar-hidden::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
      </div>
    </section>
  );
};

export default Resources;
