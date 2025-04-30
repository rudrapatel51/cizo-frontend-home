import React from 'react';
import { BsGoogle } from 'react-icons/bs';
import { MdPeopleAlt, MdReviews } from 'react-icons/md';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* First Column - Logo and Description */}
          <div>
            <div className="mb-6 flex items-center">
              <img src="/home/svg/logo.png" alt="Logo" className="h-8 w-8 align-middle" />
              <span className="font-['Inspiration'] text-3xl font-medium  text-gray-800 ml-1">
                Ik developers
              </span>
            </div>
            <p className="text-gray-600 mb-6 max-w-xs text-sm leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <div className="flex space-x-2">
              
              <BsGoogle  className='h-4 w-6' />
              <MdPeopleAlt className='h-4 w-6'/>
              <MdReviews className='h-4 w-6'/>              </div>
          </div>

          {/* Second Column - Links */}
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

          {/* Third Column - Contact Info and Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-6">Contact us</h3>
            <p className="text-gray-600 leading-relaxed max-w-xs text-sm mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <p className="text-gray-600 text-sm mb-6">+923183561921</p>
            
            {/* Social Media Icons */}
           
          </div>
          </div>
          <div className="flex item justify-end">
              <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-gray-600">f</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-gray-600">ig</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-gray-600">tw</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-gray-600">in</span>
              </a>
            </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-200 mt-12 pt-6 text-center">
          <p className="text-sm text-gray-600">© 2023 Copyright by IK Developers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;