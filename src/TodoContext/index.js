import { render } from "@testing-library/react";
import React, { useContext } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props){

    const {
        item : todos,
        saveItem : saveTodos,
        loading,
        error
        } = useLocalStorage('TODOS_V1', []);

    
      const [searchValue,setSearchValue] = React.useState('');
      const [createValue,setCreateValue] = React.useState('');
      const completedTodos = todos.filter(todo => todo.completed == true).length;
      const totalTodos = todos.length;
    
    
      let searchedTodos = [];
    
      if (!searchValue.length >= 1){
        searchedTodos = todos;
      } else {
        searchedTodos = todos.filter(todo => {
          const todoText =  todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText)
        })
      }
    
      
    
      const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        if(newTodos[todoIndex].completed){
          newTodos[todoIndex].completed = false
        }else{
          newTodos[todoIndex].completed = true;
        }
        
        saveTodos(newTodos);
      }
    
    
        const deleteTodo = (text) => {
          const todoIndex = todos.findIndex(todo => todo.text === text);
          const newTodos = [...todos];
          newTodos.splice(todoIndex,1)
          saveTodos(newTodos);
          }
            
            const createNewTodo = (text) => {
              const repeat = false;

            const todoIndex = todos.findIndex(todo => {
              if(todo.text === text){
                repeat = true;
              }
              });
          
                if(!repeat){
                  const newTodos = [...todos]
                  console.log(text + 'este es el texto')
                  let TodoAux = {text : text,completed : false};
                  console.log(TodoAux)
                    newTodos.push(TodoAux)
                    saveTodos(newTodos);
                }else{

                  console.log('se repite ')
                  setCreateValue("");

                }
              
            }
          
          
            

            
            
      
    return(

        <TodoContext.Provider value={{
            error,
            loading,
            searchValue,
            setSearchValue,
            totalTodos,
            completedTodos ,
            searchedTodos ,
            completeTodo,
            deleteTodo,
            createValue,
            setCreateValue,
            createNewTodo,
        }}>
        {props.children}
        </TodoContext.Provider>
    )
}

export{TodoContext,TodoProvider}