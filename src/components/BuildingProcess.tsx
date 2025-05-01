import React from 'react';
import SectionTitle from '../sections/SectionTitle';
import { steps } from '../utils/Data';

const BuildingProcess: React.FC = () => {
  return (
    <section className="px-4 py-6 md:py-16 md:px-24">
      <div className="container mx-auto px-4">
        {/* Section Title with AOS */}
        <div data-aos="fade-up">
          <SectionTitle 
            title={<><span className='font-normal'>Way of building</span><br />Great Software</>} 
            centered 
          />
        </div>

        <div className="mt-16 space-y-24">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex flex-col ${step.reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}
              data-aos={step.reversed ? "fade-left" : "fade-right"}
              data-aos-delay={`${index * 150}`}
            >
              {/* Text Column */}
              <div className="w-full md:w-1/2">
                <div className="max-w-lg" data-aos="fade-up" data-aos-delay="300">
                  <h3 className="text-3xl font-bold text-black mb-6">{step.title}</h3>
                  <p className="text-lg text-[#2D3748] mb-4">{step.description}</p>

                  <div className="mb-6">
                    <p className="text-lg text-[#2D3748]">
                      Our <span className="font-medium gradient-text">delivery model</span> helps you cut costs and deliver within budget.
                    </p>
                  </div>

                  <div className="flex items-start gap-4 mb-8" data-aos="fade-up" data-aos-delay="400">
                    <div
                      className="w-1 h-20 mt-1"
                      style={{ background: 'linear-gradient(to bottom, #F76680, #57007B)' }}
                    ></div>
                    <p className="text-base font-light gradient-text">{step.quote}</p>
                  </div>

                  <div className="flex items-center" data-aos="fade-up" data-aos-delay="500">
                    <div
                      className="w-10 h-10 rounded-full bg-cover bg-center mr-3"
                      style={{ backgroundImage: `url(${step.person.avatar})` }}
                    ></div>
                    <div>
                      <p className="font-medium text-gray-800">{step.person.name}</p>
                      <p className="text-sm text-gray-500">{step.person.role}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Column */}
              <div
                className="w-full md:w-1/2"
                data-aos={step.reversed ? "fade-right" : "fade-left"}
                data-aos-delay="200"
              >
                <img
                  src={step.image}
                  className="w-full h-64 md:h-96 rounded-lg object-contain"
                  alt={step.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuildingProcess;
