import React from 'react'
import Link from 'next/link';
import { TrendingUp, TrendingDown, MapPin } from 'lucide-react';
export default function PropertyCard({property}) {
      const priceChange = property.currentPrice - property.previousPrice;
      const percentChange = (priceChange / property.previousPrice) * 100;
      const isPositive = priceChange >= 0;
    
      return (
        <Link
          href= "/#"
          className="block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
        >
          <div className="relative">
            <img
              src={property.imageUrl}
              alt={property.address}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
              {property.type}
            </div>
          </div>
          
          <div className="p-5">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{property.address}</h3>
              <div
                className={`flex items-center ${
                  isPositive ? 'text-emerald-600' : 'text-red-600'
                }`}
              >
                {isPositive ? (
                  <TrendingUp size={16} className="mr-1" />
                ) : (
                  <TrendingDown size={16} className="mr-1" />
                )}
                <span className="font-medium">{percentChange.toFixed(1)}%</span>
              </div>
            </div>
            
            <div className="flex items-center text-gray-500 mb-3">
              <MapPin size={16} className="mr-1" />
              <span className="text-sm">{property.city}, {property.state}</span>
            </div>
            
            <div className="flex justify-between items-center">
              {/* <div>
                <div className="text-lg font-bold text-[#1A365D]">
                  {formatCurrency(property.currentPrice)}
                </div>
                <div className="text-sm text-gray-500">
                  {formatCurrency(property.previousPrice)} prev
                </div>
              </div> */}
              
              <div className="flex space-x-2 text-sm">
                <div className="px-2 py-1 bg-gray-100 rounded-md">
                  {property.bedrooms} beds
                </div>
                <div className="px-2 py-1 bg-gray-100 rounded-md">
                  {property.bathrooms} baths
                </div>
              </div>
            </div>
          </div>
        </Link>
      );
}
