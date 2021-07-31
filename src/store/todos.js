import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {}

};

export const todosSlice = createSlice({
  name: "todos",

  initialState,

  reducers: {
    add(state, action) {
      const item = {
        text: action.payload.text,
        completed: false,
        id: 1 + Math.max(0, ...state.items[action.payload.todoNumb].map((x) => x.id))
      };

      state.items[action.payload.todoNumb].push(item);
    },

    doneToggle(state, action) {
      const item = state.items[action.payload.todoNumb].find((x) => x.id === action.payload.id);

      if (item) {
        item.completed = !item.completed;
      }
    },

    remove(state, action) {
      state.items[action.payload.todoNumb] = state.items[action.payload.todoNumb].filter((el) => el.id !== action.payload.id);
    },

    edit(state, action) {
      const item = state.items[action.payload.todoNumb].find((x) => x.id === action.payload.id);

      if (item) {
        item.text = action.payload.text;
      }
    },

    addOneTodo(state, action) {
      const id = action.payload;

      state.items[id] = [];
    },

    removeOneTodo(state, action) {
      const id = action.payload;

      delete state.items[id];
    }
  }
});

export const { add, doneToggle, remove, edit, addOneTodo, removeOneTodo } = todosSlice.actions;

export default todosSlice.reducer;
