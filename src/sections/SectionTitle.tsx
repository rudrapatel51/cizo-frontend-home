import React, { ReactNode } from 'react';

interface SectionTitleProps {
  title: ReactNode;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, centered = true }) => {
  return (
    <div className={`flex flex-col gap-5 ${centered ? 'items-center text-center' : 'items-start'}`}>
      <div className="w-16 h-1 bg-purple-600"></div>
      <h2 className="text-3xl md:text-4xl font-bold leading-tight">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
