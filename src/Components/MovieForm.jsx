import React, { Component } from "react";

const MovieForm = (props) => {
  return (
    <div>
      <h2>MovieForm {props.match.params.id} </h2>
      <button
        className="btn btn-primary"
        onClick={() => props.history.push("/movies")}
      >
        Save
      </button>
    </div>
  );
};
export default MovieForm;
