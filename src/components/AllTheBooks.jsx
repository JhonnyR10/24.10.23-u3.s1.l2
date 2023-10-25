import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import books from "../data/fantasy.json";

const AllTheBooks = (props) => {
  const firstSixBooks = books.slice(0, 6);
  return (
    <Container>
      <h2>{props.genere}</h2>
      <Row className="gy-2">
        {firstSixBooks.map((book) => {
          return (
            <Col key={book.asin} sm={6} md={4} lg={2}>
              <Card className="h-100">
                <Card.Img className="h-75" variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title className="text-nowrap text-truncate">
                    {book.title}
                  </Card.Title>
                  <Card.Text>Price {book.price}$</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
