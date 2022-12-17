import React,{useContext} from "react";
import  "./InputTodoTask.css"
import { TodoContext } from "../TodoContext";

function InputTodoTask() {
    const contextt = useContext(TodoContext);
    const {createValue,setCreateValue} = contextt;
    const onValueChange = (event) => {
        
            setCreateValue(event.target.value);
            console.log(createValue)
        }
            
    return (
        
        <section>
            
            <input className="InputTodoTask" 
            name="name"
            placeholder="New Task" 
            value={createValue}
            onChange={onValueChange}
            ></input>
        </section>
    )
}

export {InputTodoTask};