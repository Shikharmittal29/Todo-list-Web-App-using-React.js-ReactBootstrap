import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import { Container } from "react-bootstrap";
import { Accordion } from "react-bootstrap";


const TodoForm = () => {

  const [ userInput, setUserInput ] = useState('');
  const [ tlist, setTlist ] = useState([]);
 

  const handleTextChange = (e) => {
    setUserInput(e.target.value);
}

const handleSubmit = (e) => {
  e.preventDefault();
  setTlist([...tlist,userInput]);
  setUserInput("");
}
function handleD (name){
  console.log(name);
const updList = tlist.filter((t,i) =>{
  return (i!==name);
})

 setTlist(updList);
}



return(
  <>
  <Container> 
<Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3">
  <InputGroup className="mb-3" style={{display:"flex",marginLeft:"18%",maxWidth:"70%",justifyContent:"center"}}>
  <Form.Control
        placeholder="Enter a New task"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          value={userInput}  
          onChange={handleTextChange}
          type="text"
        /> 
        <Button variant="primary" type="submit">Add Task</Button>
        </InputGroup>
  </Form.Group>
</Form>
</Container> 

<div className="TaskD" style={{maxWidth:"40%",marginLeft:"30%"}}>
  
{ tlist.map((t,index) =>{
  
  return (
  <Accordion  key={index} style={{marginBottom:"2%",backgroundColor:"yellow"}}  >
  <Accordion.Item eventKey="0" style={{backgroundColor:"blue"}}>
    <Accordion.Header >Task {index}</Accordion.Header>
    <Accordion.Body style={{backgroundColor:"hotpink",color:"white"}}>
      {t}
      <button onClick={() =>handleD(index)} style={{marginLeft:"100px",backgroundColor:"orange"}}>Delete</button>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>)
})}



</div>
</>
);
};


export default TodoForm;


  






