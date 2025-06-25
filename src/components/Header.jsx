import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = ({ cart, total }) => {
  const navigate = useNavigate()

  return (
    <header className="header" onClick={() => navigate('/cart')}>
      <h2>🛍️ Customer Dashboard</h2>
      <div className="cart-summary">
        <div>
          🛒 {cart.length} item{cart.length !== 1 && 's'}
        </div>
        <div>Ksh {total.toLocaleString()}</div>
      </div>
    </header>
  )
}

export default Header
