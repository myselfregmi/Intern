import React from 'react'

import Container from './components/Container'
import "./index.css"
import Image from "../src/images/room1.jpg"
import Image9 from "../src/images/room2.jpg"
import Image10 from "../src/images/room3.jpg"
import { AiFillHeart}  from "react-icons/fi"
const App = () => {
  return (
    <div className='Box'>

      <div className="box6">

      <Container
      image={Image}
        title="Indoor1 Garden Living"
       icon= "AiFillHeart"
        ></Container>
     
     <Container
      image={Image9}
        title="Indoor2 Garden Living"
       
        
        icon="Icon"
        
        
        ></Container>
</div>
     <div className="box7">

        <Container
        
         image={Image10}
         imageheight='500px'
         
         title="Indoo3r Garden Living"
         
         
         icon="Icon"
         
         
         ></Container>
         </div>
          

    </div>


  );
};

export default App;

