import React from 'react'
import ProductCard from './ProductCard'

function ProductList({ products }) {
  return (
    <div className="product-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {products.length === 0 ? (
        <div className="col-span-full text-center text-white py-8">
          No products found
        </div>
      ) : (
        products.map((product) => (
          <ProductCard 
            key={product.id}
            title={product.title}
            price={product.price}
            thumbnail={product.thumbnail}
            rating={product.rating}
          />
        ))
      )}
    </div>
  );
}

export default ProductList