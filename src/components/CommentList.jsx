import { Component } from "react";
import SingleComment from "./SingleComment";
import { ListGroup } from "react-bootstrap";

class CommentList extends Component {
  render() {
    // console.log(this.props.listaReview);
    return (
      <ListGroup>
        {this.props.listaReview.map((comment, i) => {
          return <SingleComment key={i} SingleReview={comment} />;
        })}
      </ListGroup>
    );
  }
}

export default CommentList;
