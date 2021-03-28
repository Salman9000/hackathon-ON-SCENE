import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
// import NavBarForm from "./NavBarForm";
const UserBlock = ({ user, userId }) => {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg bg-white mb-8">
      <div className="p-4 mb-2">
        <div className="font-bold text-xl">
          {user.firstName} {user.lastName}
        </div>
        <div className="font-thin mb-2 text-xs">{user.id}</div>
        <div>
          <p className="inline-block font-bold text-base pr-4">
            Oxygen Level:{" "}
          </p>
          <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {user.vitalSigns.oxygen} %
          </span>
        </div>

        <div>
          <p className="inline-block font-bold text-base pr-4">
            Blood Pressure:
          </p>
          <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {user.vitalSigns.bloodpressure} mmHG
          </span>
        </div>

        <div>
          <p className="inline-block font-bold text-base pr-4">Hear rate: </p>
          <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {user.vitalSigns.heartrate} BPM
          </span>
        </div>

        <div>
          <p className="inline-block font-bold text-base pr-4">Temperature: </p>
          <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {user.vitalSigns.temperature} Celcius
          </span>
        </div>
      </div>
      <div
        className={`flex pb-4 justify-between text-xs px-4 uppercase text-gray-700`}
      >
        <p>{user.country}</p>
        <p>{user.city}</p>
      </div>
    </div>
  );
};
export default UserBlock;
