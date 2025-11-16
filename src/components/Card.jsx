import React from 'react';

function Card({ image, name, description }) {
  return (
    <div className="flex flex-col w-80 overflow-hidden rounded-2xl shadow-lg bg-white 
                    transform transition-all duration-300 hover:scale-105 
                    hover:shadow-2xl hover:bg-gradient-to-br from-blue-50 to-blue-100">

      {/* Top: profile section */}
      <div className="flex items-center gap-4 p-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border-2 border-gray-200 shadow-sm"
        />
        <div>
          <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
          <p className="text-gray-500 text-sm">{description}</p>
        </div>
      </div>

      {/* Large main image */}
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />

      {/* Footer: Like / Comment / Share */}
      <div className="flex justify-around items-center p-3 border-t border-gray-200 text-gray-600 font-medium text-sm">
        <button className="hover:text-blue-600 transition-colors">Like</button>
        <button className="hover:text-blue-600 transition-colors">Comment</button>
        <button className="hover:text-blue-600 transition-colors">Share</button>
      </div>

    </div>
  );
}

export default Card;
