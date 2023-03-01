import React from "react";

function TodoListItem({todo}) {

    return (
        <span><li>{todo.title}</li></span> 
    )
}
export default TodoListItem;