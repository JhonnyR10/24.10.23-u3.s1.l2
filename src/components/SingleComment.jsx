import { Component } from "react";
import { ListGroupItem } from "react-bootstrap";

class SingleComment extends Component {
  render() {
    console.log(this.props.SingleReview.comment);
    return <ListGroupItem>{this.props.SingleReview.comment}</ListGroupItem>;
  }
}
export default SingleComment;
