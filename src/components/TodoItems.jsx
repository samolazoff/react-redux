import React from 'react';
import { useDispatch } from 'react-redux';

import { deleteTodo} from '../store/todoSlice';
import { toggleTodo } from '../store/todoSlice';
const TodoItems = ({id, text, completed}) => {
    const dispatch = useDispatch();

    return (
        <li key={id} className='todo-item'>
            <input type="checkbox" name="compliteTodo"
                id={'compliteTodo'+id} 
                checked={completed} 
                onChange={() => dispatch(toggleTodo({id}))}/>
            <span className='todo-item__txt'>{text}</span>
            <button className='btn btn-delete'
                onClick={() => dispatch(deleteTodo({id}))}>
                    DELETE
            </button>
        </li>
    );
};

export default TodoItems;