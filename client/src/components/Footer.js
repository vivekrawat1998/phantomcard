import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div>
            <h2 className="text-xl font-bold text-yellow-400 mb-2">Contact Us</h2>
            <p className="flex items-center space-x-2">
              <FaPhoneAlt className="text-yellow-400" />
              <span>+91 9876543210</span>
            </p>
            <p className="flex items-center space-x-2 mt-2">
              <FaEnvelope className="text-yellow-400" />
              <span>phantomcards@gmail.com</span>
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-yellow-400 mb-2">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-yellow-400 hover:text-yellow-600 transition">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-yellow-400 hover:text-yellow-600 transition">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-yellow-400 hover:text-yellow-600 transition">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center border-t border-gray-700 pt-4">
          <p className="text-gray-400 text-sm">&copy; 2025 Phantom777 PlayingCards. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;