import React from "react";

const ShowLaps = (props) => {
  return (
    <p>
      <span className="lap__number">
        {props.laps} <br />
      </span>
      <span className="lap__text">{props.laps <= 1 ? "volta" : "voltas"}</span>
    </p>
  );
};

export default ShowLaps;
