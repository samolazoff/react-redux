import React from 'react';

const InputField = ({text, handleImput, handlSubmit}) => {
    return (
        <label 
        htmlFor="itemTodo" 
        className='app-label'>
            <input 
                type="text" 
                name="itemTodo" 
                id="itemTodo" 
                value={text} 
                onChange={event =>handleImput(event.target.value)}/>
            <button
                type="submit" 
                className='btn' 
                onClick={handlSubmit}>
                    Add Todo
            </button>
        </label>
    );
};

export default InputField;