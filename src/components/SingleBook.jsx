import { Component } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CommentArea from "./CommentArea";

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
  state = {
    selected: false,
  };
  handleToggleSelected = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }));
  };
  render() {
    const { book } = this.props;
    const { selected } = this.state;
    let cardClassName = "h-100";
    if (selected) {
      cardClassName += " border border-3 border-danger";
    }
    return (
      <Col sm={6} md={4} lg={2}>
        <Card className={cardClassName}>
          <Card.Img
            className="h-75"
            variant="top"
            src={book.img}
            onClick={this.handleToggleSelected}
          />
          <Card.Body style={{ backgroundColor: "#d1e7dd" }}>
            <Card.Title className="text-nowrap text-truncate">
              {book.title}
            </Card.Title>
            <Card.Text>Price {book.price}$</Card.Text>
            <Button variant="success">Add to Cart</Button>
            {this.state.selected && <CommentArea bookSelected={book.asin} />}
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
