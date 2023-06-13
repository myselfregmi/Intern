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

const Container = (props) => {
  return (
    <div className='Box2'>
      {props.children}
      <h2>{props.title}</h2>
  <hr />

      <p>{props.content}</p>
    </div>
  )
}

export default Container
