import React from 'react';
import SectionTitle from '../sections/SectionTitle';

interface ApproachCard {
  id: number;
  title: string;
  description: string;
  icon: string;
  iconBg?: string;
}

const DevelopmentApproach: React.FC = () => {
  const approaches: ApproachCard[] = [
    {
      id: 1,
      title: "UX Driven Engineering",
      description: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/524f54f0-782f-4288-9345-eeb0c474c618.png"
    },
    {
      id: 2,
      title: "Developing Shared Understanding",
      description: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/3fc8b3bd-afda-4bd7-9de0-35654cea43d2.png"
    },
    {
      id: 3,
      title: "Proven Experience and Expertise",
      description: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/e807db8d-070d-4375-af14-66a06ed6c7f8.png"
    },
    {
      id: 4,
      title: "Security & Intellectual Property (IP)",
      description: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/abbba058-0678-478d-9fec-c103f77185ca.png"
    },
    {
      id: 5,
      title: "Code Reviews",
      description: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/59977c6a-a344-4c19-8aa1-35ae2a85cd18.png"
    },
    {
      id: 6,
      title: "Quality Assurance & Testing",
      description: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/d369cc2c-3c5a-451a-9ffc-169813e7af85.png"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={<>Our design and<br />development approach</>} 
          centered 
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {approaches.map((approach) => (
            <div key={approach.id} className="bg-white border border-purple-100 rounded-lg p-6 flex">
              <div className="mr-6 mt-2">
                <div className="w-14 h-14 rounded-lg bg-gray-100 flex items-center justify-center">
                  <img 
                    src={approach.icon} 
                    alt={approach.title} 
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{approach.title}</h3>
                <p className="text-gray-600">{approach.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentApproach;
