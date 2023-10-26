import { Component } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SingleBook from "./SingleBook";
import { Container } from "react-bootstrap";

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
    searchTerm: "",
    filteredBooks: this.props.books, //cosi mostro tutti i libri all'inizio
  };

  handleSearch = (e) => {
    const searchTerm = e.target.value;
    this.setState({ searchTerm }); //piazzo quello che scrivo nell'input nello state

    const filtered = this.props.books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    ); //modifico l'array iniziale filtrando e includendo solo quello che ho scritto nell'input e che è presente nello state
    this.setState({ filteredBooks: filtered }); //mostro solo quelli che corrispondono
  };

  render() {
    return (
      <Container>
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

        <Row className="gy-2 mb-3">
          {this.state.filteredBooks.map((book, index) => (
            <Col key={index} xs={6} sm={6} md={4} lg={3} xl={3}>
              <SingleBook book={book} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
export default BookList;
