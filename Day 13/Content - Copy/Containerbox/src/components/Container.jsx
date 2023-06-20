

import React from 'react';


const Container = (props) => {
  return (
    <div className='container'>
    
      <div className="imagesss">

      <img src={props.imageSrc} alt={props.title} className='image' />
      </div>
      <div className="text1">

      <h2 className='title'>{props.title}</h2>
      <button className='button'>{props.buttonText}</button>
      </div>
      <div className='price'>
       
           <p>{props.symbol}</p>
          <h9>{props.price}</h9> 
      </div>
    </div>
  );
};

export default Container;
