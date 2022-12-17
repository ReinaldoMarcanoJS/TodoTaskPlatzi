import React from "react";
import './Todolist.css'

function TodoList (props) {
    return (
        <section>
            <ul className="ul-list">
                {props.children}
            </ul>
        </section>
        );
    }



export {TodoList};