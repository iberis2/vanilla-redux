import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

export const addToDo = (text) => {
  return { type: ADD, text };
};

export const deleteToDo = (id) => {
  return { type: DELETE, id };
};

const reducer = (state = ["hello"], action) => {
  switch (action.type) {
    case ADD:
      return [...state, { text: action.text, id: Date.now() }];
    case DELETE:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};
const store = createStore(reducer);

// store.dispatch(addToDo);
// store.dispatch(deleteToDo);

export default store;
