import React from 'react';
import { FiAirplay } from "react-icons/fi";
import { FiActivity } from "react-icons/fi";
import { FiBookOpen } from "react-icons/fi";
import Container from './components/Container';

const App = () => {
  return (
    <div className='Box'>
      <Container
        title="Sales Planning"
        content=" The gradual accumulation of  information about the atomic and small-scale behaviour "

     > <FiActivity /></Container>

      <Container
        title="Training Courses"
        content="The gradual accumulation of information about the atomic and small-scale behaviour "
      >
      <FiAirplay/>
      </Container>

      <Container
        title="Extra Courses"
        content="The gradual accumulation of  information about the atomic and small-scale behaviour "
      >< FiBookOpen/>  </Container>
    </div>
  );
};

export default App;

