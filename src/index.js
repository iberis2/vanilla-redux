import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

// stirng으로  "add" 쓰면 오타났을 때 뭐가 잘 못된지 모르는데, 변수로 쓰면 오타나면 자바스크립트에서 선언되지 않은 변수라고 알려줌
const ADD = "add";
const MINUS = "minus";

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return ++count;
    case MINUS:
      return --count;
    default:
      return count;
  }
};
const countStore = createStore(countModifier);
console.log(countStore);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

add.addEventListener("click", () => countStore.dispatch({ type: ADD }));

minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }));
