import React from "react";
import './TodoItem.css'
import { IoIosCloseCircleOutline, IoIosCheckmarkCircleOutline} from "react-icons/io";

function TodoItem(props){

    

    return(
        <li className="TodoItem">
            <span onClick={props.onComplete} className={`'TodoItem-spam-left Icon Icon-check' ${props.completed && 'Icon-check--active'}`}>
               <IoIosCheckmarkCircleOutline></IoIosCheckmarkCircleOutline>
            </span>
            <p className={`Todoitem ${props.completed && 'TodoItem-p-complete'}`}>{props.text}</p>
            <span  onClick={props.onDelete } className=" TodoItem-span-rigth"><IoIosCloseCircleOutline></IoIosCloseCircleOutline></span>
            
        </li>
    )
}


export {TodoItem};




