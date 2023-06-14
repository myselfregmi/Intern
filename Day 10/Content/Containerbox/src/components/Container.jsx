// import React from 'react';

// const Container = ({ title, content}) => {
//   return (
//     <div className="container">
//       <h2>{title}</h2>
//       <p>{content}</p>
//     </div>
//   );
// };

// export default Container;


import React from 'react'

const Container = ({title,icon, image, imageheight}) => {
  return (
    <div className='Box2'>
  
<div className="box12">
      <img src={image} alt='image' className='imageContainer' style={{height: imageheight}}>
     


      </img>
      <h1>{icon}</h1>
      <h2>{title}</h2>
      
</div>
      
    </div>
  

  )
}

export default Container
