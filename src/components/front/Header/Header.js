import React from 'react';
// import { Link } from 'react-router-dom';
import './Header.css';

function Header({cartItems}) {
  return (
    <header className='header'>
        <div>
            <h1>
                <a href="/" className="logo">Electronic Shop</a>
            </h1>
          </div>
          <div className='header-links'>
              <ul>
                  <li>
                      <a href='/'>Home</a>
                  </li>
              </ul>
              <ul>
                  <li>
                      <a href='/basket'>Basket</a>
                  </li>
              </ul>
               <ul>
                  <li>
                      <a href='/signup'>Signup</a>
                  </li>
              </ul>
               <ul>
                  <li>
                      <a href='/cart' className='cart'>                          
                          <i class='fas fa-shopping-cart' />
                          <span className='cart-length'>{ cartItems.length === 0 ? "" : cartItems.length }</span>
                      </a>
                  </li>
              </ul>
          </div>
    </header>
  )
}

export default Header