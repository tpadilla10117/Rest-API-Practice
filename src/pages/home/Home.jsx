import React, { useState, useEffect } from 'react';

import {
    Form,
    TodoList
} from '../../components/utils.js';

const HomePage = () => {

/* State for form inputs, todos, dropdown menu, and filtered todos:  */
    const [ inputText, setInputText ] = useState('');
    const [ todos, setTodos ] = useState([]);
    const [ status, setStatus ] = useState('all'); 
    const [ filteredTodoItems, setFilteredTodoItems ] = useState([]);

/* Save Todos in LocalStorage: */

    const retrieveTodosLocalStorage = () => {
        if(localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]) );
        } else {
            let todoLocal = JSON.parse(localStorage.getItem('todos'));
            setTodos(todoLocal);
        }
    };

/* Functions for filtering Todos: */

    useEffect( () => {
        retrieveTodosLocalStorage();
    }, []);

    useEffect( () => {

        const filterHandler = () => {
            if(status === 'completed') {
                setFilteredTodoItems(todos.filter( todo => todo.completed === true ) );
            } else if (status === 'uncompleted') {
                setFilteredTodoItems(todos.filter( todo => todo.completed === false ) );
            } else {
                setFilteredTodoItems(todos);
            }
        };

        const saveTodosLocalStorage = () => {
            localStorage.setItem('todos', JSON.stringify(todos))
        };

        filterHandler();
        saveTodosLocalStorage();

    }, [todos, status]);

    return (
        <main id="homepage-parent-container">
    
            <Form 
                setInputText={setInputText} 
                inputText={inputText}
                todos={todos}
                setTodos={setTodos}
                status={status}
                setStatus={setStatus}
            />
            <TodoList 
                todos={todos}
                setTodos={setTodos}
                filteredTodoItems={filteredTodoItems}
            />

        </main>
    );
};

export default HomePage;