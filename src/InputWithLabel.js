import React from "react";
import { useRef } from 'react';
import { useEffect } from 'react';

//Declare a new functional component - InputWithLabel
const InputWithLabel = ({
    id,
    children,
    title,
    todoTitle,
    handleTitleChange

}) => { 
    const inputRef = useRef(null);
    useEffect(() => {//UseEffect Hook function
        inputRef.current.focus();
    }, []);// Empty dependency - []
    
    return (
    <>
      <label 
        htmlFor={id}>{children}</label>
        &nbsp;
      <input 
        ref={inputRef}
        name={title}
        type='text'
        id={id}
        value={todoTitle} //update todoTitle to come from props?
        onChange={handleTitleChange}// update handleTitleChange to come from props?
     />
    </>
)};
// Export the component - InputWithLabel
export default InputWithLabel;