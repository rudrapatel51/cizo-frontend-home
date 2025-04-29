import React from 'react';
import SectionTitle from '../sections/SectionTitle';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  image: string;
  quote: string;
  person: {
    name: string;
    role: string;
    avatar: string;
  };
  reversed?: boolean;
}

const BuildingProcess: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      id: 1,
      title: "Build the right team to scale",
      description: "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers",
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/9ae4e98d-b105-4271-849d-50e78e93ee5c.png",
      quote: "\"Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules\"",
      person: {
        name: "Jeewa markram",
        role: "CEO",
        avatar: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/R4Z2pOYXNb.png"
      }
    },
    {
      id: 2,
      title: "Build the right team to scale",
      description: "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers",
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/635307b0-e0a1-4d33-b9c7-64d8b870e611.png",
      quote: "\"Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules\"",
      person: {
        name: "Jeewa markram",
        role: "CEO",
        avatar: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/cqDKmuC9Jx.png"
      },
      reversed: true
    },
    {
      id: 3,
      title: "Build the right team to scale",
      description: "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers",
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/9daea67a-24ff-439a-9187-48c1214d7c5c.png",
      quote: "\"Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules\"",
      person: {
        name: "Jeewa markram",
        role: "CEO",
        avatar: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/dk31vUqiaw.png"
      }
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={<>Way of building<br />Great Software</>} 
          centered 
        />
        
        <div className="mt-16 space-y-24">
          {steps.map((step) => (
            <div key={step.id} className={`flex flex-col ${step.reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}>
              <div className="w-full md:w-1/2">
                <div className="max-w-lg">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">{step.title}</h3>
                  <p className="text-lg text-gray-700 mb-4">{step.description}</p>
                  
                  <div className="mb-6">
                    <p className="text-lg text-gray-700">
                      Our <span className="font-medium">delivery model</span> helps you cut costs and deliver within budget.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-1 h-20 bg-purple-600 mt-1"></div>
                    <p className="text-base font-light">{step.quote}</p>
                  </div>
                  
                  <div className="flex items-center">
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
              
              <div className="w-full md:w-1/2">
                <div 
                  className="w-full h-64 md:h-96 rounded-lg bg-cover bg-center"
                  style={{ backgroundImage: `url(${step.image})` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuildingProcess;
