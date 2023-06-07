import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import storeitems from './items.json';

function Cart() {
  const location = useLocation();
  function func() {
    localStorage.clear();
  }
  useEffect(() => {
    const existingArray = JSON.parse(localStorage.getItem('myArray')) || [];
    const newValue = {
       id: location.state.id,
      quantity: location.state.quantity,
      price: location.state.price,
      url: location.state.url,
    };
    const itemExists = existingArray.some((item) => item.id === newValue.id);

    if (!itemExists) {
      const updatedArray = [...existingArray, newValue];
      localStorage.setItem('myArray', JSON.stringify(updatedArray));
    }
  }, []);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedArray = JSON.parse(localStorage.getItem('myArray')) || [];
    setItems(storedArray);
  }, []);

  return (
    <div>
      <h1 className='text-6xl flex justify-center font-semibold shadow-xl mx-5 my-5 bg-gradient-to-r from-slate-50 to-slate-800'>CART</h1>
      <div className="">
        {items.map((item, index) => (
          <div className="">
            <div key={index} className="flex items-center bg-gradient-to-r from-slate-50 to-slate-300">
              <div
                style={{ backgroundImage: `url(${item.url})` }}
                className="h-[40vh] w-[40vh]"
              ></div>
              <div className=" flex flex-1 mx-10">
                <p className='text-xl mr-5'>
                  Quantity:{item.quantity}
                </p>
                <p className='text-xl'>
                  Price:{item.price}
                </p>
                <button className="mx-20 mt-0 h-9 w-32 rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-gray-500/50 hover:bg-gray-800">
          remove
        </button>
    
              </div>
            </div>
          </div>
        ))}
      </div >
      <div className='flex justify-center my-5'>
      <button onClick={func} className="mx-2 mt-0 h-9 w-32 rounded-md bg-blue-900 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-gray-500/50 hover:bg-gray-800  ">
          Remove all
        </button>
        </div>
    </div>
  );
}

export default Cart;
