import { useState, useEffect, useRef } from "react";
import { Code, Smartphone, TestTube, TerminalSquare } from "lucide-react";

const services = [
  {
    icon: <Smartphone className="h-8 w-8 text-purple-600" />,
    title: "Mobile App Development",
    description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
  },
  {
    icon: <Code className="h-8 w-8 text-purple-600" />, 
    title: "Web Design & Development",
    description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
  },
  {
    icon: <TestTube className="h-8 w-8 text-purple-600" />,
    title: "Software Testing Service",
    description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
  },
  {
    icon: <TerminalSquare className="h-8 w-8 text-purple-600" />,
    title: "Software Tech",
    description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
  },
  {
    icon: <Code className="h-8 w-8 text-purple-600" />,
    title: "Web Development",
    description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
  },
];

const ServicesSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0); // 0-based indexing
  const totalSlides = services.length;
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  useEffect(() => {
    if (sliderRef.current) {
      const cardWidth = 280 + 24;
      const scrollAmount = activeSlide * cardWidth;
      sliderRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [activeSlide]);

  const handleDotClick = (index: number) => {
    setActiveSlide(index);
  };

  const progressWidth = `${(activeSlide / (totalSlides - 1)) * 100}%`;

  return (
    <div className="py-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center p-8">Services we offer</h2>
      <div className="container mx-auto px-4">
        <div className="relative">
          <div ref={sliderRef} className="flex overflow-x-hidden pb-6 gap-6">
            {services.map((service, index) => {
              const isActive = index === activeSlide;
              return (
                <div
                  key={index}
                  className={`flex-shrink-0 rounded-lg p-6 shadow-sm transition-all duration-300 bg-white border ${
                    isActive ? "border-purple-600" : "border-gray-100"
                  }`}
                  style={{ width: "280px" }}
                >
                  <div className="flex justify-left mb-4">
                    <div className="bg-purple-100 rounded-full border border-purple-400 p-3">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className={`text-left text-xl font-semibold mb-3 hover:text-purple-600 ${
                    isActive ? "gradient-text" : ""
                  }`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm text-left tracking-widest">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

{/* Dots and progress in a single row */}
<div className="flex justify-center items-center mt-6 gap-9">
  {/* Dots: 1/2 width */}
  <div className="w-1/2 flex justify-end gap-2">
    {Array.from({ length: totalSlides }).map((_, index) => (
      <button
        key={index}
        onClick={() => handleDotClick(index)}
        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
          activeSlide === index ? "bg-purple-600" : "bg-gray-300"
        }`}
        aria-label={`Go to slide ${index + 1}`}
      />
    ))}
  </div>

  {/* Progress: 1/3 width */}
  <div className="w-1/3 flex justify-end">
  <div className="flex items-center gap-2">
    {/* Current slide number */}
    <span className="text-sm text-gray-700 font-medium">
      {activeSlide + 1}
    </span>

    {/* Progress bar */}
    <div className="relative w-20 h-1 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="absolute top-0 left-0 h-1 bg-purple-700 rounded-full transition-all duration-500"
        style={{ width: progressWidth }}
      />
    </div>

    {/* Total slides */}
    <span className="text-sm text-gray-700 font-medium">
      {totalSlides}
    </span>
  </div>
</div>
</div>


        </div>
      </div>
    </div>
  );
};

export default ServicesSlider;
