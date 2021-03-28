import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Button, Form } from "react-bootstrap";
import NavBar from "./NavBar";
import "../App.css";
import { useState } from "react";

function Login() {
  function loginUser(e) {
    e.preventDefault();

    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("password", JSON.stringify(password));
    window.location.href = "/";
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <NavBar />
      <div className="Login">
        <Form onSubmit={loginUser}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
