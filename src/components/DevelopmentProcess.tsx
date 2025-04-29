import React from 'react';
import SectionTitle from '../sections/SectionTitle';

interface ProcessStep {
  id: number;
  number: string;
  title: string;
  description: string;
}

const DevelopmentProcess: React.FC = () => {
  const topSteps: ProcessStep[] = [
    {
      id: 1,
      number: "#1",
      title: "Assemble the right team",
      description: "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do."
    },
    {
      id: 3,
      number: "#3",
      title: "Tech architecture",
      description: "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently"
    },
    {
      id: 5,
      number: "#5",
      title: "Code reviews",
      description: "Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells"
    }
  ];

  const bottomSteps: ProcessStep[] = [
    {
      id: 2,
      number: "#2",
      title: "Sprint planning",
      description: "Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding."
    },
    {
      id: 4,
      number: "#4",
      title: "Standups & weekly demos",
      description: "Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns."
    },
    {
      id: 6,
      number: "#6",
      title: "Iterative delivery",
      description: "We divide the implementation process into several checkpoints rather than a single deadline."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={<>How development<br />through Alcaline works</>} 
          centered 
        />
        
        <div className="mt-16 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topSteps.map((step) => (
              <div key={step.id} className="bg-white border border-purple-100 rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <span className="text-lg font-bold mr-2">{step.number}</span>
                  <h3 className="text-lg font-bold text-gray-800">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="hidden md:block h-16 relative my-4">
            <div className="absolute left-1/6 top-0 w-0.5 h-8 bg-gray-300"></div>
            <div className="absolute left-1/2 top-0 w-0.5 h-8 bg-gray-300"></div>
            <div className="absolute left-5/6 top-0 w-0.5 h-8 bg-gray-300"></div>
            
            <div className="absolute w-full h-0.5 bg-gray-300 top-1/2"></div>
            
            <div className="absolute left-1/6 bottom-0 w-0.5 h-8 bg-gray-300"></div>
            <div className="absolute left-1/2 bottom-0 w-0.5 h-8 bg-gray-300"></div>
            <div className="absolute left-5/6 bottom-0 w-0.5 h-8 bg-gray-300"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bottomSteps.map((step) => (
              <div key={step.id} className="bg-white border border-purple-100 rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <span className="text-lg font-bold mr-2">{step.number}</span>
                  <h3 className="text-lg font-bold text-gray-800">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
