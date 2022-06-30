import React from "react";
import StudentCardDetails from "./StudentCardDetails";
import "./StudentsCard.css";
// import ListGroup from "../../../node_modules/react-bootstrap/ListGroup";
import Card from "../../../node_modules/react-bootstrap/Card";

function StudentsCard(props) {
  return (
    // <Card>
    <div>
      <ul>
        {props.students.map((data) => {
          return <StudentCardDetails studentDetails={data} />;
        })}
      </ul>
    </div>
    // </Card>
  );
}

// function StudentsCard(props) {
//   return (
//     <ListGroup key="sm" horizontal="sm" className="my-2">
//       <ul>
//         {props.students.map((data) => {
//           return <StudentCardDetails studentDetails={data} />;
//         })}
//       </ul>
//     </ListGroup>
//   );
// }
export default StudentsCard;
