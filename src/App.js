import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addNewTodo, fetchTodos } from './store/todoSlice';

import TodoList from './components/TodoList';
import InputField from './components/InputField';

import './app.sass';

function App() {

    const  [text, setText] = useState('');
    const {status, error}=useSelector(state=>state.todos);
    const dispatch = useDispatch();
    const addTask = () => {
        dispatch(addNewTodo(text));
        setText('')
    };

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    return (
        <section className="cont app">
            <InputField 
                handlSubmit={addTask} 
                text={text} 
                handleImput={setText}>
            </InputField>
            {status === 'loading' && <h1 className='app__title'>Loading...</h1>}
            {status === 'deleting' && <h1 className='app__title'>Deleting...</h1>}
            {status === 'creating' && <h1 className='app__title'>Creating...</h1>}
            {error && <h1 className='app__title'>ERROR: {error}</h1>}
            {!error && <h1 className='app__title'>Todos: {error}</h1>}
            <TodoList></TodoList>
        </section>
    );
};

export default App;