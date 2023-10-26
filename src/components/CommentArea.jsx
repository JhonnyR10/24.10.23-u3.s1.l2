import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    // review: {
    //   comment: "",
    //   rate: "",
    //   elementId: "",
    // },
    review: [],
  };
  getComments = () => {
    console.log(this.props.bookSelected);
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" +
        this.props.bookSelected,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNjI5M2Y2ZTNkZDAwMTQ5NWU0NGMiLCJpYXQiOjE2OTgzMjUxMzksImV4cCI6MTY5OTUzNDczOX0.he1d8IgEChhNxsL7NXGJP9dTVJHQ4xGxHI1GhUUGBYI",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Errore nella richiesta");
        }
      })
      .then((data) => {
        console.log(data);
        this.setState({
          review: data,
        });
      })
      .catch((error) => {
        console.error("Si è verificato un errore:", error);
      });
  };
  componentDidMount() {
    this.getComments();
  }
  render() {
    console.log(this.state.review);
    return (
      <div>
        <CommentList listaReview={this.state.review} />
        <AddComment asin={this.props.bookSelected} />
      </div>
    );
  }
}
export default CommentArea;
