import React, { Component } from "react";

const Like = (props) => {
  let classes = "fa fa-heart";
 if (!props.liked) classes += "-o";

  return( 
  <i  className={classes} 
   onClick={props.onClick}
  style={{cursor: "pointer"}}
  />
  );
};

export default Like;
