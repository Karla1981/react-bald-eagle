import React from "react";

//  Add props as a parameter in the AddTodoForm function
function AddTodoForm(props) {
  //function called 'handleAddTodo' that takes event as a parameter
  const handleAddTodo = (event) => {
    //preventDefault method
    event.preventDefault();

    // Save the new iputed value on 'todoTitle'

    //ALL OF THESE OPTIONS ARE WORKING!
    let todoTitle = event.target.title.value;
    //let todoTitle = event.target.elements.title.value;
    //let todoTitle = event.target.elements["todoTitle"].value;
    //let todoTitle = event.target[0].value;

    //log the value of todoTitle in the console
    console.log(todoTitle);
    // Inside the handleAddTodo function invoke the onAddTodo
    props.onAddTodo(todoTitle);

    //Clears out the text from input text box
    //ALL OF THESE OPTIONS ARE WORKING!
    //event.target.reset();
    event.target.title.value = "";
  };

  return (
    //Add onSubmit prop and pass the handleAddTodo function
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title:</label>
      <input name="title" type="text" id="todoTitle" />
      {/* onChange={handleAddTodo}*/}
      <button type="submit">Add</button>
      {/* <p> Hi! : <strong>{props.todoTitle}</strong></p> */}
    </form>
  );
}
export default AddTodoForm;
