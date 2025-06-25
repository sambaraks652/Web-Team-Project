import React from 'react'

const CartPage = ({ cart, total }) => {
  return (
    <div className="main-content">
      <h3>🧾 Cart Summary</h3>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cart.map((item, idx) => (
            <li key={idx}>
              {item.name} — Ksh {item.price.toLocaleString()}
            </li>
          ))}
        </ul>
      )}
      <h4>Total: Ksh {total.toLocaleString()}</h4>
    </div>
  )
}

export default CartPage
