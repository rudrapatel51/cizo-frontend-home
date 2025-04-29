import React, { useState } from 'react';
import SectionTitle from "../sections/SectionTitle"

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
  active: boolean;
}

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: 1,
      name: "Romeena De Silva",
      role: "",
      company: "Janet Cosmetics",
      text: "",
      avatar: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/7t5244NwR6.png",
      active: false
    },
    {
      id: 2,
      name: "Romeena De Silva",
      role: "",
      company: "Janet Cosmetics",
      text: "",
      avatar: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/qxsxb8WbFU.png",
      active: false
    },
    {
      id: 3,
      name: "Imran Khan",
      role: "Software Engineer",
      company: "",
      text: "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I've came across so far. Wouldn't be hesitated to introduce their work to someone else.",
      avatar: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/7eGAmowbDp.png",
      active: true
    },
    {
      id: 4,
      name: "Romeena De Silva",
      role: "",
      company: "Janet Cosmetics",
      text: "",
      avatar: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/pn2qC0EEnD.png",
      active: false
    },
    {
      id: 5,
      name: "Romeena De Silva",
      role: "",
      company: "Janet Cosmetics",
      text: "",
      avatar: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/nu9D4vezoM.png",
      active: false
    }
  ]);

  const setActiveTestimonial = (id: number) => {
    setTestimonials(
      testimonials.map(testimonial => ({
        ...testimonial,
        active: testimonial.id === id
      }))
    );
  };

  const activeTestimonial = testimonials.find(t => t.active);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={<>Why customers love<br />working with us</>} 
          centered 
        />
        
        <div className="mt-12 max-w-3xl mx-auto relative">
          <div className="absolute left-0 top-0">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 25H5V17.5H12.5V25ZM27.5 25H20V17.5H27.5V25Z" fill="#E2E8F0"/>
              <path d="M12.5 25H5V17.5H12.5V25ZM27.5 25H20V17.5H27.5V25Z" stroke="#718096" strokeWidth="2"/>
            </svg>
          </div>
          
          <div className="text-center px-10 md:px-20 py-8">
            <p className="text-lg text-gray-600 leading-relaxed">
              {activeTestimonial?.text || "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I've came across so far. Wouldn't be hesitated to introduce their work to someone else."}
            </p>
          </div>
          
          <div className="absolute right-0 bottom-0">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 25H5V17.5H12.5V25ZM27.5 25H20V17.5H27.5V25Z" fill="#E2E8F0"/>
              <path d="M12.5 25H5V17.5H12.5V25ZM27.5 25H20V17.5H27.5V25Z" stroke="#718096" strokeWidth="2"/>
            </svg>
          </div>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-10">
          {testimonials.map(testimonial => (
            <div 
              key={testimonial.id}
              className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${testimonial.active ? 'scale-110' : 'opacity-70 hover:opacity-100'}`}
              onClick={() => setActiveTestimonial(testimonial.id)}
            >
              <div 
                className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-cover bg-center mb-4 ${testimonial.active ? 'ring-4 ring-purple-600' : ''}`}
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
                <h4 className={`font-semibold ${testimonial.active ? 'text-purple-800 text-lg' : 'text-gray-400 text-base'}`}>
                  {testimonial.name}
                </h4>
                <p className={`text-sm ${testimonial.active ? 'text-black' : 'text-gray-300'}`}>
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
