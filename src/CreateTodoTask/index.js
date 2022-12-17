import React from "react";
import './CreateTodoTask.css'

function CreateTodoTask(){
    return (
        <div className="div-CreateTodoTask">

            <li className="CreateTodoTask">

                <section className="Section-Create-Task">
                <a id="a-CreateTodoTask">Create</a>  
                </section>            

            </li>

            <li className="CreateTodoTask">
                <section className="Section-Create-Task">
                <a id="a-CreateTodoTask">New</a> 

                </section>
            </li>

            <li className="CreateTodoTask">
                <section className="Section-Create-Task">
                 <a id="a-CreateTodoTask">Task</a>

                </section>
            </li>


        </div>
        
           
        
    )
}

export { CreateTodoTask}