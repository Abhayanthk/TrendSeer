import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Bed, Bath, Square, Heart, Clock } from 'lucide-react';
export default function PropertyCard({property}) {
      const formatCurrency = (value) => {
            return new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(value);
          };
          
  return (
      <div className="bg-[#1A1A1A] rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/10 group">
      <Link href={"#"}>
        <div className="relative h-56 overflow-hidden">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 text-xs font-medium rounded-md bg-purple-600 text-white">
              {property.status === 'for sale' ? 'For Sale' : property.status === 'for rent' ? 'For Rent' : property.status === 'pending' ? 'Pending' : 'Sold'}
            </span>
          </div>
          {/* <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              saveProperty(property.id);
            }}
            className={`absolute top-3 right-3 p-2 rounded-full transition-colors duration-200 ${
              isSaved 
                ? 'text-red-400 bg-red-400/10' 
                : 'text-gray-400 hover:text-red-400 bg-[#232323] hover:bg-red-400/10'
            }`}
          >
            <Heart className={`h-5 w-5 ${isSaved ? 'fill-current' : ''}`} />
          </button> */}
        </div>
      </Link>
    
      <div className="p-5">
        <span className="text-purple-400 font-bold text-xl">{formatCurrency(property.price)}</span>
        {property.status === 'for rent' && <span className="text-gray-400 text-sm ml-1">/ month</span>}
    
        <h3 className="text-lg font-semibold text-white mt-1 group-hover:text-purple-400 transition-colors duration-200">
          <Link href={"#"}>{property.title}</Link>
        </h3>
    
        <div className="flex items-center text-gray-400 text-sm mt-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{property.location}</span>
        </div>
    
        <div className="flex items-center justify-between mt-4 text-gray-300 text-sm">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            <span>{property.bedrooms} bd</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span>{property.bathrooms} ba</span>
          </div>
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1" />
            <span>{property.area} sq ft</span>
          </div>
        </div>
    
        <div className="mt-4 pt-4 border-t border-gray-800 flex justify-between items-center">
          <div className="flex items-center text-gray-500 text-xs">
            <Clock className="h-3 w-3 mr-1" />
          </div>
          <Link href={"#"} className="text-purple-400 text-sm font-medium hover:text-purple-300 transition-colors duration-200">
            View Details
          </Link>
        </div>
      </div>
    </div>
    
  )
}
