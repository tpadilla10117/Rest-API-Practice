import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import { SvgIcon } from '@mui/material';

function Todo( {text, todo, todos, setTodos}) {

/* Delete and Completed functions: */
    const deleteHandler = () => {
        setTodos(
            todos.filter( (element) => element.id !== todo.id)
        )
    };

    const completeHandler = () => {
        setTodos(todos.map( (item) => {
            if(item.id === todo.id) {
                return {
                    ...item,
                    completed : !item.completed
                }
            }
            return item;
        }))
    };

    return (
        <div className='todo-parent-container'>
            <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            {text}
            </li>

            <button 
                className='todo-item-complete'
                onClick={completeHandler}
                aria-label='complete todo icon'
            >
                <SvgIcon component={CheckIcon} />
            </button>
            <button 
                className='todo-item-delete'
                onClick={deleteHandler}
                aria-label='uncomplete todo icon'
            >
                <SvgIcon component={DeleteIcon} />
            </button>
        </div>

    );
};

export default Todo;