import React from 'react'

export default function Footer() {
      return (
            <footer className="bg-white border-t border-gray-200 py-6">
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="text-center md:text-left mb-4 md:mb-0">
                    <div className="text-lg font-bold text-[#1A365D]">
                      <span className="text-[#0D9488]">Trend</span>Seer
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      Helping you make informed real estate decisions
                    </p>
                  </div>
                  
                  <div className="text-sm text-gray-500">
                    {2025} TrendSeer. All rights reserved.
                  </div>
                </div>
              </div>
            </footer>
          );
}
