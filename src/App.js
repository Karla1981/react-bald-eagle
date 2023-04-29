import React, { useState , useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
    // Wrap existing JSX within new BrowserRouter component 
    <BrowserRouter>
      {/*Inside BrowserRouter, wrap existing JSX within new Routes component*/}
      <Routes>
        {/*Inside Routes, wrap existing JSX within new Route component with prop path equal to the root path ("/") and prop exact*/}
        <Route path="/" 
          element={
          <>
            <AddTodoForm onAddTodo={addTodo}/>
              {isLoading ? <p>Is Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo} />}
          </>
          }      
        />
      {/* Below the Route component, create a new Route with path "/new" */}
      <Route path="/new" element={<h1>New Todo List</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
