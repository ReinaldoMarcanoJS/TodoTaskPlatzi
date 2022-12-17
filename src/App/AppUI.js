import React from "react";
import {TodoContext} from '../TodoContext';
import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import { TodoList } from '../Todolist';
import { TodoItem } from '../TodoItem';
import {CreateTodoButton} from '../CreateTodoButton';
import { TodoImg } from '../TodoImg';
import {TaskNameTodo} from '../TaskNameTodo'
import { CreateTodoTask } from '../CreateTodoTask';
import {InputTodoTask} from '../InputTodoTask'
import { YourTodoTask } from '../YourTodoTask';
import './App.css';

function AppUI() {
    
        return(
            <React.Fragment>
        
            <div className= "div-Container">
            
                <section className="Section-Create-Todo-Task-container">
                
                    <CreateTodoTask className="Create-Todo-Task" />
                    <TodoImg className= "TodoImg" />
                
                </section>
                
                <section className="Section-Create-Todo-TaskName-container">
                <TaskNameTodo/>
                <InputTodoTask />
                <CreateTodoButton />
                </section>

            <section className="Section-Create-Todo-TodoSearch-container" >
                <YourTodoTask/>

                        
                <TodoSearch/>
                    
                
            </section>

        <section className="Section-Create-Todo-TodoCounter-container" >
        
            <TodoCounter />
                <TodoContext.Consumer>
                    {value => (
                        <TodoList>
                        {value.error && <p className="p-State">desesperate, hubo un error...</p>}
                        {value.loading && <p className="p-State">estamos cargando, no desesperes...</p>}
                        {(!value.loading && !value.searchedTodos.length) && <p className="p-State">Crea tu primer TODO!</p>}
        
        
                        {value.searchedTodos.map(todo => (
                            <TodoItem 
                            key={todo.text}
                            text= {todo.text}
                            completed={todo.completed}
                            onComplete= {() => value.completeTodo(todo.text)}
                            onDelete={() => value.deleteTodo(todo.text)}
                             />
                        ))}
                        </TodoList >
                    )
                    }
                </TodoContext.Consumer>
        </section >
        </div>
            
        

        
    </React.Fragment>

    
        )
    }

export {AppUI};
