import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import NavBar from "./component/NavBar";
import Main from "./component/Main";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [userData, setUserData] = useState(false);
  const [user, setUser] = useState([
    {
      id: uuidv4(),
      doctor: "12345",
      firstName: "Salman",
      lastName: "Hanif",
      email: "salmanhanif133@gmail.com",
      password: "salman33",
      city: "Karachi",
      country: "Pakistan",
      timeStamp: "28/3/2020",
      vitalSigns: {
        oxygen: "99",
        bloodpressure: "110/75",
        heartrate: "65",
        temperature: "104.5",
      },
    },
    {
      id: uuidv4(),
      firstName: "Salman",
      lastName: "Hanif",
      email: "salmanhanif133@gmail.com",
      password: "salman33",
      city: "Karachi",
      country: "Pakistan",
      timeStamp: "29/3/2020",
      vitalSigns: {
        oxygen: "98",
        bloodpressure: "120/80",
        heartrate: "80",
        temperature: "98",
      },
    },
    {
      id: uuidv4(),
      firstName: "Salman",
      lastName: "Hanif",
      email: "salmanhanif133@gmail.com",
      password: "salman33",
      city: "Karachi",
      country: "Pakistan",
      timeStamp: "30/3/2020",
      vitalSigns: {
        oxygen: "76",
        bloodpressure: "120/75",
        heartrate: "75",
        temperature: "100.4",
      },
    },
  ]);
  useEffect(() => {
    let userEmail = JSON.parse(localStorage.getItem("email"));
    if (userEmail) {
      setUserData(user.filter((item) => item.email == userEmail));
    } else {
      setUserData(false);
    }
  }, []);

  return (
    <Router>
      <Main userData={userData} />
    </Router>
  );
}

export default App;
