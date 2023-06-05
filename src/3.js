import React, { useContext } from 'react';
import { QuantityContext } from './App'; // Import the QuantityContext

function Cart() {
  const quantityArray = useContext(QuantityContext); // Access the global array

  return (
    <div>
      <div className="bg-slate-500 h-[80vh] w-[70vh] mt-8 ml-[65vh] rounded-3xl">
        {/* Render all items from the global array */}
        {quantityArray.map((quantity, index) => (
          <div key={index}>Item Quantity: {quantity}</div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
