import React from 'react'

function Card({ image, name, description }) {
  return (
    <div className='flex justify-center bg-gray-400 gap-2'>
        <div className="flex flex-col border rounded-2xl p-4 gap-4 shadow-lg hover:shadow-2xl transition-all bg-white w-[300px]">

      {/* Small profile section */}
      <div className="flex items-center gap-3">
        <img 
          src={image} 
          alt={name} 
          className="w-25 h-25 rounded-full object-cover border shadow-sm"
        />
        <div>
          <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>

      {/* Big image */}
      <img 
        src={image} 
        alt={name} 
        className="w-full h-48 object-cover rounded-xl shadow-md"
      />

      {/* Footer */}
      <div className="flex justify-between text-gray-700 text-sm font-medium pt-2">
        <p className="hover:text-blue-500 cursor-pointer">Like</p>
        <p className="hover:text-blue-500 cursor-pointer">Comment</p>
        <p className="hover:text-blue-500 cursor-pointer">Share</p>
      </div>

    </div>
    </div>
  )
}

export default Card
