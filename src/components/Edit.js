import React from "react";

const Edit = (props) => {
  console.log(props);
  return (
    <div>
      <p>Editing expense page for id {props.match.params.id}</p>
    </div>
  );
};

export default Edit;