import React from 'react';
import { useDispatch } from 'react-redux';

import { removeTodo, toggleStatus} from '../store/todoSlice';
const TodoItems = ({id, title, completed}) => {
    const dispatch = useDispatch();

    return (
        <li key={id} className='todo-item'>
            <input type="checkbox" name="compliteTodo"
                id={'compliteTodo'+id} 
                checked={completed} 
                onChange={() => dispatch(toggleStatus(id))}/>
            <span className='todo-item__txt'>{title}</span>
            <button className='btn btn-delete'
                onClick={() => dispatch(removeTodo(id))}>
                    DELETE
            </button>
        </li>
    );
};

export default TodoItems;