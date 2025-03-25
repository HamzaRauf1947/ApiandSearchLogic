// import React from 'react'

// function ProductCard({title,price,thumbnail,rating}) {
//   return (
//     <div className=''>
//         <img src={thumbnail} alt={title} />
//       <h1>Title{title}</h1>
//       <p>Price {price}</p>
//       <p>Rating {rating}</p>
//     </div>
//   )
// }

// export default ProductCard









import React from 'react'

function ProductCard({ title, price, thumbnail, rating }) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
      {/* Image Container */}
      <div className="relative h-48 bg-gray-100 overflow-hidden">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105" 
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {title}
        </h3>
        
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-blue-600">
            ${price}
          </span>
          <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">
            ⭐ {rating}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard