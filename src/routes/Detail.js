import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = ({ toDos }) => {
  const { id } = useParams();
  const toDo = toDos.find((toDo) => toDo.id === parseInt(id));
  const date = new Date(toDo?.id);
  const dateFormatted = `${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일`;

  return (
    <div>
      <h1>{toDo?.text}</h1>
      {toDo && <h5>created at:{dateFormatted}</h5>}
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
