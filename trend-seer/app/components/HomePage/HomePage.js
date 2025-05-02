import React from 'react'
import { mockProperties } from "../../data/mockdata";
import { ArrowRight, Home as HomeIcon, TrendingUp, Map, Bell, Search } from 'lucide-react';
import PropertyCard from '../PropertyCard';

export default function HomePage() {
      const properties = mockProperties.slice(0,3);
      console.log(properties)
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] rounded-2xl overflow-hidden bg-gradient-to-r from-[#1A365D] to-[#2C5282]">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-center bg-cover"></div>
        <div className="relative h-full flex flex-col justify-center px-6 md:px-12 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:w-2/3">
            Track Real Estate Trends <span className="text-[#F59E0B]">Like Never Before</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 md:w-2/3">
            Visualize property price changes over time and make informed decisions with real-time market insights.
          </p>
          <div className="md:w-2/3">
          <Search/>
            <input
              type="text"
              placeholder="Search for properties..."
              className="w-[40%] px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] transition duration-200"
            />
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <HomeIcon size={24} />, title: "Track Properties", 
              description: "Monitor price changes for properties you're interested in" },
            { icon: <TrendingUp size={24} />, title: "Visualize Trends", 
              description: "See how property values change over time with interactive charts" },
            { icon: <Map size={24} />, title: "Market Insights", 
              description: "Get detailed insights for specific regions and neighborhoods" },
            { icon: <Bell size={24} />, title: "Price Alerts", 
              description: "Set up notifications for price changes on your favorite properties" }
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-300 hover:shadow-md">
              <div className="p-3 bg-[#EBF4FF] rounded-full inline-block mb-4 text-[#1A365D]">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Properties */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Featured Properties</h2>
          {/* <Link to="/dashboard" className="text-[#0D9488] hover:text-[#0F766E] flex items-center font-medium">
            View all <ArrowRight size={16} className="ml-1" />
          </Link> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#EBF4FF] rounded-2xl p-8 md:p-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A365D] mb-4">
            Ready to make smarter real estate decisions?
          </h2>
          <p className="text-gray-600 mb-6">
            Start tracking properties today and get insights that will help you make better investment choices.
          </p>
          {/* <Link to="/dashboard" className="inline-block bg-[#0D9488] hover:bg-[#0F766E] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
            Get Started
          </Link> */}
        </div>
      </section>
    </div>
  )
}
