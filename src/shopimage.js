import React, { createContext, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import Cart from './cart';

const Shopingimage = ({ id, price, url }) => {
  const [quantity, setQuantity] = useState(0);
  const [bag, setBag] = useState('ADD TO BAG');
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();
  const [keyid,setkeyid]=useState();
  const Object={
    id:id,
    quantity:quantity,
    price:price,
    url:url
  }
  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };
 const [array,setarray]=useState([]);
 
  function func() {
    if (quantity === 0) return;
    if (!status) {
      setBag('GO TO BAG');
      setStatus(true);

    } else if (status) {
      navigate(
        '/Cart',
        {state:Object}
      )
    }
  }

  

    return (
      <>
        <div>
          <div
            type="button"
            key={id}
            className="duration-0.1 flex h-60  w-96 transform object-cover transition-transform hover:scale-110"
            style={{ backgroundImage: `url(${url})` }}
          >
            {/* <div className="flex flex-1 flex-col items-center justify-center">
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
            </div> */}
          </div>
          <div className="flex flex-1 flex-col items-center justify-center">
              <div className="flex h-20 w-40 flex-col items-center justify-center bg-slate-200 bg-opacity-50">
                <div className="flex justify-center items-center ">
                  <button onClick={decrement} className='hover:bg-slate-300 h-6 w-10 rounded-xl mr-2'>-</button>
                  <input
                    type="number"
                    className="m-1 w-6 bg-slate-200 bg-opacity-50 flex justify-center items-center"
                    id="quantity"
                    value={quantity}
                    readOnly
                  ></input>
                  <button onClick={increment} className='hover:bg-slate-300 h-6 w-10 rounded-xl mr-2'>+</button>
                  <button onClick={func} className='h-10 w-36 bg-slate-300 rounded-xl hover:bg-blue-200'>{bag}</button> 
                </div>
              </div>
            </div>
          <p className="ml-48 text-xl font-semibold"> Rs.{price}</p>
        </div>
      </>
    );
  };

export default Shopingimage;
