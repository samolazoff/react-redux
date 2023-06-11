import React from 'react';

const TodoItems = ({id, text, completed, addTodo, toggleTodo,deleteTodo}) => {
    return (
        <li key={id} className='todo-item'>
            <input type="checkbox" name="compliteTodo"
                id={'compliteTodo'+id} 
                checked={completed} 
                onChange={() => toggleTodo(id)}/>
            <span className='todo-item__txt'>{text}</span>
            <button className='btn btn-delete'
                onClick={() => deleteTodo(id)}>
                    DELETE
            </button>
        </li>
    );
};

export default TodoItems;