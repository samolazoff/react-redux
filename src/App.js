import { useState } from 'react';

import TodoList from './components/TodoList';
import InputField from './components/InputField';

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
    };

    return (
        <section className="cont app">
            <InputField 
                handlSubmit={addTodo} 
                text={text} 
                handleImput={setText}>
            </InputField>
            <h1 className='app__title'>List of todos</h1>
            <TodoList 
                todos={todos} 
                addTodo={addTodo} 
                deleteTodo={deleteTodo} 
                toggleTodo={toggleTodo}>
            </TodoList>
        </section>
    );
};

export default App;