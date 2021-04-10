
import { TodoList } from './classes/todo-list.class';
import { Todo } from './classes/todo.class';
import { crearTodoHtml } from './js/componentes';

// import { Todo, TodoList } from './classes';
import './styles.css';

export const todoList = new TodoList();

todoList.todos.forEach( todo => crearTodoHtml (todo));

// const tarea = new Todo('Aprender JavaScript!!');


// todoList.nuevoTodo( tarea );


// console.log( 'todos', todoList.todos);

// crearTodoHtml(tarea);

// localStorage.setItem('mi-key', 'ABC123');
// sessionStorage.setItem('mi-key', 'ABC123');

    // setTimeout(() => {

    //     localStorage.removeItem('mi-key');
        
    // }, 1500);