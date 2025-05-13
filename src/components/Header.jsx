import React from "react";
import { Mail, Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white w-full border-b border-gray-300 py-2">
      <div className="max-w-[1440px] mx-auto px-4 flex justify-between items-center">
        {/* Left: Logo and Company Info */}
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="S3S Logo" className="w-16 h-16 object-contain" />
          <div>
            <h1 className="text-2xl font-bold text-black leading-tight">
              SECURITY & ALLIED SERVICES
            </h1>
            <p className="text-sm font-bold text-red-600 leading-none">ISO 9001:2015</p>
          </div>
        </div>

        {/* Right: Contact Info + Nav */}
        <div className="flex flex-col items-end space-y-1">
          {/* Contact Info */}
          <div className="flex items-center text-red-600 text-sm font-bold space-x-3">
            <Mail className="w-4 h-4" />
            <span>s3smdu@gmail.com</span>
            <Phone className="w-4 h-4 ml-4" />
            <span>+91 8838676725, 9843359888, 9384576725</span>
          </div>
          {/* Navigation Links */}
          <nav className="flex space-x-6 text-black text-sm font-bold">
            <a href="#">Home</a>
            <a href="#">Service</a>
            <a href="#">Service</a>
            <a href="#">Service</a>
            <a href="#">Contact Us</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
