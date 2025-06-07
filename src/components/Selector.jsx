import React, { useState } from 'react';
import { Calendar, Truck, CheckCircle, XCircle, MapPin } from 'lucide-react';
import image from '../assets/skiphire.png'

const SkipHireCard = ({ skipData, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Different skip container images based on size
  const getSkipImage = (size) => {
    const images = {
      4: image,
      6: image, 
      8: image,
      10: image,
      12: image,
      14: image,
      16: image,
      20: image,
      40: image
    };
    return images[size] || images[8]; // fallback to 8m³ image
  };

  return (
    <div 
      className={`relative w-80 h-96 bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl ${
        isHovered ? 'hover:w-[600px] z-50' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        zIndex: isHovered ? 50 : 1 + index,
        position: isHovered ? 'relative' : 'static'
      }}
    >
      {/* Image Section */}
      <div className={`relative transition-all duration-700 ease-in-out ${isHovered ? 'w-1/3' : 'w-full'} h-full float-left overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 flex flex-col">
          {/* Header - with padding */}
          <div className="flex justify-between items-center mb-4 px-6 pt-6">
            <div className="text-black">
              {/* <h3 className="text-xl font-bold">Skip Hire</h3> */}
            </div>
            {/* Size indicator */}
            <div className="transform -translate-x-1/2 w-12 h-6 bg-white text-gray-600 px-4 py-1 rounded-full text-xs font-bold">
              {skipData.size}m³
            </div>
          </div>
          
          {/* Skip Container Image - no padding, extends beyond frame */}
          <div className="flex-1 flex items-center justify-center mb-4 relative overflow-visible">
            <div className="relative -ml-12 -mr-6 -mt-8 -mb-4">
              <img 
                src={getSkipImage(skipData.size)}
                alt={`${skipData.size}m³ Skip Container`}
                className={`rounded-lg shadow-2xl object-cover transform hover:scale-110 transition-transform duration-500 relative z-10`}
              />
            </div>
          </div>

          {/* Compact Info - with padding */}
          <div className={`transition-opacity duration-300 px-6 pb-6 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
            <div className="text-white text-center">
              <p className="text-2xl font-bold mb-1">£{skipData.price_before_vat}</p>
              <p className="text-white text-sm">{skipData.hire_period_days} days hire</p>
              <p className="text-white text-xs">Skip Hire</p>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Info Panel */}
      <div className={`transition-all duration-700 ease-in-out ${isHovered ? 'w-2/3 opacity-100' : 'w-0 opacity-0'} h-full bg-white overflow-hidden float-right`}>
        <div className="p-6 h-full flex flex-col overflow-y-auto">
          {/* Header */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-2xl font-bold text-gray-800">{skipData.size}m³ Skip</h2>
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                AVAILABLE
              </span>
            </div>
            <p className="text-gray-600 text-sm">Waste Container Rental</p>
          </div>

          {/* Container Details */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">CONTAINER DETAILS</h3>
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-center mb-2">
                <span className="text-3xl font-bold text-gray-600">{skipData.size}m³</span>
                <p className="text-sm text-gray-600">Container Size</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">HIRE DETAILS</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gray-500" />
                  <span className="text-sm font-medium text-gray-700">Hire Period</span>
                </div>
                <span className="text-sm font-bold text-gray-800">{skipData.hire_period_days} days</span>
              </div>
              
              <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-gray-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">m³</span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Container Size</span>
                </div>
                <span className="text-sm font-bold text-gray-800">{skipData.size}m³</span>
              </div>

              {/* Additional Details */}
              <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className={`w-5 h-5 ${skipData.allowed_on_road ? 'text-green-500' : 'text-red-500'}`} />
                  <span className="text-sm font-medium text-gray-700">Road Placement</span>
                </div>
                <span className={`text-sm font-bold ${skipData.allowed_on_road ? 'text-green-600' : 'text-red-600'}`}>
                  {skipData.allowed_on_road ? 'Allowed' : 'Not Allowed'}
                </span>
              </div>

              <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <Truck className={`w-5 h-5 ${skipData.allows_heavy_waste ? 'text-green-500' : 'text-red-500'}`} />
                  <span className="text-sm font-medium text-gray-700">Heavy Waste</span>
                </div>
                <span className={`text-sm font-bold ${skipData.allows_heavy_waste ? 'text-green-600' : 'text-red-600'}`}>
                  {skipData.allows_heavy_waste ? 'Allowed' : 'Not Allowed'}
                </span>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="mt-4 flex-shrink-0">
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Total Price</p>
                <p className="text-3xl font-bold text-gray-600">£{skipData.price_before_vat}</p>
                <p className="text-xs text-gray-500 mt-1">For {skipData.hire_period_days} days</p>
                <p className="text-xs text-gray-500">+ VAT ({skipData.vat}%)</p>
              </div>
            </div>
            
            <button className="w-full bg-gray-500 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkipHireCardsGrid = () => {
  const skipData = [
    {"id": 17933,"size": 4,"hire_period_days": 14,"transport_cost": null,"per_tonne_cost": null,"price_before_vat": 278,"vat": 20,"postcode": "NR32","area": "","forbidden": false,"created_at": "2025-04-03T13:51:46.897146","updated_at": "2025-04-07T13:16:52.813","allowed_on_road": true,"allows_heavy_waste": true},
    {"id": 17934,"size": 6,"hire_period_days": 14,"transport_cost": null,"per_tonne_cost": null,"price_before_vat": 305,"vat": 20,"postcode": "NR32","area": "","forbidden": false,"created_at": "2025-04-03T13:51:46.897146","updated_at": "2025-04-07T13:16:52.992","allowed_on_road": true,"allows_heavy_waste": true},
    {"id": 17935,"size": 8,"hire_period_days": 14,"transport_cost": null,"per_tonne_cost": null,"price_before_vat": 375,"vat": 20,"postcode": "NR32","area": "","forbidden": false,"created_at": "2025-04-03T13:51:46.897146","updated_at": "2025-04-07T13:16:53.171","allowed_on_road": true,"allows_heavy_waste": true},
    {"id": 17936,"size": 10,"hire_period_days": 14,"transport_cost": null,"per_tonne_cost": null,"price_before_vat": 400,"vat": 20,"postcode": "NR32","area": "","forbidden": false,"created_at": "2025-04-03T13:51:46.897146","updated_at": "2025-04-07T13:16:53.339","allowed_on_road": false,"allows_heavy_waste": false},
    {"id": 17937,"size": 12,"hire_period_days": 14,"transport_cost": null,"per_tonne_cost": null,"price_before_vat": 439,"vat": 20,"postcode": "NR32","area": "","forbidden": false,"created_at": "2025-04-03T13:51:46.897146","updated_at": "2025-04-07T13:16:53.516","allowed_on_road": false,"allows_heavy_waste": false},
    {"id": 17938,"size": 14,"hire_period_days": 14,"transport_cost": null,"per_tonne_cost": null,"price_before_vat": 470,"vat": 20,"postcode": "NR32","area": "","forbidden": false,"created_at": "2025-04-03T13:51:46.897146","updated_at": "2025-04-07T13:16:53.69","allowed_on_road": false,"allows_heavy_waste": false},
    {"id": 17939,"size": 16,"hire_period_days": 14,"transport_cost": null,"per_tonne_cost": null,"price_before_vat": 496,"vat": 20,"postcode": "NR32","area": "","forbidden": false,"created_at": "2025-04-03T13:51:46.897146","updated_at": "2025-04-07T13:16:53.876","allowed_on_road": false,"allows_heavy_waste": false},
    {"id": 15124,"size": 20,"hire_period_days": 14,"transport_cost": 248,"per_tonne_cost": 248,"price_before_vat": 992,"vat": 20,"postcode": "NR32","area": "","forbidden": false,"created_at": "2025-04-03T13:51:40.344435","updated_at": "2025-04-07T13:16:52.434","allowed_on_road": false,"allows_heavy_waste": true},
    {"id": 15125,"size": 40,"hire_period_days": 14,"transport_cost": 248,"per_tonne_cost": 248,"price_before_vat": 992,"vat": 20,"postcode": "NR32","area": "","forbidden": false,"created_at": "2025-04-03T13:51:40.344435","updated_at": "2025-04-07T13:16:52.603","allowed_on_road": false,"allows_heavy_waste": false}
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Skip Hire Services</h1>
          <p className="text-gray-600">Choose the perfect waste container for your project</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center relative">
          {skipData.map((skip, index) => (
            <SkipHireCard 
              key={skip.id} 
              skipData={skip} 
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkipHireCardsGrid;