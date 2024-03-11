import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { getTodo, createTodo, deleteTodo, switchTodo, getTodoDetail } from "../../api/TodoListAPI";

// 구현 순서

// 1. thunk 함수를 구현
// 2. 리듀서 로직 구현 : reducers -> extraReducers
// - 서버 통신은 100% 성공하지 못한다
// - 지금까지의 redux state는 todos, counter 이 있다
// - 앞으로의 state는 isLoading, isError, data 등이 있다
// 3. 기능 확인 + devTools
// 4. store의 값을 조회 + 화면에 렌더링

// Initial State
const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
  error: null,
};

// 1. thunk 함수 만들기
// 2개의 INPUT이 내부에 들어감
// (1) 이름 : 의미는 크게 없음 : ADD_TODO
// (2) 함수  : thunk는 함수를 dispatch로 전달

export const __getTodos = createAsyncThunk("getTodos", async () => {
  try {
    const res = await getTodo();
    return res;
  } catch (error) {
    console.log("error", error);
  }
});

export const __createTodos = createAsyncThunk("createTodos", async (todo)  => {
  try {
    const { data } = await createTodo(todo);
    
  return data
  } catch (error) {
    console.log("error", error);
  }
});

export const __deleteTodos = createAsyncThunk("deleteTodos", async (id) => {
  try {
    const res = await deleteTodo(id);
    return id;
  } catch (error) {
    console.log("error", error);
  }
});

export const __switchTodos = createAsyncThunk("switchTodos", async (item) => {
  try {
    const { data } = await switchTodo(item);
  return data
  } catch (error) {
    console.log("error", error);
  }
});

export const __getTodosDetail = createAsyncThunk("__getTodosDetail", async (id) => {  try {
    const res = await getTodoDetail(id);
    return res;
  } catch (error) {
    console.log("error", error);
  }
});


export const todosSlice = createSlice({
  name: "todos",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(__getTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
    });

    builder.addCase(__createTodos.fulfilled, (state, action) => {
      state.todos = [...state.todos , action.payload]
    });

    builder.addCase(__deleteTodos.fulfilled, (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    });

    builder.addCase(__switchTodos.fulfilled, (state, action) => {
      state.todos = state.todos.map((item) => 
          item.id === action.payload.id ? {...item, isDone: !item.isDone} : item
          )
    });

    builder.addCase(__getTodosDetail.fulfilled, (state, action) => {
      state.todos = [action.payload];
    });
  },
});

// Reducer
export default todosSlice.reducer;
