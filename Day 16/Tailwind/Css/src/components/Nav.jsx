
  
import React from 'react'
import { NavLink } from 'react-router-dom'
const Nav = () => {
  return (
    <>
    <div className='bg-orange-600 py-5 flex text-white'>
        <div className='text-3xl font-bold ml-20 text-black'>
            E-Store
        </div>
        <div className="flex-1">
            <ul className='flex mt-2 justify-center gap-10'>
                <li>
                    <NavLink to='/home'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/mycart'>
                        MyCart
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/products'>
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/contactus'>
                        Contact Us
                    </NavLink>

                </li>
                <li>
                    <NavLink to='/description'>
                        Description
                    </NavLink>
                    
                </li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Nav
