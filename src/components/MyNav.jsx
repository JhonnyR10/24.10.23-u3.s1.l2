import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const MyNav = () => {
  return (
    <Navbar expand="lg" className="bg-success">
      <Container fluid>
        <Navbar.Brand href="#home">Johnny's Books</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
