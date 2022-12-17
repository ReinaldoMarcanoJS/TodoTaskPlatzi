import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css'


export default function TodoSearch (){
    const context = useContext(TodoContext);
    const {searchValue, setSearchValue} = context;

    const onSearchValueChange = (event) => {
    
            console.log(event.target.value);
            setSearchValue(event.target.value);
                
    }
    return (
        <section className="Search-Section">
              <input onChange={onSearchValueChange}
               className="TodoSearch" 
               placeholder='Search Task'
               value={searchValue}/>
        </section>
        )
}


export {TodoSearch}