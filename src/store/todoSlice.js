import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'Todo',
    initialState: {
        todos: []
    },
    reducers:{
        addTodo(state, action){
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                completed: false
            })
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
    }
});

export const {addTodo, deleteTodo, toggleTodo} = todoSlice.actions;
export default todoSlice.reducer;