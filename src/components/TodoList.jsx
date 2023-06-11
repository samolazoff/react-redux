import React from 'react';

import TodoItems from './TodoItems';

const TodoList = ({todos, addTodo, toggleTodo,deleteTodo}) => {
    return (
        <ul className='todos-list'>
                {
                    todos.map(todo => 
                        <TodoItems
                            id={todo.id} 
                            text={todo.text} 
                            completed={todo.completed} 
                            key={todo.id} 
                            addTodo={addTodo} 
                            deleteTodo={deleteTodo} 
                            toggleTodo={toggleTodo}>
                        </TodoItems>
                    )
                }
            </ul>
    );
};

export default TodoList;