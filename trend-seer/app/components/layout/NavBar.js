'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, Calculator, Menu, X, LogOut } from 'lucide-react';

const NavBar = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const location = usePathname();
      const closeMenu = () => {
        setIsMenuOpen(false);
      };
    

      const navLinks = [
            { path: '/', name: 'Home', icon: <Home size={20} /> },
            { path: '/mortgage-calculator', name: 'Mortgage Calculator', icon: <Calculator size={20} /> }
          ];
      return (
            <nav className="bg-[#1A1A1A] sticky top-0 z-50 border-b border-gray-800 shadow-md">
              <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                  <div className="flex items-center">
                    <Link href="#" className="flex items-center" onClick={closeMenu}>
                      <Home className="h-8 w-8 text-purple-500" />
                      <span className="ml-2 text-xl font-semibold text-white hover:text-purple-500">TrendSeer</span>
                    </Link>
                  </div>
         
         
                  {/* Desktop Navigation */}
                  <div className="hidden md:flex md:items-center md:space-x-8">
                    {navLinks.map((link) => (
                      <Link
                        key={link.path}
                        href={"#"}
                        className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 
                          ${location.pathname === link.path 
                            ? 'text-purple-400 bg-[#232323]' 
                            : 'text-gray-300 hover:text-purple-400 hover:bg-[#232323]'
                          }`}
                      >
                        {link.icon}
                        <span className="ml-2">{link.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>
          );
};

export default NavBar;