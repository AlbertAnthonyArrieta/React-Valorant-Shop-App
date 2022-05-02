import './App.css';
import { useState } from 'react';

import Store from './components/Store';
import Cart from './components/Cart';

import Phantom from "./images/Phantom.jpg"
import Vandal from "./images/Vandal.jpg"
import Classic from "./images/Classic.jpg"
import Spectre from "./images/Spectre.jpg"
import Operator from "./images/Operator.jpg"
import Odin from "./images/Odin.jpg"

function App() {  

  const [page, setPage] = useState(true)
  const [total, setTotal] = useState(0)
  const [storage, setStorage] = useState([
    {
      id: 1,
      name: "Classic",
      picture: Classic,
      price: 0,
      cart: false
    },
    {
      id: 2,
      name: "Phantom",
      picture: Phantom,
      price: 2900,
      cart: false
    },
    {
      id: 3,
      name: "Vandal",
      picture: Vandal,
      price: 2900,
      cart: false
    },
    {
      id: 4,
      name: "Spectre",
      picture: Spectre,
      price: 1600,
      cart: false
    },
    {
      id: 5,
      name: "Operator",
      picture: Operator,
      price: 4700,
      cart: false
    },
    {
      id: 6,
      name: "Odin",
      picture: Odin,
      price: 3200,
      cart: false
    },

  ])

  const removeItem = (id) => {
    setStorage(storage.map((item) => 
    item.id === id ? {
      ...item, cart: false} : item
    ))
  }


  const transferToCart = (id) => {
    setStorage(storage.map((item) => 
    item.id === id ? {
      ...item, cart: true} : item
    ))
    }

  return (
    <div className="App">
      <div className="jumbotron bg-dark">
        <h1 className="text-light">{page ? 'STORE' : 'CART'}</h1>
        <br></br>
        <button
          className="btn btn-outline-light"
          onClick={() => setPage(!page)}
        >
          {page ? "Checkout" : "Back to Store"}
        </button>
        <br/>
        <br/>
        <p className='text-light'>This is just a small mock online store I created while learning React.
          THESE ARE NOT MY GUNS! These guns are from the popular tactical fps shooter 
          videogame called VALORANT.
        </p>
      </div>



      {page ? <Store addToCart={transferToCart} items={storage}/> : <Cart removeItem={removeItem} items={storage}/>}



    </div>
  );
}

export default App;
