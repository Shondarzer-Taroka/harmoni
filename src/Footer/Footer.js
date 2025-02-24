import React from "react";
import { Mail, Copyright } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Exclusive Section */}
        <div>
          <h3 className="text-lg font-semibold">Exclusive</h3>
          <p className="mt-2">Subscribe</p>
          <p className="text-gray-400 text-sm">Get 10% off your first order</p>
          <div className="mt-4 relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 bg-transparent border border-gray-600 rounded-md placeholder-gray-400"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <Mail className="text-white" size={18} />
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-lg font-semibold">Support</h3>
          <p className="text-gray-400 text-sm mt-2">1234, Park Street, DL-11111, India.</p>
          <p className="text-gray-400 text-sm mt-2 underline cursor-pointer">Test@testmail.com</p>
          <p className="text-gray-400 text-sm mt-2">+91-999-999-9999</p>
        </div>

        {/* Account Section */}
        <div>
          <h3 className="text-lg font-semibold">Account</h3>
          <ul className="mt-2 text-gray-400 text-sm space-y-2">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Link</h3>
          <ul className="mt-2 text-gray-400 text-sm space-y-2">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 text-sm mt-12 border-t border-gray-700 pt-4">
        <Copyright size={14} className="inline-block" /> Copyright Harmoni 2025. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
