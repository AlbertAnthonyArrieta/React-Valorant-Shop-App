import './App.css';
import { useState } from 'react';

import Store from './components/Store';
import Cart from './components/Cart';

import Phantom from "./images/Phantom.jpg"
import Vandal from "./images/Vandal.jpg"
import Classic from "./images/Classic.jpg"

function App() {  

  const [page, setPage] = useState(true)
  const [storage, setStorage] = useState([
    {
      id: 1,
      name: "Classic",
      picture: Classic,
      price: "$0",
      cart: false
    },
    {
      id: 2,
      name: "Phantom",
      picture: Phantom,
      price: "$0",
      cart: false
    },
    {
      id: 3,
      name: "Vandal",
      picture: Vandal,
      price: "$0",
      cart: false
    },

  ])

  const removeItem = (id) => {
    console.log(id)
  }


  const transferToCart = (id) => {
    console.log(id)
    setStorage(storage.map((item) => 
    item.id === id ? {
      ...item, cart: true} : item
    ))
  }

  return (
    <div className="App">
      <header className="jumbotron bg-dark">
        <h1 className="text-light">{page ? 'STORE' : 'CART'}</h1>
        <br></br>
        <button
          className="btn btn-outline-light"
          onClick={() => setPage(!page)}
        >
          {page ? "Checkout" : "Back to Store"}
        </button>
      </header>



      {page ? <Store addToCart={transferToCart} items={storage}/> : <Cart removeFromCart={removeItem} items={storage}/>}



    </div>
  );
}

export default App;
