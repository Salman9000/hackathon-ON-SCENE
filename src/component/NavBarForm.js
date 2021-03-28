import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormControl, Button, InputGroup } from "react-bootstrap";

function NavBarForm() {
  return (
    <>
      <Form inline>
        <Form.Label htmlFor="inlineFormInputName2" srOnly>
          Email
        </Form.Label>
        <Form.Control
          className="mb-2 mr-sm-2"
          id="inlineFormInputName2"
          placeholder="Email"
        />
        <Form.Label htmlFor="inlineFormInputGroupUsername2" srOnly>
          password
        </Form.Label>
        <InputGroup className="mb-2 mr-sm-2">
          <FormControl
            id="inlineFormInputGroupUsername2"
            placeholder="password"
          />
        </InputGroup>
        <Button type="submit" className="mb-2">
          Login
        </Button>
      </Form>
    </>
  );
}

export default NavBarForm;
