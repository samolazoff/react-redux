import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from './store/todoSlice';

import TodoList from './components/TodoList';
import InputField from './components/InputField';

import './app.sass';

function App() {

    const  [text, setText] = useState('');
    const dispatch = useDispatch();
    const addTask = () => {
        dispatch(addTodo({text}));
        setText('')
    };

    return (
        <section className="cont app">
            <InputField 
                handlSubmit={addTask} 
                text={text} 
                handleImput={setText}>
            </InputField>
            <h1 className='app__title'>List of todos</h1>
            <TodoList></TodoList>
        </section>
    );
};

export default App;