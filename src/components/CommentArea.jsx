import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

class CommentArea extends Component {
  state = {
    // review: {
    //   comment: "",
    //   rate: "",
    //   elementId: "",
    // },
    review: null,
    loading: true,
    error: false,
  };
  getComments = () => {
    // console.log(this.props.bookSelected);
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" +
        // this.props.bookState,
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
          this.setState({
            error: true,
            loading: false,
          });
          throw new Error("Errore nella richiesta");
        }
      })
      .then((data) => {
        // console.log(data);
        this.setState({
          review: data,
          loading: false,
        });
      })
      .catch((error) => {
        console.error("Si è verificato un errore:", error);
        this.setState({
          error: true,
          loading: false,
        });
      });
  };
  componentDidMount() {
    this.getComments();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.bookSelected !== this.props.bookSelected) {
      console.log("ciao");
      this.getComments();
    }
  }
  render() {
    // console.log("LOSTATOPASSATO", this.props.stateSelected);
    // console.log(this.state.review);
    return (
      <div className="text-center">
        {this.state.error && <Error />}

        {this.state.loading && (
          <div className="d-flex justify-content-center mt-1">
            <Loading />
          </div>
        )}
        {this.state.review && <CommentList listaReview={this.state.review} />}
        {/* {this.props.stateSelected && ( */}
        <AddComment
          asin={this.props.bookSelected}
          getComments={this.getComments}
        />
        {/* )} */}
      </div>
    );
  }
}
export default CommentArea;
