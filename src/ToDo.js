import { connect } from "react-redux";
import { actionCreators } from "./store";
import { Link } from "react-router-dom";

function ToDo({ text, onBtnClick, id }) {
  return (
    <li>
      <Link to={`/${id}`}>
        {text}
        <button onClick={onBtnClick}>삭제</button>
      </Link>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return { onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)) };
}

export default connect(null, mapDispatchToProps)(ToDo);
