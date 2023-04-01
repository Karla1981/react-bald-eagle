import React, { useState , useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

function App() {

  //1.7 2 Copy the useState and useEffect hooks from useSemiPersistentState function back into App
  const [todoList, setTodoList] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);
  //Fetch data from API
   useEffect( () => {
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      })
      .then(response => response.json())
      .then(result => {
        setTodoList(result.records); 
        setIsLoading(false);
    }).catch((error) => console.error(error));
  }, []);

  useEffect( () => {if (isLoading === false )
  {localStorage.setItem('savedTodoList', 
    JSON.stringify(todoList) )}}, [todoList] );

  const removeTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  
  }
  //Add New Todo to List
  const addTodo = (newTodo) =>{
    setTodoList([...todoList, newTodo])//... spread operator
};

  return (
    <> 
        <h1>Todo List</h1>
          <AddTodoForm 
          onAddTodo={addTodo}/>
            {isLoading ? <p>Is Loading...</p> :  
          <TodoList todoList={todoList} onRemoveTodo={removeTodo} />}
    </>
  );
}
export default App;

 