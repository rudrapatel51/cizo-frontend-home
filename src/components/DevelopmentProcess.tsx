import React from 'react';
import SectionTitle from '../sections/SectionTitle';
import { bottomSteps, topSteps } from '../utils/Data';

const DevelopmentProcess: React.FC = () => {

  const Trophy = () => (
    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
      <div className="text-yellow-400 text-3xl">🏆</div>
    </div>
  );

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={<><span className='font-normal'>How development</span><br />through Alcaline works</>} 
          centered 
        />
        
        <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="relative">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
          {topSteps.map((step) => (
            <div key={step.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-pink-600 font-bold">{step.number}</span>
                <h3 className="font-bold text-gray-900">{step.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="hidden md:block relative h-12">
          <div className="absolute left-0 right-0 top-1/2 h-px bg-pink-300 transform -translate-y-1/2"></div>
          
          {/* Vertical lines */}
          <div className="absolute left-1/12 top-0 bottom-0 w-px bg-pink-300"></div>
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-pink-300"></div>
          <div className="absolute left-5/6 top-0 bottom-0 w-px bg-pink-300"></div>
          
          <Trophy />
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {bottomSteps.map((step) => (
            <div key={step.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-pink-600 font-bold">{step.number}</span>
                <h3 className="font-bold text-gray-900">{step.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* Mobile trophy */}
        <div className="flex justify-center mt-6 md:hidden">
          <div className="text-yellow-400 text-3xl">🏆</div>
        </div>
      </div>
    </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
