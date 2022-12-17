import React from 'react';

import './App.css';
import { AppUI } from './AppUI';
import {TodoProvider} from '../TodoContext'


/*const defaulTodos = [
  {text: 'cortar cebolla', completed: false},
  {text: 'Tomar el curso intro a react', completed: false},
  {text: 'llorar con la llorona', completed: false}

]*/



function App(props) {

 

  
  return (

    <TodoProvider >
      <AppUI/>
    </TodoProvider>
  );
};

export {App};
