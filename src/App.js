import { useState } from 'react';

import './app.sass';

function App() {

    const  [todos, setTodos] = useState([]);
    const  [text, setText] = useState('');

    const addTodo = () => {

        if(text.trim().length){
            setTodos([
                ...todos,
                {
                    id: new Date().toISOString(),
                    text,
                    completed: false
                }
            ])
        }
    };

    const deleteTodo = (id) =>{
        setTodos([
            ...todos.filter(todo=>todo.id!==id)
        ])
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map(
                todo => {
                    if(todo.id !== id){
                        return todo
                    }else{
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    }
                }
            )
        )
    }
    return (
        <div className="cont app">
            <label htmlFor="itemTodo" className='app-label'>
                <input type="text" name="itemTodo" id="itemTodo" value={text} onChange={event =>setText(event.target.value)}/>
                <button type="submit" className='btn' onClick={addTodo}>Add Todo</button>
            </label>
            <h1 className='app__title'>List of todos</h1>
            <ul className='todos-list'>
                {
                    todos.map(todo => 
                        <li key={todo.id} className='todo-item'>
                            <input type="checkbox" name="compliteTodo" id={'compliteTodo'+todo.id} checked={todo.completed} onChange={() => toggleTodo(todo.id)}/>
                            <span className='todo-item__txt'>{todo.text}</span>
                            <button className='btn btn-delete' onClick={() => deleteTodo(todo.id)}>DELETE</button>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default App;