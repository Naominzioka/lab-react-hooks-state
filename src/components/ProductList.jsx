import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

const ProductList = ({ addProductToCart, category }) => {
  const list = category === "All" ? sampleProducts : sampleProducts.filter((product) => product.category === category)
  const isListEmpty = list.length === 0

  return (
    <div>
      <h2>Available Products</h2>

      {/* TODO: Filter sample data using selected category */}
      {
        isListEmpty ?
          <p>no products available</p>
          :
          list.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addProductToCart={addProductToCart}
            />
          ))}
    </div>
  )
}

export default ProductList
