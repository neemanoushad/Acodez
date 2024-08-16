import React from "react";
import { logoimg } from "../../asset";
import "./Navbar2.css";

function Navbar2() {
  const data = [
    {
      path: "/",
      name: "Course Offered",
    },
    {
      path: "/",
      name: "Join our Live Classes",
    },
    {
      path: "/",
      name: "Free Videos",
    },
    {
      path: "/",
      name: "Study Material",
    },
  ];

  return (
    <div className="logoinfo">
      <img src={logoimg} alt="Logo" />
      <div className="imageinfo">
        {
          data.map((item, index) => (
            <ul key={index}>
              <li>{item.name}</li>
            </ul>
          ))
        }
        <button className="btn">
            <p>Contact Us</p>
            </button>
      </div>
    </div>
  );
}

export default Navbar2;
