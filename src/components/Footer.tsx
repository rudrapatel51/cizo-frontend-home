import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 items-start">
          <div>
            <div className="mb-6 flex items-center">
              <img src="/home/svg/logo.png" alt="Logo" className="h-[15.32px] w-[20.09px] align-middle" />
              <span className="font-['Inspiration'] text-[16px] font-medium text-gray-800 ml-1">
                Ik developers
              </span>
            </div>
            <p className="text-gray-600 mb-6 max-w-xs leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <div className="w-36 h-10 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/778a5f27-6a0a-4632-8d32-506271450267.png)] bg-contain bg-no-repeat"></div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-6">Links</h3>
            <nav>
              <ul className="space-y-4 text-gray-600 text-sm">
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

          <div className="h-60 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Contact us</h3>
              <p className="text-gray-600 leading-relaxed max-w-xs text-sm mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <p className="text-gray-600 text-sm">+923183561921</p>
            </div>

            <div className="flex justify-end mt-4">
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 bg-[url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/j8tbMCXTYf.png')] bg-contain bg-no-repeat bg-center"></a>
                <a href="#" className="w-8 h-8 bg-[url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/AXNkZ41Ern.png')] bg-contain bg-no-repeat bg-center"></a>
                <a href="#" className="w-8 h-8 bg-[url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/DJNSjz4EPe.png')] bg-contain bg-no-repeat bg-center"></a>
                <a href="#" className="w-8 h-8 bg-[url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/TNmdzUgoA0.png')] bg-contain bg-no-repeat bg-center"></a>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-200 mt-20 pt-6 text-center">
          <p className="text-sm text-gray-600">© 2023 Copyright by IK Developers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;