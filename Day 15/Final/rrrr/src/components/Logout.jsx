import React from 'react'

const Logout = () => {
    const handleLogout= () =>{
localStorage.clear()
window.location.reload()
    }

  return (
    <>
    <div>
    <button onClick={handleLogout} className='logout' >LogOut</button>
     


    </div>

    </>

  )
}

export default Logout
