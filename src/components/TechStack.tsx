import React, { useState } from 'react';
import SectionTitle from '../sections/SectionTitle';
import { techLogos } from '../utils/Data';

interface TechCategory {
  id: string;
  name: string;
  active: boolean;
}

const TechStack: React.FC = () => {
  const [categories, setCategories] = useState<TechCategory[]>([
    { id: 'backend', name: 'Backend', active: true },
    { id: 'frontend', name: 'Frontend', active: false },
    { id: 'databases', name: 'Databases', active: false },
    { id: 'cms', name: 'CMS', active: false },
    { id: 'cloudtesting', name: 'CloudTesting', active: false },
    { id: 'devops', name: 'DevOps', active: false },
  ]);

  const setActiveCategory = (id: string) => {
    setCategories(
      categories.map(category => ({
        ...category,
        active: category.id === id
      }))
    );
  };

  return (
    <section className="px-6 md:px-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={<><span className='font-normal'>Our</span><br />Tech Stack</>} 
          centered 
        />
        
        <div className="mt-10 flex flex-wrap justify-center gap-4 md:gap-8">
          {categories.map(category => (
            <button
              key={category.id}
              className={`text-lg font-medium relative px-2 py-1 ${
                category.active 
                  ? 'gradient-text font-semibold' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
              {category.active && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-purple-700 rounded"></div>
              )}
            </button>
          ))}
        </div>
        
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
            {techLogos.map((logo, index) => (
              <div 
                key={index}
                className="w-32 h-20 flex items-center justify-center"
              >
                <img 
                  src={logo} 
                  alt={`Technology ${index + 1}`} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
