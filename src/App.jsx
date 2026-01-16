import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // TODO: Implement state for dark mode toggle
  const [isDarkMode, setIsDarkMode] = useState(true)

  function darkModeToggle() {
    setIsDarkMode(isDarkMode === false)

  }


  // TODO: Implement state for cart management
  const [cart, setCart] = useState([])

  function addToCart(product) {
    setCart(
      (cart) => {
        return [...cart, product]
      }
    )
  }
  // TODO: Implement state for category filtering
  const [category, setCategory] = useState("All")

  function filterByCategory(event) {
    setCategory(event.target.value)
  }

  return (
    <div>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
      <DarkModeToggle isDarkMode={isDarkMode} darkModeToggle={darkModeToggle}/> 

      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select onChange={filterByCategory}>
        <option value="All">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList addProductToCart={addToCart} category={category} />

      {/* TODO: Implement and render Cart component */}
      <Cart cart={cart} />

    </div>
  )
}

export default App
