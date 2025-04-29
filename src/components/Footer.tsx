import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="mb-6">
              <span className="font-['Inspiration'] text-xl">Ik developers</span>
              <div className="w-24 h-4 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/t4z0ywtFer.png)] bg-contain bg-no-repeat mt-2"></div>
            </div>
            
            <p className="text-gray-600 mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            
            <div className="w-40 h-12 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/778a5f27-6a0a-4632-8d32-506271450267.png)] bg-contain bg-no-repeat"></div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gray-600 mb-6">Links</h3>
            <nav>
              <ul className="space-y-4 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">About Us</a></li>
                <li><a href="#" className="hover:text-gray-900">Services</a></li>
                <li><a href="#" className="hover:text-gray-900">Case Studies</a></li>
                <li><a href="#" className="hover:text-gray-900">How it works</a></li>
                <li><a href="#" className="hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900">Careers</a></li>
                <li><a href="#" className="hover:text-gray-900">Areas We Serve</a></li>
              </ul>
            </nav>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gray-600 mb-6">Contact us</h3>
            <p className="text-gray-600 mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            
            <p className="text-gray-600 mb-8">+923183561921</p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/j8tbMCXTYf.png)] bg-contain bg-no-repeat"></a>
              <a href="#" className="w-8 h-8 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/AXNkZ41Ern.png)] bg-contain bg-no-repeat"></a>
              <a href="#" className="w-8 h-8 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/DJNSjz4EPe.png)] bg-contain bg-no-repeat"></a>
              <a href="#" className="w-8 h-8 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/TNmdzUgoA0.png)] bg-contain bg-no-repeat"></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-16 pt-8 text-center">
          <p className="text-sm text-gray-600">© 2023 Copyright by IK Developers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
