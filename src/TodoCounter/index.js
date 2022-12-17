import React from "react";
import './TodoCounter.css'

function TodoCounter({total,completed}){
    return(
        
        <section className="Section-Todo-Counter">
            <h2 className='TodoCounter'>Has completado {completed} de {total} TODOs</h2>

        </section>
    )
}


export { TodoCounter };