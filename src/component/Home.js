import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import { v4 as uuidv4 } from "uuid";
import UserBlock from "./UserBlock";
import Blockchain from "./Blockchain";
import Block from "./Block";
let onscene = new Blockchain();
// console.log("Mining Block 1")
// onscene.addBlock(
//   new Block(1, "28/03/2021", { bloodpressure: "120/80", heartrate: "80" })
// );

function Home() {
  const [chain, SetChain] = useState([]);
  const [doctors, setDoctor] = useState([
    {
      id: uuidv4(),
      firstName: "Yahya",
      lastName: "Ahsan",
      email: "yoyo@gmail.com",
      password: "yoyo123",
      city: "Karachi",
      country: "Pakistan",
      timeStamp: "28/3/2020",
      hospital: "SIUT",
      department: "Heart surgeon",
      patients: [],
    },
  ]);
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
      firstName: "Rasheeda",
      lastName: "abbas",
      email: "rashi@gmail.com",
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
      firstName: "Emad",
      lastName: "hanif",
      email: "Emad@gmail.com",
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
    user.map((user) => {
      onscene.addBlock(
        new Block(
          user.id,
          user.timeStamp,
          user.vitalSigns,
          user.firstName,
          user.lastName
        )
      );
      // );
    });
    SetChain(onscene.getwholeChain());
    // getBlock()
    // console.log(chain)
  }, []);

  return (
    <>
      <NavBar />
      <div className="bg-gray-200 min-h-screen pt-8">
        <div className="grid grid-cols-1 gap-1">
          {chain.map((user) => {
            return (
              user.lastName && (
                <div className="px-16 flex justify-start" key={user.id}>
                  {/* <Link to={`/ads/${ad._id}`}> */}
                  <UserBlock user={user} />
                  {/* </Link> */}
                </div>
              )
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
