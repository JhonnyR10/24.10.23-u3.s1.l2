import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MyFooter = () => {
  return (
    <Container fluid className="bg-success py-4">
      <Row>
        <Col className="text-center p-3">
          {new Date().getFullYear()} Copyright:{" "}
          <a className="text-dark" href="https://jhonnysbooks.com/">
            jhonnysbooks.com
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default MyFooter;
