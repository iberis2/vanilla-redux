import { useState } from "react";
import { connect } from "react-redux";
import { add } from "../store";
import ToDo from "../ToDo";

const Home = ({ toDos, ...rest }) => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
    rest.addToDo(text);
  };

  return (
    <div>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </div>
  );
};

// vanilla-redux의 store.getState() 역할
function mapStateToProps(state, ownProps) {
  return { toDos: state };
}

// vanilla-redux의 store.dispatch() 역할
function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(add(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
