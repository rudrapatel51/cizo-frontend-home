import React from 'react';
import SectionTitle from '../sections/SectionTitle';

interface CaseStudy {
  id: number;
  title: string;
  description: string;
  image: string;
  bgColor: string;
}

const CaseStudies: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "Website Design for SCFC Canada",
      description: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation.",
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/18fac10c-e45a-492b-9840-d753da9f6fb7.png",
      bgColor: "#f1f1ff"
    },
    {
      id: 2,
      title: "Website Design for SCFC Canada",
      description: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation.",
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/71d1f438-3386-401a-81b2-0dd5de74a51e.png",
      bgColor: "#f0fff7"
    },
    {
      id: 3,
      title: "Website Design for SCFC Canada",
      description: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation.",
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/eeef1161-aa0d-4fa9-84e6-84b3c9d644b2.png",
      bgColor: "#fff4f4"
    }
  ];

  return (
    <section id="case-studies" className="py-16">
      <div className="container mx-auto px-4">
        <div className="relative mb-16">
          <div className="absolute top-0 right-0 w-48 h-64 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/rJH9xuG13O.png)] bg-cover bg-no-repeat opacity-20 md:opacity-100"></div>
          <div className="absolute top-0 left-0 w-48 h-48 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/M5LdgPqxc4.png)] bg-cover bg-no-repeat opacity-20 md:opacity-100"></div>
          
          <div className="relative z-10 mt-16">
            <SectionTitle 
              title={<>Our recent<br />Case studies</>} 
              centered 
            />
          </div>
        </div>
        
        <div className="space-y-10">
          {caseStudies.map((study, index) => (
            <div key={study.id} className="flex flex-col md:flex-row rounded-lg overflow-hidden">
              <div className="w-full md:w-1/2 h-64 md:h-auto">
                <div 
                  className="w-full h-full bg-cover bg-center rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                  style={{ backgroundImage: `url(${study.image})` }}
                ></div>
              </div>
              
              <div 
                className="w-full md:w-1/2 p-6 md:p-10 rounded-b-lg md:rounded-r-lg md:rounded-bl-none border border-purple-100"
                style={{ backgroundColor: study.bgColor }}
              >
                <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center md:text-left">{study.title}</h3>
                <p className="text-gray-600 mb-8">{study.description}</p>
                
                <div className="flex justify-start">
                  <button className="flex items-center text-sm font-semibold">
                    Read more
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-end mt-10">
          <a href="#" className="flex items-center text-xl font-semibold">
            Read more case studies
            <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
