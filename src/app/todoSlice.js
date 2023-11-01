import { createSlice } from '@reduxjs/toolkit';

const getValue = ()=>{
  const localTodoList = window.localStorage.getItem("todoList");
  return localTodoList
    ? JSON.parse(localTodoList)
    : window.localStorage.setItem("todoList", JSON.stringify([]));
}

const initialValue = {
  todoList: getValue()
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
        const allTodos = window.localStorage.getItem("todoList");
        if(allTodos){
            const allTodosJSON = JSON.parse(allTodos);
            const newTodosJSON = [...allTodosJSON, action.payload]
            window.localStorage.setItem("todoList", JSON.stringify(newTodosJSON))
            state.todoList = newTodosJSON;
        }else {
          window.localStorage.setItem("todoList", JSON.stringify([{ ...action.payload}]))
        }
    },
    deleteTodo: (state, action) => {
      const allTodos = window.localStorage.getItem("todoList");
      if(allTodos){
        const allTodosJSON = JSON.parse(allTodos);
        const filteredTodos = allTodosJSON.filter((todos)=> todos.id !== action.payload);
        window.localStorage.setItem("todoList", JSON.stringify(filteredTodos));
        state.todoList = filteredTodos
      }
    }
  },
})

export const { addTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer



      // The redux Toolkit allows you to write "mutating" logic in reducers. It
      // It is possible because it implicitly uses Immer library to doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.


      // Action creators are generated for each case reducer function
