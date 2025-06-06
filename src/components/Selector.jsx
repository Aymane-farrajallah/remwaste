import React, { useState } from 'react';
import { CheckCircle, AlertTriangle } from 'lucide-react';

const SkipSelector = () => {
  const [selectedSkip, setSelectedSkip] = useState(null);

  const skipData = [
    {"id": 17933, "size": 4, "hire_period_days": 14, "transport_cost": null, "per_tonne_cost": null, "price_before_vat": 278, "vat": 20, "postcode": "NR32", "area": "", "forbidden": false, "created_at": "2025-04-03T13:51:46.897146", "updated_at": "2025-04-07T13:16:52.813", "allowed_on_road": true, "allows_heavy_waste": true},
    {"id": 17934, "size": 6, "hire_period_days": 14, "transport_cost": null, "per_tonne_cost": null, "price_before_vat": 305, "vat": 20, "postcode": "NR32", "area": "", "forbidden": false, "created_at": "2025-04-03T13:51:46.897146", "updated_at": "2025-04-07T13:16:52.992", "allowed_on_road": true, "allows_heavy_waste": true},
    {"id": 17935, "size": 8, "hire_period_days": 14, "transport_cost": null, "per_tonne_cost": null, "price_before_vat": 375, "vat": 20, "postcode": "NR32", "area": "", "forbidden": false, "created_at": "2025-04-03T13:51:46.897146", "updated_at": "2025-04-07T13:16:53.171", "allowed_on_road": true, "allows_heavy_waste": true},
    {"id": 17936, "size": 10, "hire_period_days": 14, "transport_cost": null, "per_tonne_cost": null, "price_before_vat": 400, "vat": 20, "postcode": "NR32", "area": "", "forbidden": false, "created_at": "2025-04-03T13:51:46.897146", "updated_at": "2025-04-07T13:16:53.339", "allowed_on_road": false, "allows_heavy_waste": false},
    {"id": 17937, "size": 12, "hire_period_days": 14, "transport_cost": null, "per_tonne_cost": null, "price_before_vat": 439, "vat": 20, "postcode": "NR32", "area": "", "forbidden": false, "created_at": "2025-04-03T13:51:46.897146", "updated_at": "2025-04-07T13:16:53.516", "allowed_on_road": false, "allows_heavy_waste": false},
    {"id": 17938, "size": 14, "hire_period_days": 14, "transport_cost": null, "per_tonne_cost": null, "price_before_vat": 470, "vat": 20, "postcode": "NR32", "area": "", "forbidden": false, "created_at": "2025-04-03T13:51:46.897146", "updated_at": "2025-04-07T13:16:53.69", "allowed_on_road": false, "allows_heavy_waste": false},
    {"id": 17939, "size": 16, "hire_period_days": 14, "transport_cost": null, "per_tonne_cost": null, "price_before_vat": 496, "vat": 20, "postcode": "NR32", "area": "", "forbidden": false, "created_at": "2025-04-03T13:51:46.897146", "updated_at": "2025-04-07T13:16:53.876", "allowed_on_road": false, "allows_heavy_waste": false},
    {"id": 15124, "size": 20, "hire_period_days": 14, "transport_cost": 248, "per_tonne_cost": 248, "price_before_vat": 992, "vat": 20, "postcode": "NR32", "area": "", "forbidden": false, "created_at": "2025-04-03T13:51:40.344435", "updated_at": "2025-04-07T13:16:52.434", "allowed_on_road": false, "allows_heavy_waste": true},
    {"id": 15125, "size": 40, "hire_period_days": 14, "transport_cost": 248, "per_tonne_cost": 248, "price_before_vat": 992, "vat": 20, "postcode": "NR32", "area": "", "forbidden": false, "created_at": "2025-04-03T13:51:40.344435", "updated_at": "2025-04-07T13:16:52.603", "allowed_on_road": false, "allows_heavy_waste": false}
  ];

  const calculateFinalPrice = (priceBeforeVat, vat) => {
    return Math.round(priceBeforeVat * (1 + vat / 100));
  };

  const getSkipImage = (size) => {
    // Generate different skip images based on size
    const colors = ['#F59E0B', '#EF4444', '#10B981', '#3B82F6', '#8B5CF6'];
    const color = colors[size % colors.length];
    
    if (size >= 20) {
      return (
        <div className="w-full h-32 bg-gradient-to-br from-orange-200 to-orange-100 rounded-lg flex items-center justify-center relative overflow-hidden">
          <div 
            className="w-20 h-16 rounded-sm flex items-center justify-center text-white text-xs font-bold transform rotate-12"
            style={{ backgroundColor: color }}
          >
            <div className="flex flex-col items-center">
              <div className="text-[10px] leading-none">WE</div>
              <div className="text-[10px] leading-none">WANT</div>
              <div className="text-[10px] leading-none">WASTE</div>
            </div>
          </div>
          <div 
            className="w-16 h-12 rounded-sm flex items-center justify-center text-white text-xs font-bold absolute right-4"
            style={{ backgroundColor: color }}
          >
            <div className="flex flex-col items-center">
              <div className="text-[8px] leading-none">WE</div>
              <div className="text-[8px] leading-none">WANT</div>
              <div className="text-[8px] leading-none">WASTE</div>
            </div>
          </div>
        </div>
      );
    }
    
    return (
      <div className="w-full h-32 bg-gradient-to-br from-gray-200 to-gray-100 rounded-lg flex items-center justify-center">
        <div 
          className="w-16 h-12 rounded-sm flex items-center justify-center text-white text-xs font-bold"
          style={{ backgroundColor: color }}
        >
          <div className="flex flex-col items-center">
            <div className="text-[8px] leading-none">WE</div>
            <div className="text-[8px] leading-none">WANT</div>
            <div className="text-[8px] leading-none">WASTE</div>
          </div>
        </div>
      </div>
    );
  };


  const SkipCard = ({ skip }) => {
    const finalPrice = calculateFinalPrice(skip.price_before_vat, skip.vat);
    const isSelected = selectedSkip?.id === skip.id;
    
    return (
      <div 
        className={`bg-gray-800 rounded-xl p-4 cursor-pointer transition-all duration-200 hover:bg-gray-700 ${
          isSelected ? 'ring-2 ring-blue-500 bg-gray-700' : ''
        }`}
        onClick={() => setSelectedSkip(skip)}
      >
        <div className="relative mb-4">
          {getSkipImage(skip.size)}
          <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
            {skip.size} Yards
          </div>
          {!skip.allowed_on_road && (
            <div className="absolute bottom-2 left-2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold flex items-center space-x-1">
              <AlertTriangle className="w-3 h-3" />
              <span>Not Allowed On The Road</span>
            </div>
          )}
        </div>
        
        <div className="text-white">
          <h3 className="text-lg font-bold mb-1">{skip.size} Yard Skip</h3>
          <p className="text-gray-400 text-sm mb-3">{skip.hire_period_days} day hire period</p>
          <p className="text-blue-400 text-2xl font-bold mb-4">£{finalPrice}</p>
          
          <button 
            className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
              isSelected 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {isSelected ? 'Selected' : 'Select This Skip'} →
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Choose Your Skip Size
          </h1>
          <p className="text-gray-400 text-lg">
            Select the skip size that best suits your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skipData.map((skip) => (
            <SkipCard key={skip.id} skip={skip} />
          ))}
        </div>
        
        {selectedSkip && (
          <div className="mt-8 bg-gray-800 rounded-xl p-6 max-w-md mx-auto">
            <h3 className="text-white text-lg font-bold mb-2">Selection Summary</h3>
            <div className="text-gray-300 space-y-1">
              <p>Skip Size: {selectedSkip.size} Yards</p>
              <p>Hire Period: {selectedSkip.hire_period_days} days</p>
              <p>Road Placement: {selectedSkip.allowed_on_road ? 'Allowed' : 'Not Allowed'}</p>
              <p>Heavy Waste: {selectedSkip.allows_heavy_waste ? 'Allowed' : 'Not Allowed'}</p>
              <p className="text-blue-400 font-bold text-xl">
                Total: £{calculateFinalPrice(selectedSkip.price_before_vat, selectedSkip.vat)}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkipSelector;