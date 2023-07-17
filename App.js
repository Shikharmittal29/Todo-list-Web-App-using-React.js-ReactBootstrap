import './App.css';
import TodoForm from "./TodoForm";
import React,{useState} from 'react';



function App({children}) {

const [spin,setSpin] = useState(true); //Spinner State

const s = document.getElementById('spinner');
  
if(s){
  setTimeout(() => {
    s.style.display="none";
    setSpin(false);
  }, 2500);
}


  return (
    <>
     
    ( <div className="App">
    
      <br></br>
    <h2 style={{color:"HotPink"}}>TodoList App</h2>
     
    <TodoForm />  //Input Field to get Tasks
     </div>  )

  </>
  );
}

export default App;
