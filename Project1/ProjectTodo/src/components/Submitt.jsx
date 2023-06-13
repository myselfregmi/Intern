import React,{useState} from "react";
import Todo from "./Todo";

const Submitt = () => {
    const[input,setInput]=useState('');
    const[items,setItems]=useState([]);

    const itemChange = e =>{
        setInput(e.target.value);
  
      };
      const submit = e =>{
        e.preventDefault();

      
    }
    const listItems = ()=>{
     setItems((oldItems)=> {
    return [...oldItems,input ];
  })
  setInput('');
    

       
  
    };
    
    
  return (
    <form className='todo-form' onSubmit={submit} >
      <input type="name" placeholder="Add a list...." value={input} onChange={itemChange} className="search-place " ></input>
      
      <button className="todo-btn" onClick={listItems}>Add</button>
      <ol>
       
        {items.map((itemval) => {
         return<Todo text={itemval}/>
        })}
      </ol>
    </form>
  )
}

export default Submitt
