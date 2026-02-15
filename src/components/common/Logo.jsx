import React from 'react';

const Logo = () => (
  <a href="#Home" className="flex items-end space-x-0.5 group">
    <span className="text-4xl font-extrabold tracking-tight text-gray-900 leading-none">ELHODA</span>
    <div className="flex flex-col items-start leading-none -mb-1">
      <span className="text-xs font-semibold text-gray-600 group-hover:text-[#E81729] transition-colors">TRADE &</span>
      <span className="text-xs font-semibold text-[#E81729] group-hover:text-gray-600 transition-colors">SUPPLIES</span>
    </div>
  </a>
);

export default Logo;