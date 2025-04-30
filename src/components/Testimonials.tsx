import { useState, useRef } from 'react';
import { FaQuoteLeft, FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { testimonials as testimonialData, Testimonial } from  "../utils/Data"

const SectionTitle = ({ title, centered }:any) => (
  <div className={`${centered ? 'text-center' : ''} mb-8`}>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
    <div className={`h-1 w-16 bg-purple-600 mt-4 ${centered ? 'mx-auto' : ''}`}></div>
  </div>
);


const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const testimonialContainerRef = useRef(null);
  
  const [testimonials, setTestimonials] = useState<Testimonial[]>(testimonialData);

  const setActiveTestimonial = (index: number) => {
    setCurrentIndex(index);
    setTestimonials(
      testimonials.map((testimonial, idx) => ({
        ...testimonial,
        active: idx === index
      }))
    );
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % testimonials.length;
    setActiveTestimonial(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    setActiveTestimonial(prevIndex);
  };

  const activeTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 lg:pb-36">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={<><span className='font-normal'>Why customers love</span><br />working with us</>} 
          centered 
        />
        
        <div className="mt-12 max-w-3xl mx-auto relative">
          <div className="absolute left-0 top-0 text-purple-600 text-2xl">
            <FaQuoteLeft/>
          </div>
          
          <div className="text-center px-10 md:px-20 py-8">
            <p className="text-lg text-[#718096] leading-loose font-normal">
              {activeTestimonial.text || "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I've came across so far. Wouldn't be hesitated to introduce their work to someone else."}
            </p>
          </div>
          
          <div className="absolute right-0 bottom-0 text-purple-600 text-2xl">
            <FaQuoteRight />
          </div>
        </div>
        
        {/* Navigation buttons */}
        <div className="flex justify-between items-center max-w-7xl mx-auto mt-4">
          <button 
            onClick={handlePrev} 
            className="w-12 h-12 rounded-full flex items-center justify-center border-3 border-purple-600 text-purple-500 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-colors"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="w-4 h-4" />
          </button>
          
          <button 
            onClick={handleNext} 
            className="w-12 h-12 rounded-full flex items-center justify-center border-3 border-purple-600 text-purple-500 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-colors"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        {/* Testimonial avatars */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-10" ref={testimonialContainerRef}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${index === currentIndex ? 'scale-110' : 'opacity-70 hover:opacity-100'}`}
              onClick={() => setActiveTestimonial(index)}
            >
              <div 
                className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-cover bg-center mb-4 ${index === currentIndex ? 'ring-4 ring-purple-600' : ''}`}
                style={{ backgroundImage: `url(${testimonial.avatar})` }}
              ></div>
              
              <div className="flex mb-2">
                {[1, 2, 3, 4, 5].map(star => (
                  <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              
              <div className="text-center">
                <h4 className={`font-semibold ${index === currentIndex ? 'text-purple-800 text-lg' : 'text-gray-400 text-base'}`}>
                  {testimonial.name}
                </h4>
                <p className={`text-sm ${index === currentIndex ? 'text-black' : 'text-gray-400'}`}>
                  {testimonial.role || testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;