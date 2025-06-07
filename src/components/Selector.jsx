import React, { useState , useEffect } from 'react';
import { Calendar, Truck, CheckCircle, XCircle, MapPin } from 'lucide-react';
import skipData from '../data/data.json'
import image4 from '../assets/4yarder-skip.png'
import image6 from '../assets/6-yarder-skip.png'
import image8 from '../assets/8-yarder-skip.png'
import image10 from '../assets/10-yarder-skip.png'
import image12 from '../assets/12-yarder-skip.png'
import image14 from '../assets/14-yarder-skip.png'
import image16 from '../assets/16-yarder-skip.png'
import image20 from '../assets/20-yarder-skip.png'
import image40 from '../assets/40-yarder-skip.png'

  const getSkipImage = (size) => {
    const images = {
      4: image4,
      6: image6, 
      8: image8,
      10: image10,
      12: image12,
      14: image14,
      16: image16,
      20: image20,
      40: image40
    };
    return images[size] || images[8]; // fallback to 8Yard image
  };

const SkipHireCard = ({ skipData, index, isAnyHovered, isThisHovered, onHover, onLeave, isMobile }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = () => {
    if (isMobile) {
      setIsClicked(!isClicked);
    }
  };

  return (
    <div 
      className={`relative ${isMobile ? 'w-full max-w-sm mx-auto' : 'w-80'} ${
        isMobile && isClicked ? 'h-auto' : 'h-96'
      } bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl ${
        !isMobile && isThisHovered ? 'hover:w-[600px] z-50' : ''
      } ${!isMobile && isAnyHovered && !isThisHovered ? 'blur-sm scale-95 opacity-70' : ''}`}
      onMouseEnter={!isMobile ? onHover : undefined}
      onMouseLeave={!isMobile ? onLeave : undefined}
      onClick={handleCardClick}
      style={{ 
        zIndex: (!isMobile && isThisHovered) ? 50 : 1 + index,
        position: (!isMobile && isThisHovered) ? 'relative' : 'static'
      }}
    >
      {/* Image Section - Made wider */}
      <div className={`relative transition-all duration-700 ease-in-out ${
        isMobile ? 'w-full' : (isThisHovered ? 'w-2/5' : 'w-full')
      } ${isMobile && isClicked ? 'h-64' : 'h-full'} float-left overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 flex flex-col">
          {/* Header - with padding */}
          <div className="flex justify-between items-center mb-4 pt-5 px-4">
            <div className="text-black">
              {/* <h3 className="text-xl font-bold">Skip Hire</h3> */}
            </div>

            {/* Size indicator */}
            <div className={` transform ml-48 -translate-x-1/2 w-16 h-6 text-center bg-white text-gray-600 rounded-full text-md font-bold ${
              (isMobile ? isClicked : isThisHovered) ? 'opacity-0' : 'opacity-100'
            }`}>
              {skipData.size} Yard
            </div>

            {/* Warning icon - only show if not allowed on road */}
            {!skipData.allowed_on_road && (
              <div className="text-yellow-400 w-6 h-6 flex items-center justify-center font-bold text-lg" title="Not allowed on road">
                ⚠
              </div>
            )}
          </div>
          
          <div className="flex-1 flex items-center justify-center mb-4 relative overflow-visible">
            <div className="relative -mt-8 -mb-4">
              <img 
                src={getSkipImage(skipData.size)}
                alt={`${skipData.size}Yard Skip Container`}
                className={`rounded-lg shadow-2xl object-cover transform hover:scale-110 transition-transform duration-500 relative z-10 w-64 h-48`}
              />
            </div>
          </div>

          {/* Compact Info - with padding */}
          <div className={`transition-opacity duration-300 px-6 pb-6 ${
            (isMobile ? isClicked : isThisHovered) ? 'opacity-0' : 'opacity-100'
          }`}>
            <div className="text-white text-center">
              <p className="text-2xl font-bold mb-1">£{skipData.price_before_vat}</p>
              <p className="text-white text-sm">{skipData.hire_period_days} days hire</p>          
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Info Panel - Made narrower to accommodate wider image */}
      <div className={`transition-all duration-700 ease-in-out ${
        isMobile 
          ? (isClicked ? 'w-full opacity-100 h-auto' : 'w-0 opacity-0 h-0') 
          : (isThisHovered ? 'w-3/5 opacity-100' : 'w-0 opacity-0')
      } ${isMobile ? '' : 'h-full'} bg-white overflow-hidden ${
        isMobile ? 'relative clear-both' : 'float-right'
      }`}>
        <div className={`p-6 ${isMobile ? 'h-auto' : 'h-full'} flex flex-col ${isMobile ? '' : 'overflow-y-auto'}`}>
          {/* Header */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-2xl font-bold text-gray-800">{skipData.size} Yard Skip</h2>
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
                <span className="text-3xl font-bold text-gray-600">{skipData.size} Yard</span>
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
                    <span className="text-white text-xs font-bold">Y</span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Container Size</span>
                </div>
                <span className="text-sm font-bold text-gray-800">{skipData.size} Yard</span>
              </div>

              {/* Additional Details */}
              <div className={`flex items-center justify-between rounded-lg p-3 ${!skipData.allowed_on_road ? 'bg-yellow-50 border border-yellow-200' : 'bg-gray-50'}`}>
                <div className="flex items-center gap-2">
                  {skipData.allowed_on_road ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <div className="flex items-center gap-1">
                      <XCircle className="w-5 h-5 text-red-500" />
                      <div className="w-4 h-4 text-yellow-500 flex items-center justify-center text-xs font-bold">⚠</div>
                    </div>
                  )}
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
          <div className={`${isMobile ? 'mt-2' : 'mt-4'} flex-shrink-0`}>
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
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen bg-[#f9fafb] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Choose Your Skip Size</h1>
          <p className="text-gray-600">Select the skip size that best suits your needs</p>
        </div>
        
        <div className={`grid grid-cols-1 ${isMobile ? 'gap-4' : 'md:grid-cols-2 xl:grid-cols-3 gap-8'} justify-items-center relative`}>
          {skipData.map((skip, index) => (
            <SkipHireCard 
              key={skip.id} 
              skipData={skip} 
              index={index}
              isAnyHovered={hoveredCard !== null}
              isThisHovered={hoveredCard === skip.id}
              onHover={() => setHoveredCard(skip.id)}
              onLeave={() => setHoveredCard(null)}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkipHireCardsGrid;