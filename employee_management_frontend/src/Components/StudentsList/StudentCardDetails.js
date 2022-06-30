import React, { useState } from "react";
// import Backdrop from "../UI/BackDrop";
import "./StudentCardDetails.css";
import ViewStudent from "./ViewStudent";
import ListGroup from "../../../node_modules/react-bootstrap/ListGroup";

// function StudentCardDetails(props) {
//   const [viewStudentData, setViewStudentData] = useState(false);
//   const [activateBackdrop, setActivateBackdrop] = useState(false);
//   function ViewStudentHandler() {
//     setViewStudentData(true);
//     setActivateBackdrop(true);
//   }

//   function RemoveBackdrop() {
//     setActivateBackdrop(false);
//     setViewStudentData(false);
//   }

//   return (
//     <>
//       <li
//         onClick={ViewStudentHandler}
//         className="student_data"
//         key={props.studentDetails.id}
//       >
//         <div className="student_name">{props.studentDetails.name}</div>
//         <div className="student_gender">{props.studentDetails.gender}</div>
//         <div className="student_dob">{props.studentDetails.dob} </div>
//       </li>

//       {activateBackdrop === true ? (
//         <Backdrop onCancel={RemoveBackdrop} />
//       ) : null}
//       {viewStudentData === true ? <ViewStudent data={props} /> : null}
//     </>
//   );
// }

function StudentCardDetails(props) {
  const [viewStudentData, setViewStudentData] = useState(false);
  function ViewStudentModal() {
    setViewStudentData(true);
    // setActivateBackdrop(true);
    console.log("Activating Student Modal");
  }

  function RemoveStudentModal() {
    setViewStudentData(false);
    console.log("Deactivating Student Modal");
  }

  return (
    <>
      <ListGroup
        as="ol"
        numbered
        key={props.studentDetails.id}
        horizontal="sm"
        className="my-2"
        onClick={ViewStudentModal}
        style={{ padding: "10px" }}
      >
        <ListGroup.Item as="li" variant="warning" style={{ width: "100%" }}>
          {props.studentDetails.name}
        </ListGroup.Item>
        <ListGroup.Item style={{ width: "100%" }}>
          {props.studentDetails.gender}
        </ListGroup.Item>
        <ListGroup.Item style={{ width: "100%" }}>
          {props.studentDetails.dob}
        </ListGroup.Item>
      </ListGroup>

      {/* {activateBackdrop && viewStudentData ? (
        <Backdrop onCancel={RemoveBackdrop} />
      ) : null} */}

      {viewStudentData === true ? (
        <ViewStudent
          data={props.studentDetails}
          onCancel={RemoveStudentModal}
          setBackdrop={true}
        />
      ) : null}
    </>
  );
}

export default StudentCardDetails;
