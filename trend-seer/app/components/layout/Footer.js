import React from 'react'
import Link from 'next/link';
import { Home, Mail, Phone, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
      return (
            <footer className="bg-[#1A1A1A] border-t border-gray-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="col-span-1 md:col-span-1">
                    <Link href="/" className="flex items-center mb-4">
                      <Home className="h-8 w-8 text-purple-500" />
                      <span className="ml-2 text-xl font-semibold text-white">EstateEase</span>
                    </Link>
                    <p className="text-gray-400 text-sm">
                      Your trusted partner in finding the perfect property and planning your mortgage.
                    </p>
                    <div className="flex space-x-4 mt-6">
                      <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                        <Facebook size={20} />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                        <Twitter size={20} />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                        <Instagram size={20} />
                      </a>
                    </div>
                  </div>
                  
                  <div className="col-span-1">
                    <h3 className="text-white font-medium mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Home</Link>
                      </li>
                      <li>
                        <Link href="/mortgage-calculator" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Mortgage Calculator</Link>
                      </li>
                      <li>
                        <Link href="/auth" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Login / Register</Link>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="col-span-1">
                    <h3 className="text-white font-medium mb-4">Resources</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Help Center</a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Mortgage Guide</a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Property Tips</a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Blog</a>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="col-span-1">
                    <h3 className="text-white font-medium mb-4">Contact Us</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <Mail className="h-5 w-5 text-purple-500 mr-3 mt-0.5" />
                        <span className="text-gray-400">support@estateease.com</span>
                      </li>
                      <li className="flex items-start">
                        <Phone className="h-5 w-5 text-purple-500 mr-3 mt-0.5" />
                        <span className="text-gray-400">+1 (555) 123-4567</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="border-t border-gray-800 mt-12 pt-8">
                  <p className="text-gray-500 text-sm text-center">
                    © {new Date().getFullYear()} EstateEase. All rights reserved.
                  </p>
                </div>
              </div>
            </footer>
          );
}
