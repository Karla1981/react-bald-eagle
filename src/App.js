import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';


function App() {
  // create a new state variable named newTodo with 
  // update function named setNewTodo -useState hook
  //const [newTodo, setNewTodo] = useState('');

  const [todoList, setTodoList] = useState([]); 

  //setNewTodo(event.target.value);
  //console.log(`here: ${props.setNewTodo(event.target.value)}`);

  //Add New Todo to List
  const addTodo = (newTodo) =>{
    setTodoList([...todoList, newTodo])//... spread operator
  }
 
  return (
    
    <div> 
        <h1>Todo List</h1>
          <AddTodoForm 
          onAddTodo={addTodo}/>
          
          <TodoList todoList={todoList} />
    </div>
  );
}

export default App;

 