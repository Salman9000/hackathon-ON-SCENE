import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import NavBar from "./component/NavBar";
import Main from "./component/Main";

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
