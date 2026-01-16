import React from 'react'

const DarkModeToggle = ({isDarkMode, darkModeToggle}) => {
  // TODO: Implement dark mode toggle logic

  return (
    <button onClick={darkModeToggle}>Toggle {isDarkMode ? 'Dark' : 'Light'} mode {/* TODO: Update this text from Dark to Light dynamically */}</button>
  )
}

export default DarkModeToggle
