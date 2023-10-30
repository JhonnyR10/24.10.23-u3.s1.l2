import { Component } from "react";
import SingleComment from "./SingleComment";
import { ListGroup } from "react-bootstrap";

class CommentList extends Component {
  render() {
    // console.log(this.props.listaReview);
    const getComments = this.props.getComments;
    return (
      <ListGroup>
        {this.props.listaReview.map((comment, i) => {
          return (
            <SingleComment
              key={i}
              SingleReview={comment}
              getComments={getComments}
            />
          );
        })}
      </ListGroup>
    );
  }
}

export default CommentList;
