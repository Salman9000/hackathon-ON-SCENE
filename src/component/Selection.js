import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Col,
  Row,
  Container,
} from "react-bootstrap";
import NavBar from "./NavBar";
// import NavBarForm from "./NavBarForm";

function Selection() {
  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <Link to="/signup/Doctor">
              <Button variant="light">Doctor</Button>{" "}
            </Link>
            <Link to="/signup/User">
              <Button variant="dark">User</Button>{" "}
            </Link>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default Selection;
