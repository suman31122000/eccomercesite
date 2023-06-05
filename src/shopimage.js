import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cart from './cart';
const Shopimage = ({ id, price, url, type }) => {
  const [quantity, setQuantity] = useState(0);
  const [bag, setbag] = useState('ADD TO BAG');
  const [status, setstatus] = useState(false);
  const [value, setvalue] = useState(0);
  const navigate = useNavigate();
  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };

  function func() {
    if (quantity == 0) return;
    if (!status) {
      setbag('GO TO BAG');
      setvalue(quantity);
      setstatus(true);
    } else {
      navigate('/cart');
    }
  }
  return (
    <>
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
                ></input>
                <button onClick={increment}>+</button>
                <button onClick={func}>{bag}</button>
              </div>
            </div>
          </div>
        </div>
        <p className="ml-48 text-xl font-semibold"> Rs.{price}</p>
      </div>
    </>
  );
};

export default Shopimage;
