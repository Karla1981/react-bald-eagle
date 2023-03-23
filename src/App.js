import React, { useState , useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

function App() {

  //1.7 2 Copy the useState and useEffect hooks from useSemiPersistentState function back into App
  const [todoList, setTodoList] = useState([]); //useState(JSON.parse(localStorage.getItem('savedTodoList')) || []);
  const [isLoading, setIsLoading] = useState(true);

  //1.7 4 -  Below the todoList state, define a useEffect 
  //React hook with an empty dependency list
   useEffect( () => {
    // new Promise((resolve, reject) =>
    //  setTimeout(() => 
    //  {resolve( 
    //    {data: 
    //     {todoList:JSON.parse(localStorage
    //       .getItem('savedTodoList')) || [] 
    //     }
    //   } 
    //   )} ,2000))
    
    //fetch(`${NAREACT_APP_AIRTABLE_API_KEYME}react`)
      fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`)
      .then(response => response.json())
      .then(result => {
        setTodoList(result.data.todoList); 
        setIsLoading(false);
    });

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

 