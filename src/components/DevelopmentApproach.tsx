import React from 'react';
import SectionTitle from '../sections/SectionTitle';

interface ApproachCard {
  id: number;
  title: string;
  description: string;
  icon: string;
  iconBg: string;
}

const DevelopmentApproach: React.FC = () => {
  const approaches: ApproachCard[] = [
    {
      id: 1,
      title: "UX Driven Engineering",
      description: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/524f54f0-782f-4288-9345-eeb0c474c618.png",
      iconBg: "gray-800"
    },
    {
      id: 2,
      title: "Developing Shared Understanding",
      description: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/3fc8b3bd-afda-4bd7-9de0-35654cea43d2.png",
      iconBg: "blue-400"
    },
    {
      id: 3,
      title: "Proven Experience and Expertise",
      description: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/e807db8d-070d-4375-af14-66a06ed6c7f8.png",
      iconBg: "pink-500"
    },
    {
      id: 4,
      title: "Security & Intellectual Property (IP)",
      description: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/abbba058-0678-478d-9fec-c103f77185ca.png",
      iconBg: "green-400"
    },
    {
      id: 5,
      title: "Code Reviews",
      description: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/59977c6a-a344-4c19-8aa1-35ae2a85cd18.png",
      iconBg: "yellow-400"
    },
    {
      id: 6,
      title: "Quality Assurance & Testing",
      description: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/d369cc2c-3c5a-451a-9ffc-169813e7af85.png",
      iconBg: "purple-500"
    }
  ];

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
                <div className={`w-16 h-16 rounded-lg bg-${approach.iconBg} flex items-center justify-center flex-shrink-0`}>
                  <img
                    src={approach.icon}
                    alt={approach.title}
                    className="w-6 h-6 object-contain"
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
                          {part}<span className={`font-bold text-${approach.iconBg}`}>UX first</span>
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