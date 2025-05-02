'use client';
import React from 'react'
import { X, Home, LineChart, Bell, Map, BarChart3, Layers, Settings } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function Sidebar({isOpen, onClose}) {
      // if (!isOpen) return null;
      const pathname = usePathname();
      
      const navItems = [
            { to: '#', icon: <Home size={20} />, label: 'Home' },
            { to: '#', icon: <LineChart size={20} />, label: 'Dashboard' },
            { to: '#', icon: <BarChart3 size={20} />, label: 'Market Insights' },
            { to: '#', icon: <Bell size={20} />, label: 'Price Alerts' },
            { to: '#', icon: <Layers size={20} />, label: 'Compare Properties' },
      ];
      
      const activeClass = "flex items-center p-3 rounded-lg bg-[#1A365D] text-white";
      const inactiveClass = "flex items-center p-3 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors duration-200";
      
      return (
            <div className="fixed inset-0 z-40 lg:static lg:translate-x-0 lg:z-0 transition-transform duration-300 ease-in-out transform translate-x-0 lg:w-60">
          <div className="flex h-full">
            <div className="flex flex-col w-64 bg-white border-r border-gray-200 h-full">
              <div className="flex items-center justify-between px-4 h-16 border-b border-gray-200 lg:hidden">
                <div className="text-xl font-bold text-[#1A365D]">
                  <span className="text-[#0D9488]">Trend</span>Seer
                </div>
                {/* <button 
                  onClick={onClose}
                  className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                  <X size={24} />
                  </button> */}
              </div>
              
              <div className="overflow-y-auto flex-1 p-4">
                <nav className="space-y-2">
                {navItems.map((item, ind) => {
                  const isActive = pathname === item.to;
                  const className = isActive ? activeClass : inactiveClass;

                  return (
                  <Link key={ind} href={item.to} className={className}>
                        {item.icon}
                        <span className="ml-3">{item.label}</span>
                  </Link>
                  );
                  })}
                </nav>
    
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="p-3 text-sm text-gray-500 font-medium">Settings</div>
                  <div className={inactiveClass}>
                    <Settings size={20} />
                    <span className="ml-3">Account Settings</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* <div
              className="flex-1 bg-black bg-opacity-50 lg:hidden"
              onClick={onClose}
            ></div> */}
          </div>
        </div>
      );
}
