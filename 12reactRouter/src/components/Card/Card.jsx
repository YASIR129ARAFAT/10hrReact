import React from "react";
import "./Card.css";

function Card({ first_name, last_name, email, gender }) {
  return (
    <div className="card">
      <div>
        Name:{first_name} {last_name}
      </div>
      <div>Email:{email}</div>
      <div>Gender:{gender}</div>
    </div>
  );
}

export default Card;
