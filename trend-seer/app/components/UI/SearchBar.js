import React, { useState , useEffect} from 'react';
import { Search, Filter } from 'lucide-react';

export default function SearchBar({onSearch}) {
  // State to manage the search query
  const [query, setQuery] = useState('');

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
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onSearch(query); // 💥 Fire the search
            }
          }}        
          placeholder="Enter location, property name, or keyword..."
          className="w-full pl-10 pr-20 py-3 bg-[#232323] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            type="submit"
            className="h-full px-5 rounded-r-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors duration-200"
            onClick = {() => onSearch(query)}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
