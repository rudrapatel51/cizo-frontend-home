import React from 'react';

const HireBanner: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div 
          className="rounded-2xl bg-cover bg-center py-12 px-6 md:px-12 relative overflow-hidden"
          style={{ backgroundImage: 'url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/f1hQXk416k.png)' }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0 md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                Hire the best developers and designers around!
              </h2>
            </div>
            
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-colors">
                Hire Top Developers
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireBanner;
