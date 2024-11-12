import React, { useState } from 'react';
import { FaShoppingBasket } from "react-icons/fa";

export default function Header() {
  let [cart0pen, setCart0pen] = useState(false)
  return (
    <header>
        <div>
            <span className='logo'>TOTES BAR</span>
            <ul className='nav'>
              <li>О нас</li>
              <li>Контакты</li>
              <li>Кабинет</li>
            </ul>
            <FaShoppingBasket onClick={() => setCart0pen(cart0pen = !cart0pen)} className={`shop-cart-button ${cart0pen && 'active0'}`}/>
            {cart0pen &&(
              <div className='cart-shop'>
                
              </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
