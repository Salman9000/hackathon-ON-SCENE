import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Link to="/">
          <Navbar.Brand>VitalDoctor</Navbar.Brand>
        </Link>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Link to="/login">
          <Button variant="light">Login</Button>{" "}
        </Link>
        <Link to="/selection">
          <Button variant="dark">Signup</Button>{" "}
        </Link>
      </Navbar>
    </>
  );
}

export default NavBar;
