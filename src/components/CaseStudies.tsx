import React from 'react';
import SectionTitle from '../sections/SectionTitle';
import { IoIosArrowForward } from "react-icons/io";
import { caseStudies } from '../utils/Data';

const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="py-16 bg-gray-100 relative">

      {/* Decorative Arrows */}
      <div
        className="absolute -top-24 right-30 w-48 h-64 bg-[url('/home/rightArrow.png')] bg-cover bg-no-repeat opacity-0 md:opacity-100 md:block hidden"
        data-aos="fade-left"
        data-aos-delay="100"
      ></div>
      <div
        className="absolute -top-24 left-30 w-48 h-48 bg-[url('/home/leftArrow.png')] bg-cover bg-no-repeat opacity-0 md:opacity-100 md:block hidden"
        data-aos="fade-right"
        data-aos-delay="100"
      ></div>

      <div className="container mx-auto px-4">
        <div className="mb-16">
          <div className="relative z-10 mt-16">
            <div data-aos="fade-up">
              <SectionTitle 
                title={<><span className='font-normal'>Our recent</span><br />Case studies</>} 
                centered 
              />
            </div>
          </div>
        </div>

        <div className="space-y-10 px-4 md:px-16">
          {caseStudies.map((study, idx) => (
            <div
              key={study.id}
              className="flex flex-col md:flex-row rounded-4xl overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={`${idx * 100}`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 h-64 md:h-auto">
                <img
                  src={study.image}
                  className="w-full h-full bg-cover bg-center rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                  alt={study.title}
                />
              </div>

              {/* Content */}
              <div
                className="w-full md:w-1/2 p-6 md:p-16 font-semibold rounded-b-lg md:rounded-r-lg md:rounded-bl-none border border-purple-100"
                style={{ backgroundColor: study.bgColor }}
              >
                <h3 className="text-3xl font-semibold text-gray-700 mb-6 text-center md:text-left">
                  {study.title}
                </h3>
                <p className="text-[#4A5568] mb-12 font-normal">{study.description}</p>
                <div className="flex justify-end">
                  <button className="flex items-center text-lg gradient-text font-semibold gap-3">
                    Read more
                    <IoIosArrowForward size={24} color='purple' />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Bottom Link */}
          <div
            className="flex justify-end mt-10"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a href="#" className="flex items-center text-xl gradient-text gap-4 font-semibold">
              Read more case studies
              <IoIosArrowForward size={24} color='purple' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
