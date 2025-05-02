import React from 'react'
import Link from 'next/link'
import { Menu, Bell, Search, User } from 'lucide-react';

export default function Header({ onMenuClick }) {
  return (
      <header className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* <button 
            //   onClick={onMenuClick}
              className="mr-2 p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 lg:hidden"
            >
              <Menu size={24} />
            </button> */}
            <Link href="#" className="flex items-center">
              <div className="text-2xl font-bold text-[#1A365D] flex items-center">
                <span className="text-[#0D9488]">Trend</span>Seer
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center flex-1 max-w-xs mx-auto">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search properties..."
                className="pl-10 pr-4 py-2 w-full bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-[#1A365D] flex items-center justify-center text-white cursor-pointer">
              <User size={18} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
