import React from 'react';
import SectionTitle from '../sections/SectionTitle';
import { IoIosArrowForward } from "react-icons/io";


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
    <section id="case-studies" className="py-16 bg-gray-100 relative">
             {/* Right arrow - hidden on mobile, shown on md+ */}
{/* Right arrow - moved more top */}
<div className="absolute -top-24 right-30 w-48 h-64 bg-[url('/home/rightArrow.png')] bg-cover bg-no-repeat opacity-0 md:opacity-100 md:block hidden"></div>

{/* Left arrow - moved more top */}
<div className="absolute -top-24 left-30 w-48 h-48 bg-[url('/home/leftArrow.png')] bg-cover bg-no-repeat opacity-0 md:opacity-100 md:block hidden"></div>

      <div className="container mx-auto px-4">
        <div className="mb-16">
          <div className="relative z-10 mt-16">
            <SectionTitle 
              title={<><span className='font-normal'>Our recent</span><br />Case studies</>} 
              centered 
            />
          </div>
        </div>
        
        <div className="space-y-10 px-4 md:px-16 ">
          {caseStudies.map((study) => (
            <div key={study.id} className="flex flex-col md:flex-row rounded-4xl overflow-hidden">
              <div className="w-full md:w-1/2 h-64 md:h-auto">
               <img src={study.image}
                  className="w-full h-full bg-cover bg-center rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                  />
               </div>
              
              <div 
                className="w-full md:w-1/2 p-6 md:p-16 font-semibold rounded-b-lg md:rounded-r-lg md:rounded-bl-none border border-purple-100"
                style={{ backgroundColor: study.bgColor }}
              >
                <h3 className="text-3xl font-semibold text-gray-700 mb-6 text-center md:text-left">{study.title}</h3>
                <p className="text-[#4A5568] mb-12 font-normal">{study.description}</p>
                
                <div className="flex justify-end ">
                  <button className="flex items-center text-lg gradient-text font-semibold gap-3">
                    Read more
                    <IoIosArrowForward size={24} color='purple' />
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-end mt-10">
          <a href="#" className="flex items-center text-xl gradient-text gap-4 font-semibold">
            Read more case studies
            <IoIosArrowForward size={24} color='purple' />
          </a>
        </div>
        </div>
        
        
      </div>
    </section>
  );
};

export default CaseStudies;
