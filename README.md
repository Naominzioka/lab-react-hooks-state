# 🛒 React Hooks State Lab - Shopping App

A dynamic shopping application built with React and React Hook to practice state management using `useState`. This project demonstrates core concepts of modern React development including component state, event handling, and conditional rendering.

## 📋 Features

- **Dark Mode Toggle** – Switch between light and dark themes
- **Product Filtering** – Filter products by category (All, Fruits, Dairy)
- **Shopping Cart** – Add items to cart and view them in a list
- **Responsive UI** – Built with Material-UI components
- **Dynamic Updates** – Cart and UI update in real-time as items are added


## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd lab-react-hooks-state
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - The app will be available at `http://localhost:5173` (Vite default)

## Project Structure

```
src/
├── App.jsx                 # Main app component with state management
├── main.jsx               # React DOM rendering entry point
├── App.css                # Global styles
├── index.css              # Base styles
├── components/
│   ├── ProductList.jsx    # Displays filtered products
│   ├── ProductCard.jsx    # Individual product card
│   ├── Cart.jsx           # Shopping cart display
│   └── DarkModeToggle.jsx # Dark mode toggle component
├── styles/
│   ├── DarkMode.module.css    # Dark mode styling
│   └── ProductCard.module.css  # Product card styling
└── __tests__/
    └── indexTest.js       # Test suite

```

## Key Components

### App.jsx
The main component that manages:
- **Dark mode state** – Toggle between light/dark themes
- **Cart state** – Store added products
- **Category filter state** – Track selected category

### ProductList.jsx
- Displays available products
- Filters products based on selected category
- Passes product data to ProductCard components

### ProductCard.jsx
- Renders individual product with name, price, and category
- "Add to Cart" button functionality
- Stock status display

### Cart.jsx
- Shows all items added to the shopping cart
- Displays formatted cart items with "Item is in your cart" message

## 🧪 Testing

Run the test suite to verify functionality:

```bash
npm test
```

Tests cover:
- Component rendering
- State updates
- Event handling
- Filter functionality

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm test` | Run Jest test suite |
| `npm run build` | Build optimized production bundle |

## Technologies Used

- **React 18** – UI library with hooks
- **Vite** – Fast build tool and dev server
- **Material-UI (MUI)** – Component library
- **CSS Modules** – Scoped styling
- **Jest** – Testing framework
- **React Testing Library** – Component testing utilities

## Learning Concepts

This project practices:
- **useState Hook** – Managing component state
- **Event Handlers** – Handling user interactions (clicks, selections)
- **Conditional Rendering** – Displaying content based on state
- **Array Methods** – Filtering and mapping products
- **Props** – Passing data between components
- **CSS Modules** – Scoped component styling

## Features Walkthrough

### Dark Mode
- Click the toggle button to switch themes
- Button text updates dynamically (Dark Mode ↔ Light Mode)
- Styles update based on the current theme

### Product Filtering
- Use the dropdown to select a category (All, Fruits, Dairy)
- Product list updates automatically
- Shows "no products available" if category has no items

### Shopping Cart
- Click "Add to Cart" on any product
- Items appear in the Shopping Cart section
- Cart displays item names with "is in your cart" format

## Notes

- Sample product data is defined in `ProductList.jsx`
- Currently set to start in dark mode (`isDarkMode: true`)
- Products can be duplicated in cart (same item multiple times)
- No persistence - cart clears on page refresh

## Contributing

Feel free to extend this project with additional features:
- Remove from cart functionality
- Cart total price calculation
- Local storage persistence
- More product categories
- Search functionality

## Resources

- [React Documentation](https://react.dev)
- [React Hooks: useState](https://react.dev/reference/react/useState)
- [Material-UI Components](https://mui.com)
- [Vite Guide](https://vitejs.dev)
- [Jest Testing Framework](https://jestjs.io/)

## License

This project is part of the Moringa School React Hooks curriculum.

---