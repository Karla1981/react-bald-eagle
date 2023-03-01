import React from "react";
import TodoListItem from "./TodoListItem";

// Empty array named todoList
// const todoList = [{'id': 1, 'title':'homework' },
// {'id': 2, 'title':'Work' },
// {'id': 3, 'title':'Exercise' },
// ]; // left side of mouse-comnmand + ? to make multiline comments.


// 1.4 Add props as a parameter to the TodoList functional component
function TodoList({todoList}){

    return(
        <ul>
          {todoList.map(function(todo){
            return( 
            <TodoListItem key={todo.id} todo={todo}/> //passing props 'todo' 
    )})}
        </ul> 
    );
}

export default TodoList;