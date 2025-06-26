import React from 'react';
import './index.css';

const initialProducts = [
  { id: 1, name: 'Product 1', price: '$10', available: true, image: 'https://via.placeholder.com/100' },
  { id: 2, name: 'Product 2', price: '$20', available: false, image: 'https://via.placeholder.com/100' },
];

function ProductCard({ product }) {
  return (
    <li style={{ listStyle: 'none', marginBottom: '1rem', border: '1px solid #eee', padding: '1rem', borderRadius: '8px', maxWidth: 200 }}>
      <img src={product.image} alt={product.name} width={100} />
      <div><strong>{product.name}</strong></div>
      <div>Price: {product.price}</div>
      <div style={{ color: product.available ? 'green' : 'red' }}>
        {product.available ? 'Available' : 'Out of Stock'}
      </div>
    </li>
  );
}

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Products</h1>
      <ul style={{ padding: 0 }}>
        {initialProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}

export default App;
