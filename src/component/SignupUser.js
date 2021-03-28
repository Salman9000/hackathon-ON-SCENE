import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import NavBar from "./NavBar";
// import NavBarForm from "./NavBarForm";

function SignupUser() {
  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Col />
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="fname" placeholder="First Name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="fname" placeholder="Last Name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control type="fname" placeholder="Contact Number" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <Col />
        </Row>
      </Container>
    </>
  );
}

export default SignupUser;
