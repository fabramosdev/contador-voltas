import React from "react";

const ShowTime = (props) => {
  const time = props.time;
  const minutes = Math.round(time / 60);
  const seconds = time % 60;
  const minutesStr = minutes < 10 ? "0" + minutes : minutes;
  const secondsStr = seconds < 10 ? "0" + seconds : seconds;

  return (
    <p>
      <span className="total__time">
        {`${minutesStr}:${secondsStr}`} <br />
      </span>
      <span className="total__time__text">{props.text}</span>
    </p>
  );
};

export default ShowTime;
