import React from "react";
import { useNavigate } from "react-router-dom";
function Header(){
    const navigate=useNavigate();
    function handleClick1(){
        navigate("/")
    }
    function handleClick2(){
        navigate("/shop")
    }
    function handleClick3(){
        navigate("/contact")
    }
    function handleClick4(){
        navigate("/account")
    }
    function handleClick5(){
        navigate("/cart")
    }
  return(
    <>
    <div className="bg-gray-900 flex flex-row items-center h-20">
    <div className="flex-1">
      <p className="text-4xl font-semibold mx-10 text-white">Eccomerce</p>
    </div>
    <div className="px-8 mx-8 flex items-center justify-center ">
  <button onClick={handleClick1} className="mt-0 px-3 py-2 mx-2 h-9 w-32 bg-gray-900 text-white rounded-md shadow-lg shadow-gray-500/50 text-sm font-semibold hover:bg-gray-800">HOME</button>
  <button onClick={handleClick2} className="mt-0 px-3 py-2 mx-2 h-9 w-32 bg-gray-900 text-white rounded-md shadow-lg shadow-gray-500/50 text-sm font-semibold hover:bg-gray-800">SHOP</button>
  <button onClick={handleClick3} className="mt-0 px-3 py-2 mx-2 h-9 w-32 bg-gray-900 text-white rounded-md shadow-lg shadow-gray-500/50 text-sm font-semibold hover:bg-gray-800">CONTACT</button>
  <button onClick={handleClick4} className="mt-0 px-3 py-2 mx-2 h-9 w-32 bg-gray-900 text-white rounded-md shadow-lg shadow-gray-500/50 text-sm font-semibold hover:bg-gray-800">ACCOUNT</button>
  <button onClick={handleClick5} className="mt-0 px-3 py-2 mx-2 h-9 w-32 bg-gray-900 text-white rounded-md shadow-lg shadow-gray-500/50 text-sm font-semibold hover:bg-gray-800">CART</button>
  
    
    </div>
    </div>
    </>
  )
}
export default Header;