import React   from 'react';
import { Link } from "react-router-dom";


const MyCart = ({ cartItems, removeItems }) => {
  let totalPrice = 0;


  cartItems.forEach((item) => {
    totalPrice += item.price;
  });
  // const handleRemoveItem = (product) => {
  //   removeItem (product);



  return (
    <>
      <div className='px-80 py-20 ml-40'>
        <h2 className='font-bold text-2xl py-8 '>Cart Items</h2>
        {cartItems.length === 0 ? (
          <p>The Cart is Empty.</p>
        ) : (
          <>
            <ul>
              {cartItems.map((item) => (

                <li key={item.id}> <img className='h-60 object-cover mb-2' src={item.image}></img>
                  {item.title} <br />${item.price} <br/> 
                  <button
                    type="button"
                    onClick={() => removeItems (item.id)}
                    className="bg-blue-600 text-bold px-6 py-2 rounded-lg"
                  >
                    Remove Item
                  </button>
                </li>
              
              ))}
            
              
              
            </ul>
            <p className='font-bold bg-orange-600 p-3  rounded w-30'>Total Price: ${totalPrice}</p>
            
          </>
        )}
      </div>
      
    </>
  );
              };

export default MyCart;

