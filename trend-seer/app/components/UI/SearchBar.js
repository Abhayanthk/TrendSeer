import React, { useState } from 'react';
import { Search, X } from 'lucide-react';


export default function SearchBar() {
      const [query, setQuery] = useState('');
  
      const handleSubmit = () => {
      e.preventDefault();

      console.log('Searching for:', query);
      };
      return (
            <form onSubmit={handleSubmit} className="relative">
              <div className="relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by address, city, or zip code..."
                  className="w-full py-3 pl-12 pr-12 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D9488] bg-white text-gray-800 placeholder-gray-400 shadow-md"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <Search size={20} className="text-gray-400" />
                </div>
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery('')}
                    className="absolute inset-y-0 right-12 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    <X size={18} />
                  </button>
                )}
                <button
                  type="submit"
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-white bg-[#0D9488] hover:bg-[#0F766E] rounded-r-lg px-4 transition-colors duration-200"
                >
                  Search
                </button>
              </div>
            </form>
  )
}
