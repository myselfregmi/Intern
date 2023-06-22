import React from 'react'
import { useEffect, useState } from 'react';
const useHook = () => {
    const [isAuth, setIsAuth] =useState(false);
const id = localStorage.getItem("id");
useEffect(() => {
    if (id) {
        setIsAuth(true);
    }else {
    setIsAuth(false);
    }
}, [id]);
  return{id, isAuth};
  
};

export default useHook;
