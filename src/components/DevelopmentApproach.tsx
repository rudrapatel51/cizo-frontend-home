import React from 'react';
import SectionTitle from '../sections/SectionTitle';
import { approaches } from '../utils/Data';


const DevelopmentApproach: React.FC = () => {

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SectionTitle
            title={<><span className="font-normal">Our design and</span><br /><span className="font-bold">Development approach</span></>}
            centered
          />
        </div>
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {approaches.map((approach) => (
            <div key={approach.id} className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-start space-x-4">
                <div className={`w-16 h-16 rounded-lg ${approach.iconBg} flex items-center justify-center flex-shrink-0`}>
                  <img
                    src={approach.icon}
                    alt={approach.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {approach.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed pb-4">
                    {approach.description.split('UX first').map((part, i, arr) => 
                      i < arr.length - 1 ? 
                        <React.Fragment key={i}>
                          {part}<span className={`font-bold ${approach.textColor}`}>UX first</span>
                        </React.Fragment> : 
                        part
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentApproach;