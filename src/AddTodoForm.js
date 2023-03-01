import React from "react";

//  Add props as a parameter in the AddTodoForm function
function AddTodoForm( {onAddTodo} ) {
 
  //Add Todo Input step:
  const [todoTitle, setTodoTitle] = React.useState('');

  // 
  let handleTitleChange = (event) => {

    let newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);

  }
  //function called 'handleAddTodo' that takes event as a parameter
  let handleAddTodo = (event) => {
    //preventDefault method
    event.preventDefault();

    // Save the new iputed value on 'todoTitle'
 
    //ALL OF THESE OPTIONS ARE WORKING!
    //let todoTitle = event.target.title.value;
    //let todoTitle = event.target.elements.title.value;
    //let todoTitle = event.target.elements["todoTitle"].value;
    //let todoTitle = event.target[0].value;

    //log the value of todoTitle in the console
    console.log(todoTitle);
    // Inside the handleAddTodo function invoke the onAddTodo
    onAddTodo({title: todoTitle, id: Date.now()});

    //Clears out the text from input text box
    //ALL OF THESE OPTIONS ARE WORKING!
    //event.target.reset();
    //event.target.title.value = "";
    setTodoTitle('');
  };

  // Destructure Props- cons {todoTitle} ?

  return (
    //Add onSubmit prop and pass the handleAddTodo function
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title:</label>
      <input name="title" type="text" id="todoTitle" value={todoTitle} onChange={handleTitleChange}  />
      <button type="submit">Add</button>
    </form>
  );
}
export default AddTodoForm;
