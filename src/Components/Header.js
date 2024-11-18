import React, { useState } from 'react';
import { FaShoppingBasket } from "react-icons/fa";
import Order from './Order';

const show0rders = (props) => {
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.price))
  return (<div>
    {props.orders.map(el => (
      <Order onDelete={props.onDelete} key={el.id} item={el} />
    ))}
    <p className='summa'>Сумма заказа: {new Intl.NumberFormat().format(summa)} руб.</p>
  </div>)
}

const showNothing = () => {
  return (<div className='empty'>
      <h2>Товары не добавлены в корзину.</h2>
  </div>)
}

export default function Header(props) {
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
                {props.orders.length > 0 ?
                show0rders(props) : showNothing()}
              </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
