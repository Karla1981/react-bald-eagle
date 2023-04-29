import React from "react";
import TodoListItem from "./TodoListItem";

// 1.4 Add props as a parameter to the TodoList functional component
function TodoList({todoList, onRemoveTodo}){

    return(
        <ul>
          {todoList.map(function(todo){
              console.log(todo);
                return( 
                <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} /> //passing props 'todo' 
                )}
            )}
        </ul> 
    );
}
export default TodoList;
//todo.fields.Title