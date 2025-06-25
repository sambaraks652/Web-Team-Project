import React, { useState } from 'react'

// 🧾 Initial Product Inventory
const initialProducts = [
  {
    id: 1,
    name: 'TV',
    price: 35000,
    available: true,
    image: 'https://via.placeholder.com/100x60?text=TV',
  },
  {
    id: 2,
    name: 'TV Stand',
    price: 8000,
    available: true,
    image: 'https://via.placeholder.com/100x60?text=TV+Stand',
  },
  {
    id: 3,
    name: 'Mouse',
    price: 1200,
    available: true,
    image: 'https://via.placeholder.com/100x60?text=Mouse',
  },
  {
    id: 4,
    name: 'Keyboard',
    price: 2200,
    available: false,
    image: 'https://via.placeholder.com/100x60?text=Keyboard',
  },
  {
    id: 5,
    name: 'System Unit',
    price: 45000,
    available: true,
    image: 'https://via.placeholder.com/100x60?text=System+Unit',
  },
  {
    id: 6,
    name: 'Screen',
    price: 18000,
    available: false,
    image: 'https://via.placeholder.com/100x60?text=Screen',
  },
]

const App = () => {
  const [cart, setCart] = useState([])

  // 🛒 Adds an available item to the cart
  const handleAddToCart = (product) => {
    if (product.available) {
      setCart([...cart, product])
    }
  }

  // 💰 Calculates total price of items in the cart
  const getTotalPrice = () => cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div>
      {/* 🔹 Header with Cart Overview */}
      <header
        style={{
          background: '#003366',
          color: '#fff',
          padding: '15px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h2>🛍️ Customer Dashboard</h2>
        <div style={{ textAlign: 'right' }}>
          <div>
            🛒 {cart.length} item{cart.length !== 1 ? 's' : ''}
          </div>
          <div>Ksh {getTotalPrice().toLocaleString()}</div>
        </div>
      </header>

      {/* 🔸 Main Content */}
      <main style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h3>🛒 Available Products</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {initialProducts.map((item) => (
            <li
              key={item.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '16px',
                borderBottom: '1px solid #ccc',
                paddingBottom: '10px',
              }}
            >
              {/* Product Thumbnail */}
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: '100px',
                  height: '60px',
                  marginRight: '15px',
                  borderRadius: '4px',
                }}
              />

              {/* Product Info and Button */}
              <div>
                <strong>{item.name}</strong>
                <br />
                Price: Ksh {item.price.toLocaleString()}
                <br />
                <button
                  onClick={() => handleAddToCart(item)}
                  disabled={!item.available}
                  style={{
                    padding: '6px 12px',
                    marginTop: '5px',
                    cursor: item.available ? 'pointer' : 'not-allowed',
                    backgroundColor: item.available ? '#007bff' : '#ccc',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                  }}
                >
                  {item.available ? 'Add to Cart' : 'Sold Out'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default App
