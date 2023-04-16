import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = createAction(ADD);
const deleteToDo = createAction(DELETE);

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [...state, { text: action.payload, id: Date.now() }];
//     case deleteToDo.type:
//       return state.filter((todo) => todo.id !== action.payload);
//     default:
//       return state;
//   }
// };

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) => {
    return state.filter((todo) => todo.id !== action.payload);
  },
});

const store = configureStore({ reducer });

export const actionCreators = {
  addToDo,
  deleteToDo,
};
export default store;
