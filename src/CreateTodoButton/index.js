import React, { useContext } from "react";
import './CreateTodoButton.css';
import { TodoContext} from "../TodoContext";

function CreateTodoButton(props){
    const context = useContext(TodoContext)
    const {createNewTodo} = context;
    const {createValue} = context;
    onsubmit = (e) => {
        e.preventDefault()

        try{
            createNewTodo(createValue)
        }catch(e){
            console.log(e)
        }
        
    }

    return (
        <button className="CreateTodoButton" type="summit" name="button" onClick={(e) => onsubmit(e)}>Create Task</button>
    )
}

export {CreateTodoButton};