import { Component } from "react";
import { ListGroupItem, Button } from "react-bootstrap";
import { Trash3Fill } from "react-bootstrap-icons";

class SingleComment extends Component {
  render() {
    console.log(this.props.SingleReview._id);
    return (
      <ListGroupItem className="d-flex justify-content-between align-items-center mt-3">
        <div>{this.props.SingleReview.comment} </div>

        <Button
          variant="danger"
          onClick={() => {
            fetch(
              "https://striveschool-api.herokuapp.com/api/comments/" +
                this.props.SingleReview._id,
              {
                method: "DELETE",
                headers: {
                  Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNjI5M2Y2ZTNkZDAwMTQ5NWU0NGMiLCJpYXQiOjE2OTgzMjUxMzksImV4cCI6MTY5OTUzNDczOX0.he1d8IgEChhNxsL7NXGJP9dTVJHQ4xGxHI1GhUUGBYI",
                },
              }
            )
              .then((res) => {
                if (res.ok) {
                  // l'eliminazione è andata bene
                  console.log("eliminazione completata");
                } else {
                  // l'eliminazione NON è andata bene
                  throw new Error(
                    "Qualcosa è andato storto nell'eliminazione della prenotazione"
                  );
                }
              })
              .catch((err) => {
                console.log("ERRORE", err);
              });
          }}
        >
          <Trash3Fill />
        </Button>
      </ListGroupItem>
    );
  }
}
export default SingleComment;
