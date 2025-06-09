"use client"
import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Heart, Share, ArrowLeft, Check, Calendar, Car, Clock, Info, Calculator } from 'lucide-react';
// import { useProperty } from '../context/PropertyContext';
// import { useAuth } from '../context/AuthContext';
// import toast from 'react-hot-toast';
import { sampleProperties } from '../../data/sampleProperties';
import Footer from '../../components/layout/Footer';
import NavBar from '../../components/layout/NavBar';

// This component is now a Client Component due to "use client"
// To address the error that `params` is a Promise, we will make this component `async`
// and use `React.use()` to unwrap the params object as suggested by the error message.
export default async function PropertyPage({ params }) { // Re-added 'async' keyword
      // As per the error message, `params` is being received as a Promise.
      // Use React.use() to unwrap the Promise in a Client Component.
      const awaitedParams = React.use(params); // Reverted to React.use(params)
      const [activeImage, setActiveImage] = useState(0);
      console.log('🚨 ROUTE PARAMS:', awaitedParams);

      // Assuming sampleProperties is defined elsewhere and imported correctly
      const properties = sampleProperties;
      const property = properties.find(p => p.id === awaitedParams.id);

      // Basic handling if property is not found
      if (!property) {
        return (
          <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold text-gray-700">Property Not Found</h1>
          </div>
        );
      }

      return (
            <>
            {/* NavBar component - assuming its implementation is elsewhere */}
            <NavBar />

<div className="min-h-screen bg-[#121212]">
      {/* Property Gallery */}
      <div className="relative h-[50vh] md:h-[70vh] overflow-hidden bg-[#1A1A1A]">
        {/* <img 
          src={property.images[activeImage]} 
          alt={property.title} 
          className="w-full h-full object-cover"
        /> */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div> */}
        
        {/* Back Button */}
        {/* <Link 
          href="/" 
          className="absolute top-6 left-6 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-colors duration-200 backdrop-blur-sm"
        >
          <ArrowLeft size={24} />
        </Link> */}
        
        {/* Action Buttons */}
        {/* <div className="absolute top-6 right-6 flex space-x-3">
          <button 
            onClick={handleSaveProperty}
            className={`p-2 rounded-full transition-colors duration-200 backdrop-blur-sm ${
              isSaved 
              ? 'bg-red-500/20 text-red-400' 
              : 'bg-black/40 hover:bg-black/60 text-white'
            }`}
            aria-label="Save property"
          >
            <Heart className={`h-6 w-6 ${isSaved ? 'fill-current' : ''}`} />
          </button>
          <button 
            onClick={handleShare}
            className="p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors duration-200 backdrop-blur-sm"
            aria-label="Share property"
          >
            <Share className="h-6 w-6" />
          </button>
        </div> */}
        
        {/* Property Status */}
        {/* <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
          <span className="px-4 py-2 text-sm font-semibold rounded-full bg-purple-600 text-white">
            {property.status === 'for sale' ? 'For Sale' : property.status === 'for rent' ? 'For Rent' : property.status === 'pending' ? 'Pending' : 'Sold'}
          </span>
        </div> */}
        
        {/* Property Price */}
        {/* <div className="absolute bottom-6 left-6 right-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{formatCurrency(property.price)}</h1>
          <div className="flex items-center text-white">
            <MapPin className="h-5 w-5 mr-2 text-purple-400" />
            <span className="text-lg">{property.location}</span>
          </div>
        </div> */}
        
        {/* Thumbnail Navigation */}
        {/* <div className="absolute bottom-6 right-6 hidden md:flex space-x-2">
          {property.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={`h-16 w-24 rounded-md overflow-hidden border-2 transition-all ${
                activeImage === index ? 'border-purple-500 opacity-100' : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <img src={image} alt={`Thumbnail ${index + 1}`} className="h-full w-full object-cover" />
            </button>
          ))}
        </div> */}
      </div>

      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          Main Content
          <div className="lg:col-span-2">
            Property Details
            <div className="bg-[#1A1A1A] rounded-xl overflow-hidden shadow-xl mb-8">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-4">{property.title}</h2>
                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center">
                    <Bed className="h-5 w-5 text-purple-400 mr-2" />
                    <div>
                      <p className="text-white font-medium">{property.bedrooms}</p>
                      <p className="text-gray-500 text-sm">Bedrooms</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-5 w-5 text-purple-400 mr-2" />
                    <div>
                      <p className="text-white font-medium">{property.bathrooms}</p>
                      <p className="text-gray-500 text-sm">Bathrooms</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Square className="h-5 w-5 text-purple-400 mr-2" />
                    <div>
                      <p className="text-white font-medium">{property.area}</p>
                      <p className="text-gray-500 text-sm">Sq Ft</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Car className="h-5 w-5 text-purple-400 mr-2" />
                    <div>
                      <p className="text-white font-medium">{property.garage}</p>
                      <p className="text-gray-500 text-sm">Garage</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-purple-400 mr-2" />
                    <div>
                      <p className="text-white font-medium">{property.yearBuilt}</p>
                      <p className="text-gray-500 text-sm">Year Built</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-800 pt-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Description</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{property.description}</p>
                  
                  Mobile Image Gallery
                  <div className="md:hidden grid grid-cols-2 gap-2 mb-6">
                    {property.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImage(index)}
                        className={`rounded-md overflow-hidden ${
                          activeImage === index ? 'ring-2 ring-purple-500' : ''
                        }`}
                      >
                        <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-32 object-cover" />
                      </button>
                    ))}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3">Features & Amenities</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3">
                    {property.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            Property Location
            <div className="bg-[#1A1A1A] rounded-xl overflow-hidden shadow-xl mb-8">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Location</h3>
                <div className="rounded-lg overflow-hidden h-64 bg-gray-800">
                  Placeholder for map, in a real app you would integrate with Google Maps or similar
                  <div className="w-full h-full flex items-center justify-center bg-[#232323]">
                    <MapPin className="h-12 w-12 text-gray-600 mr-2" />
                    <span className="text-gray-400">Map view would appear here</span>
                  </div>
                </div>
                <p className="mt-4 text-gray-300">
                  <MapPin className="h-5 w-5 text-purple-400 inline mr-2" />
                  {property.location}
                </p>
              </div>
            </div>
          </div>
          
          Sidebar
          <div className="lg:col-span-1">
            Contact Card
            <div className="bg-[#1A1A1A] rounded-xl overflow-hidden shadow-xl sticky top-20">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Interested in this property?</h3>
                
                {!showContactForm ? (
                  <div>
                    <p className="text-gray-300 mb-6">Contact the property owner to schedule a viewing or ask questions.</p>
                    
                    {property.owner && (
                      <div className="flex items-center mb-6 p-4 bg-[#232323] rounded-lg">
                        <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold mr-4">
                          {property.owner.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-white font-medium">{property.owner.name}</p>
                          <p className="text-gray-400 text-sm">{property.owner.email}</p>
                          <p className="text-gray-400 text-sm">{property.owner.phone}</p>
                        </div>
                      </div>
                    )}
                    
                    <button
                      onClick={() => setShowContactForm(true)}
                      className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-200"
                    >
                      Contact Owner
                    </button>
                    
                    <Link
                      to="/mortgage-calculator"
                      className="mt-4 w-full py-3 px-4 bg-transparent border border-purple-600 hover:bg-purple-600/10 text-purple-400 font-medium rounded-lg transition-colors duration-200 flex items-center justify-center"
                    >
                      <Calculator className="mr-2 h-5 w-5" />
                      Calculate Mortgage
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 bg-[#232323] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 bg-[#232323] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-[#232323] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full p-3 bg-[#232323] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      ></textarea>
                    </div>
                    
                    <div className="pt-2 flex space-x-3">
                      <button
                        type="button"
                        onClick={() => setShowContactForm(false)}
                        className="w-1/2 py-3 px-4 bg-[#232323] hover:bg-[#2a2a2a] text-gray-300 font-medium rounded-lg transition-colors duration-200"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="w-1/2 py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-200"
                      >
                        Send Message
                      </button>
                    </div>
                    
                    <div className="pt-2 flex items-start text-xs text-gray-500">
                      <Info className="h-4 w-4 mr-2 flex-shrink-0" />
                      <p>By submitting this form, you agree to our terms and privacy policy.</p>
                    </div>
                  </form>
                )}
              </div>
            </div>
            
            Listed Time
            <div className="mt-6 bg-[#1A1A1A] rounded-lg p-4 flex items-center text-gray-400">
              <Clock className="h-5 w-5 text-purple-400 mr-3" />
              <span>Listed on {new Date(property.createdAt).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
          </div>
        </div>
        
        Similar Properties
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Similar Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties
              .filter(p => p.id !== property.id && p.type === property.type)
              .slice(0, 3)
              .map(similarProperty => (
                <div key={similarProperty.id} className="bg-[#1A1A1A] rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 group">
                  <Link to={`/property/${similarProperty.id}`}>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={similarProperty.images[0]}
                        alt={similarProperty.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <p className="text-white font-bold text-lg">{formatCurrency(similarProperty.price)}</p>
                      </div>
                    </div>
                  </Link>
                  
                  <div className="p-4">
                    <h3 className="text-white font-medium mb-2 group-hover:text-purple-400 transition-colors duration-200">
                      <Link to={`/property/${similarProperty.id}`}>{similarProperty.title}</Link>
                    </h3>
                    <div className="flex items-center text-gray-400 text-sm mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{similarProperty.location}</span>
                    </div>
                    <div className="flex items-center justify-between text-gray-300 text-sm">
                      <div className="flex items-center">
                        <Bed className="h-4 w-4 mr-1" />
                        <span>{similarProperty.bedrooms} bd</span>
                      </div>
                      <div className="flex items-center">
                        <Bath className="h-4 w-4 mr-1" />
                        <span>{similarProperty.bathrooms} ba</span>
                      </div>
                      <div className="flex items-center">
                        <Square className="h-4 w-4 mr-1" />
                        <span>{similarProperty.area} sq ft</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div> */}
</div>
  );
            <Footer />
            </>
      );
    }
    