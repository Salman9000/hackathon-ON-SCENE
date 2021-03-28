import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Button, Form } from "react-bootstrap";
import NavBar from "./NavBar";
import "../App.css";

function Login() {
  return (
    <>
      <NavBar />
      <div className="Login">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Login;
