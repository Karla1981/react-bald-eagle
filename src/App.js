import React, { useState , useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

// Custom Hook 
const useSemiPersistentState = () =>{
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('savedTodoList')) || []);  
  useEffect( () => {localStorage.setItem('savedTodoList', JSON.stringify(todoList) )}, [todoList] );

  return(
    [todoList,  setTodoList]
  )
}

function App() {

  const removeTodo = (id) => {

    setTodoList(todoList.filter((todo) => todo.id !== id));
  
  }
  //use the new custom hook
  const [todoList, setTodoList] = useSemiPersistentState("");
  //Add New Todo to List
  const addTodo = (newTodo) =>{
    setTodoList([...todoList, newTodo])//... spread operator
  
};
  return (
    <> 
        <h1>Todo List</h1>
          <AddTodoForm 
          onAddTodo={addTodo}/>
          <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
    </>
  );
}

export default App;

 