import './App.css';
import { useState } from 'react';

import Store from './components/Store';
import Cart from './components/Cart';

function App() {

  const [page, setPage] = useState(true)

  return (
    <div className="App">
      <header className="jumbotron bg-info">
        <h1 className="text-light">{page ? 'STORE' : 'CART'}</h1>
        <br></br>
        <button
          className="btn btn-light"
          onClick={() => setPage(!page)}
        >
          {page ? "Checkout" : "Back to Store"}
        </button>
      </header>



      {page ? <Store /> : <Cart />}



    </div>
  );
}

export default App;
