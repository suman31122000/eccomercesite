import React from 'react';
import { useNavigate } from 'react-router-dom';
function Header() {
  const navigate = useNavigate();
  function handleClick1() {
    navigate('/eccomercesite');
  }
  function handleClick2() {
    navigate('/shop');
  }
  function handleClick3() {
    navigate('/contact');
  }
  function handleClick4() {
    navigate('/account');
  }
  function handleClick5() {
    navigate('/cart');
  }
  return (
    <>
      <div className="flex h-20 flex-row flex-wrap items-center bg-gray-900 sticky top-0 z-50">
        <div className="flex-1">
          <button
            onClick={handleClick1}
            className="mx-10 text-4xl font-semibold text-white flex-wrap"
          >
            Eccomerce
          </button>
        </div>
        <div className="mx-8 flex items-center justify-center px-8 flex-wrap ">
          <button
            onClick={handleClick1}
            className="mx-2 mt-0 h-9 w-32 rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-gray-500/50 hover:bg-gray-800"
          >
            HOME
          </button>
          <button
            onClick={handleClick2}
            className="mx-2 mt-0 h-9 w-32 rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-gray-500/50 hover:bg-gray-800"
          >
            SHOP
          </button>
          <button
            onClick={handleClick3}
            className="mx-2 mt-0 h-9 w-32 rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-gray-500/50 hover:bg-gray-800"
          >
            CONTACT
          </button>
          <button
            onClick={handleClick4}
            className="mx-2 mt-0 h-9 w-32 rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-gray-500/50 hover:bg-gray-800"
          >
            ACCOUNT
          </button>
          <button
            onClick={handleClick5}
            className="mx-2 mt-0 h-9 w-32 rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-gray-500/50 hover:bg-gray-800"
          >
            CART
          </button>
        </div>
      </div>
    </>
  );
}
export default Header;
