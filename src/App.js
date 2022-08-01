import React from 'react';
import {useState} from 'react';


function App() {

  const[input,setinput] = useState('');
  const[elements,setelements] = useState([]);

  const addwork = ()=>{

    if(!input){
      alert('Add a work');
    }
    else{
    const element = {
      id:Math.floor(Math.random()*1000),
      value:input
    };
    setelements([...elements,element]);
    setinput('');
    console.log(elements);
  }
  }

  const del = (id)=>{
    const newelement =elements.filter((n)=>n.id!==id);
    setelements(newelement);
    
  }
  



  return (
    <div className='App'> 
    <nav>
    <h1 className='head'>Doit.</h1>

    <div className='iandb'>
   <input type='text' onKeyPress={(e) => e.key === 'Enter' && addwork()}  className='forml' placeholder=' Add' value={input} onChange={(e)=>setinput(e.target.value)}/>
   <span className='move'>
   <button className="plus" onClick={()=>addwork()}>

   <svg width="26" height="20" viewBox="1 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.81392 26.0291V0.887072H16.1705V26.0291H9.81392ZM0.421165 16.6364V10.2798H25.5632V16.6364H0.421165Z" fill="white"/>
</svg>


   </button>
   </span>
   </div>

   <h2 className='sig'> A </h2>
   </nav>

   <hr/>

<div className='lists'>
  <ul className='mlist'>
    {elements.map(n=>{
      return(<li key={n.id}>{n.value}<button onClick={()=>del(n.id)}>❌</button></li>);
      
   
    })}
  </ul>

</div>


   
   
     
    </div>
  );
}

export default App;