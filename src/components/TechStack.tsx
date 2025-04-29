import React, { useState } from 'react';
import SectionTitle from '../sections/SectionTitle';

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

  const techLogos = [
    "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/9Dx5PrxACR.png",
    "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/KU1dzW0U54.png",
    "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/190a5e35-0e39-47a1-a82d-7949414fcc99.png",
    "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/4qYH3QXgbg.png",
    "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/S1jK1RruKx.png",
    "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/ekRmSNtu1V.png",
    "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/sCaGQN81s9.png",
    "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/hbD7zRRCqR.png",
    "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/18df4747-52da-4d5a-9b17-d4e81760dcac.png",
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={<>Our<br />Tech Stack</>} 
          centered 
        />
        
        <div className="mt-10 flex flex-wrap justify-center gap-4 md:gap-8">
          {categories.map(category => (
            <button
              key={category.id}
              className={`text-lg font-medium relative px-2 py-1 ${
                category.active 
                  ? 'text-gray-900 font-semibold' 
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
