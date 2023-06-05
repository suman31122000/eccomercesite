import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Cart from './cart';

// Create a context for the global array
const QuantityContext = React.createContext();

const Shopimage = ({ id, price, url, type }) => {
  const [quantity, setQuantity] = useState(0);
  const [bag, setBag] = useState('ADD TO BAG');
  const [status, setStatus] = useState(false);
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const [quantityArray, setQuantityArray] = useState([]); // Use state to manage the global array

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };

  function func() {
    if (quantity === 0) return;
    if (!status) {
      setBag('GO TO BAG');
      setValue(quantity);
      setStatus(true);
      setQuantityArray([...quantityArray, quantity]); // Update the global array using setQuantityArray
    } else {
      navigate('/cart');
    }
  }

  return (
    <QuantityContext.Provider value={quantityArray}>
      <div>
        <div
          type="button"
          key={id}
          className="duration-0.1 flex h-60  w-96 transform transition-transform hover:scale-110"
          style={{ backgroundImage: `url(${url})` }}
        >
          <div className="flex flex-1 flex-col items-center justify-center">
            <div className="flex h-20 w-40 flex-col items-center justify-center bg-slate-200 bg-opacity-50">
              <div className="flex">
                <button onClick={decrement}>-</button>
                <input
                  type="number"
                  className="m-1 w-6 bg-slate-200 bg-opacity-50"
                  id="quantity"
                  value={quantity}
                  readOnly
                />
                <button onClick={increment}>+</button>
                <button onClick={func}>{bag}</button>
              </div>
            </div>
          </div>
        </div>
        <p className="ml-48 text-xl font-semibold"> Rs.{price}</p>
      </div>
    </QuantityContext.Provider>
  );
};

export default Shopimage;
