import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SingleBook from "./SingleBook";

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
        <Row>
          <div className="col-md-6 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Title Search"
              value={this.state.searchTerm}
              onChange={this.handleSearch}
            />
          </div>
        </Row>
        <Row>
          {this.state.filteredBooks.map((book, index) => (
            <SingleBook key={index} book={book} />
          ))}
        </Row>
      </Container>
    );
  }
}
export default BookList;
