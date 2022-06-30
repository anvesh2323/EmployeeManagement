import React from "react";
import Card from "react-bootstrap/esm/Card";
import CardHeader from "react-bootstrap/esm/CardHeader";

function UpdateStudent(props) {
  console.log("Update Component");
  return (
    <Card>
      <CardHeader>Editing {props.currentData.name}</CardHeader>
    </Card>
  );
}

export default UpdateStudent;
