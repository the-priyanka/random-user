import "./App.css";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";
import { useState } from "react";
const url = "https://randomuser.me/api/portraits/men/75.jpg";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

function App() {
  const [loading, setLoading] = useState(false);
  const [person, setPerson] = useState(null);
  const [title, setTitle] = useState("name");
  const [value, setValue] = useState("The Priyanka");

  const handleValue = (e) => {
    console.log(e.target);
  };
  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img
            src={(person && person.image) || defaultImage}
            alt="random user"
            className="user-img"
          />
          <p className="user-title">my {title} is</p>
          <p className="user-value">{value}</p>
          <div className="values-list">
            <button
              className="icon"
              data-aria-label="name"
              onMouseOver={handleValue}
            >
              <FaUser />
            </button>
            <button
              className="icon"
              data-aria-label="email"
              onMouseOver={handleValue}
            >
              <FaEnvelopeOpen />
            </button>
            <button
              className="icon"
              data-aria-label="age"
              onMouseOver={handleValue}
            >
              <FaCalendarTimes />
            </button>
            <button
              className="icon"
              data-aria-label="street"
              onMouseOver={handleValue}
            >
              <FaMap />
            </button>
            <button
              className="icon"
              data-aria-label="phone"
              onMouseOver={handleValue}
            >
              <FaPhone />
            </button>
            <button
              className="icon"
              data-aria-label="password"
              onMouseOver={handleValue}
            >
              <FaLock />
            </button>
          </div>
          <button className="btn" type="button">
            {loading ? "loading..." : "random user"}
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
