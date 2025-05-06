import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="w-full">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-500" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter location, property name, or keyword..."
          className="w-full pl-10 pr-20 py-3 bg-[#232323] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            type="button"
            onClick={toggleFilters}
            className="h-full px-4 text-gray-400 hover:text-purple-400 focus:outline-none transition-colors duration-200"
          >
            <Filter className="h-5 w-5" />
          </button>
          <button
            type="submit"
            className="h-full px-5 rounded-r-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors duration-200"
          >
            Search
          </button>
        </div>
      </div>

      {showFilters && (
        <div className="mt-4 p-4 bg-[#232323] rounded-lg border border-gray-700 animate-fade-in">
          {/* Filter UI goes here (you can add the filter components back if needed) */}
          <p className="text-gray-400">Filter options will appear here.</p>
          <div className="mt-4 flex justify-end">
            <button
              type="button"
              onClick={toggleFilters}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors duration-200"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
