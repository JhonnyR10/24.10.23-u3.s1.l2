import { Component } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SingleBook from "./SingleBook";
import { Container } from "react-bootstrap";
import CommentArea from "./CommentArea";

// const BookList = ({ books }) => {
//   console.log(books);
//   return (
//     <Container>
//       <Row className="gy-2">
//         {books.map((book, index) => {
//           return <SingleBook key={index} book={book} />;
//         })}
//       </Row>
//     </Container>
//   );
// };

class BookList extends Component {
  state = {
    selectedBookAsin: null,
    searchTerm: "",
    filteredBooks: this.props.books, //cosi mostro tutti i libri all'inizio
  };

  handleSearch = (e) => {
    const searchTerm = e.target.value;
    this.setState({ searchTerm, selectedBookAsin: null }); //piazzo quello che scrivo nell'input nello state

    const filtered = this.props.books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    ); //modifico l'array iniziale filtrando e includendo solo quello che ho scritto nell'input e che è presente nello state
    this.setState({ filteredBooks: filtered }); //mostro solo quelli che corrispondono
  };
  handleToggleSelected = (asin) => {
    this.setState({
      selectedBookAsin: asin,
    });
  };
  render() {
    return (
      <Container fluid>
        <Row className="justify-content-center">
          <div className="col-md-6 mb-3">
            <input
              type="text"
              className="form-control bg-success"
              placeholder="Title Search"
              value={this.state.searchTerm}
              onChange={this.handleSearch}
            />
          </div>
        </Row>
        <Row className="mb-3">
          <Col md={6}>
            <Row className="gy-2">
              {this.state.filteredBooks.map((book, index) => (
                <SingleBook
                  key={index}
                  book={book}
                  isSelected={book.asin === this.state.selectedBookAsin}
                  handleToggleSelected={this.handleToggleSelected}
                />
              ))}
            </Row>
          </Col>

          <Col>
            <CommentArea
              // bookSelected={book.asin}
              // stateSelected={this.state.selected}
              // bookState={this.state.bookAsin}
              bookSelected={this.state.selectedBookAsin}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default BookList;
