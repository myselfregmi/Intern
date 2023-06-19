

import React from 'react';


const Container = (props) => {
  return (
    <div className='container'>
      <h2 className='title'>{props.title}</h2>
      <p className='content'>{props.content}</p>
      <img src={props.imageSrc} alt={props.title} className='image' />
      <div className='price'>
        <span className='symbol'>{props.symbol}</span>
        <span className='amount'>{props.price}</span>
      </div>
      <button className='button'>{props.buttonText}</button>
    </div>
  );
};

export default Container;
