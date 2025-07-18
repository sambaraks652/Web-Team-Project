import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CartPage from "./pages/CartPage";
import "./index.css";
import tv from "./assets/tv.jpg";
import stand from "./assets/stand.jpg";
import mouse from "./assets/mouse.jpg";
import keyboard from "./assets/keyboard.jpg";
import system from "./assets/system.jpg";
import screen from "./assets/screen.jpg";

const initialProducts = [
  {
    id: 1,
    name: "TV",
    price: 35000,
    available: true,
    image: tv,
  },
  {
    id: 2,
    name: "TV Stand",
    price: 8000,
    available: true,
    image: stand,
  },
  {
    id: 3,
    name: "Mouse",
    price: 1200,
    available: true,
    image: mouse,
  },
  {
    id: 4,
    name: "Keyboard",
    price: 2200,
    available: false,
    image: keyboard,
  },
  {
    id: 5,
    name: "System Unit",
    price: 45000,
    available: true,
    image: system,
  },
  {
    id: 6,
    name: "Screen",
    price: 18000,
    available: false,
    image: screen,
  },
];

const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    if (product.available && !cart.some((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const getTotalPrice = () => cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <Router>
      <Header cart={cart} total={getTotalPrice()} />

      <Routes>
        <Route
          path="/"
          element={
            <main className="main-content">
              <h3>Available Products</h3>
              <ul className="product-list">
                {initialProducts.map((item) => (
                  <li key={item.id} className="product-item">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="product-image"
                    />
                    <div>
                      <strong>{item.name}</strong>
                      <br />
                      Price: Ksh {item.price.toLocaleString()}
                      <br />
                      <button
                        onClick={() => handleAddToCart(item)}
                        disabled={!item.available}
                        className={item.available ? "btn" : "btn disabled"}
                      >
                        {item.available ? "Add to Cart" : "Sold Out"}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </main>
          }
        />
        <Route
          path="/cart"
          element={<CartPage cart={cart} total={getTotalPrice()} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
