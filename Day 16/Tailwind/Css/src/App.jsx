import React, {useState} from 'react'
import Nav from './components/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import MyCart from './components/MyCart'
import ContactUs from './components/ContactUs'
import Products from './components/Products'
import Description from './components/Description'


const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  const removeItems = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);

    setCartItems(updatedCartItems);
  };

  return (
   <>
   <BrowserRouter>
<Nav />
<Routes>
  <Route path="/home" element={<Home addToCart={addToCart}/>} />
  <Route path="/mycart" element={<MyCart cartItems={cartItems}/>} />
  <Route
              path="/mycart"
              element={<MyCart cartItems={cartItems} removeItems={removeItems} />}
            />
  <Route path="/contactus" element={<ContactUs/>}/>
  <Route path="/products" element={<Products/>}/>
  <Route path="/description" element={<Description/>}/>
</Routes>
   </BrowserRouter>
   
   
   </>
  )
}

export default App
