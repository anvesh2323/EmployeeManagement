import React, { useState } from "react";
import "./ViewStudent.css";
import Card from "react-bootstrap/esm/Card";
import CardHeader from "react-bootstrap/esm/CardHeader";
import Backdrop from "../UI/BackDrop";
import Button from "react-bootstrap/Button";
import UpdateStudent from "./UpdateStudent";
import { Link } from "react-router-dom";

function ViewStudent(props) {
  // const [activateBackdrop, setActivateBackdrop] = useState(true);
  // function RemoveBackDrop() {
  //   setActivateBackdrop(false);

  //   console.log("Deactivating Backdrop");
  // }

  // function SetBackDrop() {
  //   console.log("Activating Backdrop");
  //   setActivateBackdrop(true);
  // }

  const [isSetUpdate, SetUpdate] = useState(false);
  function setUpdateStudent() {
    console.log("Update");
    SetUpdate(true);
  }

  return (
    <>
      {/* {activateBackdrop === true ? ( */}
      <Backdrop>
        <Card className="mb-2 viewStudent">
          <CardHeader>
            <h2>{props.data.name}</h2>
          </CardHeader>
          <Card.Body>
            <Card.Text>Name: {props.data.name}</Card.Text>
            <Card.Text>Gender: {props.data.gender}</Card.Text>
            <Card.Text>DOB: {props.data.dob}</Card.Text>
            <Card.Text>Address: {props.data.address}</Card.Text>
            <Button onClick={props.onCancel} variant="primary">
              Cancel
            </Button>
            <Button
              onClick={setUpdateStudent}
              variant="warning"
              style={{ margin: "5px" }}
            >
              Want to Update??
            </Button>
          </Card.Body>
        </Card>
      </Backdrop>
      {/* ) : null} */}

      {isSetUpdate === true ? (
        // <Link to="/update">
        <UpdateStudent currentData={props.data} />
      ) : // </Link>
      null}
    </>
  );
}

export default ViewStudent;
