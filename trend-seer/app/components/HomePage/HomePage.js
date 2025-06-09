"use client"
import React from 'react';
import Link from 'next/link';
import { Search, Home as HomeIcon, ArrowRight, MapPin, Bed, Bath, Square, Calculator, User } from 'lucide-react';
import { sampleProperties } from '../../data/sampleProperties';
import PropertyCard from '../cards/PropertyCard';
import SearchBar from '../UI/SearchBar';

export default function HomePage() {
      const properties = sampleProperties;
      return (
            <div className="flex flex-col w-full">
              {/* Hero Section */}
              <section className="relative h-[90vh] flex items-center">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#121212] z-10"></div>
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ 
                    backgroundImage: 'url(https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)', 
                    filter: 'brightness(0.4)'
                  }}
                ></div>
                <div className="relative z-20 mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-7xl">
                  <div className="md:max-w-3xl lg:max-w-4xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight ">
                      Find Your Dream Property With Ease
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 ">
                      Browse through thousands of properties and find the perfect home with our advanced search tools and mortgage calculator.
                    </p>
                    <div className="w-full max-w-3xl bg-[#1A1A1A]/90 backdrop-blur-sm rounded-lg shadow-xl p-4 animate-fade-in delay-200">
                      <SearchBar />
                    </div>
                    <div className="mt-8 flex flex-wrap gap-4 animate-fade-in delay-300">
                      <Link 
                        href={"/mortgage-calculator"}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md inline-flex items-center transition-all duration-300 shadow-lg hover:shadow-purple-600/20"
                      >
                        <Calculator size={20} className="mr-2" />
                        Mortgage Calculator
                      </Link>
                      <Link 
                        href={"#"}
                        className="bg-transparent border border-gray-300 text-white hover:bg-white/10 px-6 py-3 rounded-md inline-flex items-center transition-all duration-300"
                      >
                        <User size={20} className="mr-2" />
                        Create Account
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
        
              {/* Featured Properties */}
              <section className="py-16 bg-[#121212]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex justify-between items-center mb-10">
                    <h2 className="text-3xl font-bold text-white">Featured Properties</h2>
                    <Link href="/" className="text-purple-400 hover:text-purple-300 inline-flex items-center transition-colors duration-200">
                      View all
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map((property) => (
                      <PropertyCard key={property.id} property={property} />
                    ))}
                  </div>
                </div>
              </section>
        
              {/* Why Choose Us */}
              <section className="py-16 bg-[#1A1A1A]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">Why Choose EstateEase</h2>
                    <p className="text-gray-400 max-w-3xl mx-auto">
                      We make finding and financing your dream home simple, transparent, and stress-free.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-[#232323] rounded-lg p-6 transition-transform duration-300 hover:transform hover:scale-105">
                      <div className="w-14 h-14 bg-purple-900/30 rounded-full flex items-center justify-center mb-6">
                        <Search className="h-7 w-7 text-purple-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">Advanced Search</h3>
                      <p className="text-gray-400">
                        Find exactly what you're looking for with our powerful search filters and detailed property information.
                      </p>
                    </div>
                    
                    <div className="bg-[#232323] rounded-lg p-6 transition-transform duration-300 hover:transform hover:scale-105">
                      <div className="w-14 h-14 bg-purple-900/30 rounded-full flex items-center justify-center mb-6">
                        <Calculator className="h-7 w-7 text-purple-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">Mortgage Tools</h3>
                      <p className="text-gray-400">
                        Plan your finances with precision using our comprehensive mortgage calculator and loan comparison tools.
                      </p>
                    </div>
                    
                    <div className="bg-[#232323] rounded-lg p-6 transition-transform duration-300 hover:transform hover:scale-105">
                      <div className="w-14 h-14 bg-purple-900/30 rounded-full flex items-center justify-center mb-6">
                        <User className="h-7 w-7 text-purple-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">Personalized Dashboard</h3>
                      <p className="text-gray-400">
                        Keep track of your favorite properties, saved searches, and mortgage calculations in one convenient place.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
        
              {/* Call to Action */}
              <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <h2 className="text-3xl font-bold text-white mb-6">Ready to Find Your Dream Home?</h2>
                  <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
                    Join thousands of satisfied customers who found their perfect property with EstateEase.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link 
                      href={"#"}
                      className="bg-white text-purple-900 hover:bg-purple-100 px-8 py-3 rounded-md inline-flex items-center transition-all duration-300 shadow-xl"
                    >
                      Get Started
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                    <Link 
                         href={"#"}
                      className="bg-transparent border border-white text-white hover:bg-white/10 px-8 py-3 rounded-md inline-flex items-center transition-all duration-300"
                    >
                      Try Mortgage Calculator
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          )
}
