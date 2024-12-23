import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>Sweet Cravings By Victoria</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/ordering">Order</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

