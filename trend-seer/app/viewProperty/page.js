'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Filter, Grid, List, SlidersHorizontal } from 'lucide-react';
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';
import PropertyCard from '../components/cards/PropertyCard';
import SearchBar from '../components/UI/SearchBar';
import { getAllProperties } from '../data/sampleProperties';

export default function PropertiesPage() {
  const searchParams = useSearchParams();
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('price-asc');
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter states
  const [priceRange, setPriceRange] = useState([0, 10000000]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [bedroomFilter, setBedroomFilter] = useState('');
  const [bathroomFilter, setBathroomFilter] = useState('');
  
  useEffect(() => {
    // Get initial filters from URL params
    const filters = {
      location: searchParams.get('location') || '',
      minPrice: searchParams.get('minPrice') || '',
      maxPrice: searchParams.get('maxPrice') || '',
      bedrooms: searchParams.get('bedrooms') || '',
      type: searchParams.get('type') || ''
    };
    
    const allProperties = getAllProperties(filters);
    setProperties(allProperties);
    setFilteredProperties(allProperties);
    setLoading(false);
  }, [searchParams]);
  
  useEffect(() => {
    let filtered = [...properties];
    
    // Apply price range filter
    filtered = filtered.filter(property => 
      property.price >= priceRange[0] && property.price <= priceRange[1]
    );
    
    // Apply type filter
    if (selectedTypes.length > 0) {
      filtered = filtered.filter(property => 
        selectedTypes.includes(property.type.toLowerCase())
      );
    }
    
    // Apply bedroom filter
    if (bedroomFilter) {
      filtered = filtered.filter(property => 
        property.bedrooms >= parseInt(bedroomFilter)
      );
    }
    
    // Apply bathroom filter
    if (bathroomFilter) {
      filtered = filtered.filter(property => 
        property.bathrooms >= parseInt(bathroomFilter)
      );
    }
    
    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'bedrooms-desc':
          return b.bedrooms - a.bedrooms;
        case 'area-desc':
          return b.area - a.area;
        default:
          return 0;
      }
    });
    
    setFilteredProperties(filtered);
  }, [properties, priceRange, selectedTypes, bedroomFilter, bathroomFilter, sortBy]);
  
  const propertyTypes = ['house', 'apartment', 'condo', 'penthouse', 'villa', 'loft', 'townhouse', 'estate'];
  
  const togglePropertyType = (type) => {
    setSelectedTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };
  
  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <NavBar />
        <div className="pt-24 pb-16 flex items-center justify-center">
          <div className="animate-spin h-8 w-8 border-4 border-primary border-opacity-20 border-t-primary rounded-full"></div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-[#000000ef] text-purple-300">
      <NavBar />
      
      {/* Hero Section */}
      <div className="pt-20 pb-8 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 animate-fade-in">Discover Premium Properties</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-slide-up">
              Browse our exclusive collection of luxury homes and find your perfect property.
            </p>
          </div>
          
          <div className="animate-fade-in">
            <SearchBar />
          </div>
        </div>
      </div>
      
      {/* Filters and Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-4">
            <p className="text-muted-foreground">
              {filteredProperties.length} properties found
            </p>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-md hover:bg-secondary/80 transition-colors lg:hidden"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 bg-secondary border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="bedrooms-desc">Most Bedrooms</option>
                <option value="area-desc">Largest Area</option>
              </select>
            </div>
            
            <div className="flex items-center p-1 bg-secondary rounded-md">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-background' : ''}`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-background' : ''}`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className={`lg:col-span-1 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="glass-card rounded-lg p-6 sticky top-24">
              <h3 className="text-lg font-bold mb-6">Filters</h3>
              
              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>${priceRange[0].toLocaleString()}</span>
                    <span>${priceRange[1].toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="10000000"
                    step="100000"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer"
                  />
                  <input
                    type="range"
                    min="0"
                    max="10000000"
                    step="100000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
              
              {/* Property Types */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Property Type</h4>
                <div className="space-y-2">
                  {propertyTypes.map(type => (
                    <label key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedTypes.includes(type)}
                        onChange={() => togglePropertyType(type)}
                        className="mr-2 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <span className="capitalize text-sm">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Bedrooms */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Bedrooms</h4>
                <select
                  value={bedroomFilter}
                  onChange={(e) => setBedroomFilter(e.target.value)}
                  className="w-full px-3 py-2 bg-secondary border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </div>
              
              {/* Bathrooms */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Bathrooms</h4>
                <select
                  value={bathroomFilter}
                  onChange={(e) => setBathroomFilter(e.target.value)}
                  className="w-full px-3 py-2 bg-secondary border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                </select>
              </div>
              
              <button
                onClick={() => {
                  setPriceRange([0, 10000000]);
                  setSelectedTypes([]);
                  setBedroomFilter('');
                  setBathroomFilter('');
                }}
                className="w-full py-2 px-4 bg-secondary text-foreground rounded-md hover:bg-secondary/80 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>
          
          {/* Properties Grid/List */}
          <div className="lg:col-span-3">
            {filteredProperties.length === 0 ? (
              <div className="text-center py-12">
                <div className="glass-card rounded-lg p-8">
                  <h3 className="text-xl font-bold mb-2">No properties found</h3>
                  <p className="text-muted-foreground">Try adjusting your filters to see more results.</p>
                </div>
              </div>
            ) : (
              <>
                {viewMode === 'grid' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredProperties.map((property, index) => (
                      <div 
                        key={property.id} 
                        className="animate-fade-in" 
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <PropertyCard property={property} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-6">
                    {filteredProperties.map((property, index) => (
                      <div 
                        key={property.id} 
                        className="glass-card rounded-lg p-6 animate-fade-in"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="relative h-48 md:h-32 rounded-lg overflow-hidden">
                            <img
                              src={property.images[0]}
                              alt={property.title}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          
                          <div className="md:col-span-2">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="text-xl font-bold">{property.title}</h3>
                              <span className="text-2xl font-bold text-accent">${property.price.toLocaleString()}</span>
                            </div>
                            
                            <p className="text-muted-foreground mb-4">{property.location}</p>
                            
                            <div className="flex flex-wrap gap-4 mb-4">
                              <span className="text-sm bg-secondary px-3 py-1 rounded-md">
                                {property.bedrooms} Beds
                              </span>
                              <span className="text-sm bg-secondary px-3 py-1 rounded-md">
                                {property.bathrooms} Baths
                              </span>
                              <span className="text-sm bg-secondary px-3 py-1 rounded-md">
                                {property.area} sq ft
                              </span>
                              <span className="text-sm bg-secondary px-3 py-1 rounded-md">
                                {property.type}
                              </span>
                            </div>
                            
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-muted-foreground">
                                ${Math.round(property.price / property.area).toLocaleString()} / sq ft
                              </span>
                              <a
                                href={`/property/${property.id}`}
                                className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                              >
                                View Details
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}