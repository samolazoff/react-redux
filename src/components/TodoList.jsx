import React from 'react';
import { useSelector } from 'react-redux';

import TodoItems from './TodoItems';

const TodoList = () => {
    const todos = useSelector(state => state.todos.todos);
    return (
        <ul className='todos-list'>
            {
                todos.map(todo => 
                    <TodoItems
                        id={todo.id}
                        title={todo.title} 
                        completed={todo.completed} 
                        key={todo.id} >
                    </TodoItems>
                )
            }
        </ul>
    );
};

export default TodoList;