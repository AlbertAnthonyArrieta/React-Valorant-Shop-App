import CartItem from './CartItem';
import { useState } from 'react';

const Cart = ({removeItem, items}) => {
const total = items.filter(it => it.cart === true).reduce((a, o) => a + o.price, 0)


    return (
        <div className="container">
        <h1>YOUR CART</h1>
        <br/>
        <br/>
        
        
        {items.filter(it => it.cart === true).map((item) => (
        <CartItem 
        item={item}
        removeFromCart={removeItem}
        />
        ))}

        <h3>Your Total: ${total}</h3>

        <button className='btn btn-success'>Confirm Purchase</button>

        
    </div>
    )
}

export default Cart