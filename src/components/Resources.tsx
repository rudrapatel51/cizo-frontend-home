import React from 'react';
import SectionTitle from '../sections/SectionTitle';

interface Resource {
  id: number;
  title: string;
  image: string;
}

const Resources: React.FC = () => {
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
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={<>Featured<br />Resources</>} 
          centered 
        />
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource) => (
            <div key={resource.id} className="flex flex-col h-full">
              <div 
                className="w-full h-44 bg-cover bg-center rounded-lg mb-4"
                style={{ backgroundImage: `url(${resource.image})` }}
              ></div>
              
              <div className="flex-grow">
                <h3 className="text-base font-medium text-gray-700 mb-4">{resource.title}</h3>
              </div>
              
              <div className="flex justify-end mt-4">
                <button className="flex items-center text-purple-800 font-medium">
                  Read More
                  <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
