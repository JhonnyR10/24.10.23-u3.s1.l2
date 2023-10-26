import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddComment extends Component {
  state = {
    review: {
      comment: "",
      rate: "",
      elementId: this.props.asin,
    },
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(this.state.review),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNjI5M2Y2ZTNkZDAwMTQ5NWU0NGMiLCJpYXQiOjE2OTgzMjUxMzksImV4cCI6MTY5OTUzNDczOX0.he1d8IgEChhNxsL7NXGJP9dTVJHQ4xGxHI1GhUUGBYI",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log("RESPONSE", res);
        if (res.ok) {
          this.setState({
            review: {
              comment: "",
              rate: "",
              elementId: this.props.asin,
            },
          });
        } else {
          throw new Error(
            "C'è stato un errore nel salvataggio della prenotazione"
          );
        }
      })
      .catch((err) => {
        console.log("errore!", err);
      });
  };
  render() {
    console.log(this.props.asin);
    return (
      <Form
        onSubmit={this.handleFormSubmit}
        className="border border-success p-2 mt-2"
      >
        <Form.Group className="mb-3">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your comment"
            value={this.state.review.comment}
            onChange={(e) => {
              this.setState({
                review: {
                  ...this.state.review,
                  comment: e.target.value,
                },
              });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Rate</Form.Label>
          <Form.Control
            type="text"
            placeholder="Rate"
            value={this.state.review.rate}
            onChange={(e) => {
              this.setState({
                review: {
                  ...this.state.review,
                  rate: e.target.value,
                },
              });
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
export default AddComment;
