import { Component } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CommentArea from "./CommentArea";
import { Col, Row } from "react-bootstrap";

// const SingleBook = ({ book }) => {
//   return (
//     <Col sm={6} md={4} lg={2}>
//       <Card className="h-100">
//         <Card.Img className="h-75" variant="top" src={book.img} />
//         <Card.Body>
//           <Card.Title className="text-nowrap text-truncate">
//             {book.title}
//           </Card.Title>
//           <Card.Text>Price {book.price}$</Card.Text>
//           <Button variant="primary">Go somewhere</Button>
//         </Card.Body>
//       </Card>
//     </Col>
//   );
// };

class SingleBook extends Component {
  // state = {
  //   bookAsin: null,
  // };

  // handleToggleSelected = (asin) => {
  //   this.setState(() => ({
  //     bookAsin: asin,
  //   }));
  // };

  render() {
    // const { book } = this.props;
    // const isSelected = book.asin === this.state.bookAsin;
    const { book, isSelected, handleToggleSelected } = this.props;
    const cardClassName = isSelected ? "border border-3 border-danger" : "";
    // if (book.asin === this.state.bookAsin) {
    //   cardClassName += " border border-3 border-danger";
    // }
    return (
      <>
        <Col md={4}>
          <Card className={cardClassName}>
            <Card.Img
              style={{ height: "300px" }}
              className=""
              variant="top"
              src={book.img}
              onClick={() => handleToggleSelected(book.asin)}
            />
            <Card.Body style={{ backgroundColor: "#d1e7dd" }}>
              <Card.Title className="text-nowrap text-truncate">
                {book.title}
              </Card.Title>
              <Card.Text>Price {book.price}$</Card.Text>
              <Button variant="success">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* <Col md={8}>
          {isSelected && (
            <CommentArea
              // bookSelected={book.asin}
              // stateSelected={this.state.selected}
              // bookState={this.state.bookAsin}
              bookSelected={book.asin}
            />
          )}
        </Col> */}
      </>
    );
  }
}

export default SingleBook;
