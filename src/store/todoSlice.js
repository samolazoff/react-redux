import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async function(_, {rejectWithValue}){
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
            if(!res.ok){
                throw new Error('SERVER ERROR');
            }
            const data = await res.json();
            return data;
            
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

export const removeTodo =createAsyncThunk(
    'todos/removeTodos',
    async function(id, {rejectWithValue, dispatch}){
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {method: "DELETE"});
            if(!res.ok){
                throw new Error('SERVER ERROR');
            }
            dispatch(deleteTodo({id}));
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

export const toggleStatus =createAsyncThunk(
    'todos/toggleStatus',
    async function(id, {rejectWithValue, dispatch, getState}){
        const todo = getState().todos.todos.find(todo => todo.id === id);
        try {
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/todos/${id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        completed: !todo.completed
                    })
                }
            );
            if(!res.ok){
                throw new Error('SERVER ERROR');
            };
            dispatch(toggleTodo({id}));
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

export const addNewTodo =createAsyncThunk(
    'todos/addNewTodo',
    async function(text, {rejectWithValue, dispatch}){
        try {
            const todo = {
                userId: 1,
                title: text,
                completed: false
            };

            const res = await fetch(
                `https://jsonplaceholder.typicode.com/todos/`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(todo)
                }
            );
            if(!res.ok){
                throw new Error('SERVER ERROR');
            };
            const data = await res.json();
            dispatch(addTodo(data));
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

const todoSlice = createSlice({
    name: 'Todo',
    initialState: {
        todos: [],
        status: null,
        error: null
    },
    reducers:{
        addTodo(state, action){
            state.todos.push(action.payload)
        },

        deleteTodo(state, action){
            state.todos = state.todos.filter(todo=>todo.id !== action.payload.id)
        },

        toggleTodo(state, action){
            state.todos = state.todos.map(
                todo => {
                    if(todo.id !== action.payload.id){
                        return todo
                    }else{
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    }
                }
            )
        }
    },
    extraReducers:{
        [fetchTodos.pending]: (state) =>{
            state.status = 'loading';
            state.error = null
        },
        [fetchTodos.fulfilled]: (state, action) =>{
            state.status = 'resolved';
            state.todos = action.payload;
        },
        [fetchTodos.rejected]: (state, action) =>{
            state.status = 'rejected';
            state.error = action.payload;
        },
        [removeTodo.pending]: (state) =>{
            state.status = 'deleting';
            state.error = null
        },
        [removeTodo.fulfilled]: (state) =>{
            state.status = 'resolved';
        },
        [removeTodo.rejected]: (state, action) =>{
            state.status = 'rejected';
            state.error = action.payload;
        },
        [toggleStatus.rejected]: (state, action) =>{
            state.status = 'rejected';
            state.error = action.payload;
        },
        [addNewTodo.rejected]: (state, action) =>{
            state.status = 'rejected';
            state.error = action.payload;
        },
        [addNewTodo.pending]: (state) =>{
            state.status = 'Creating...';
            state.error = null
        },
    }
});

const {addTodo, deleteTodo, toggleTodo} = todoSlice.actions;
export default todoSlice.reducer;