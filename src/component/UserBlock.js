import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
// import NavBarForm from "./NavBarForm";

function UserBlock() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">VitalDoctor</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Button variant="light">Login</Button>{" "}
        <Button variant="dark">Signup</Button>{" "}
      </Navbar>
    </>
  );
}

export default UserBlock;
