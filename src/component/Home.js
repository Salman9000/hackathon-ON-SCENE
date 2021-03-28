import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import { v4 as uuidv4 } from "uuid";
import UserBlock from "./UserBlock";

function Home() {
  const [user, setUser] = useState([
    {
      id: uuidv4(),
      firstName: "Salman",
      lastName: "Hanif",
      email: "salmanhanif133@gmail.com",
      password: "salman33",
      city: "Karachi",
      country: "Pakistan",
      vitalSigns: {
        oxygen: "60",
        bloodpressure: "60",
        heartrate: "60",
        temperature: "60",
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
      vitalSigns: {
        oxygen: "60",
        bloodpressure: "60",
        heartrate: "60",
        temperature: "60",
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
      vitalSigns: {
        oxygen: "60",
        bloodpressure: "60",
        heartrate: "60",
        temperature: "60",
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
      vitalSigns: {
        oxygen: "60",
        bloodpressure: "60",
        heartrate: "60",
        temperature: "60",
      },
    },
  ]);
  return (
    <>
      <NavBar />
      <div className="bg-gray-200 min-h-screen pt-8">
        <div className="grid grid-cols-1 gap-1">
          {user.map((user) => {
            // if (ad.isApproved == "true") {
            return (
              <div className="px-16 flex justify-start" key={user.id}>
                {/* <Link to={`/ads/${ad._id}`}> */}
                <UserBlock user={user} />
                {/* </Link> */}
              </div>
            );
            // }
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
