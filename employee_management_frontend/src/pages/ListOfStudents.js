import React from "react";
import StudentsCard from "../Components/StudentsList/StudentsCard";
import "./ListOfStudents.css";

const DUMMY_DATA = [
  {
    id: 1222,
    name: "Anvesh.sdfghjkl;kjhgfdfg",
    gender: "male",
    dob: "29-03-2002",
    housename: "shivalik",
    standard: 12,
    address: "Vijayapur",
  },
  {
    id: 2333,
    name: "Anup",
    gender: "NA",
    dob: "28-08-1999",
    housename: "Kaveri",
    standard: 12,
    address: "Bijapur",
  },
  {
    id: 23331,
    name: "Gonnya",
    gender: "NA",
    dob: "28-08-1999",
    housename: "Kaveri",
    standard: 12,
    address: "Vijpr",
  },
];

// function ListOfStudents() {
//   return (
//     <div className="students_container">
//       {/* <ul className="student_list"> */}
//       <StudentsCard students={DUMMY_DATA} />

//       {/* {DUMMY_DATA.map((student) => {
//           return (
//             // <li key={student.id} className="student_data">
//             //   <div>{student.name}</div>
//             //   <div>{student.gender}</div>
//             //   <div>{student.housename}</div>
//             // </li>
//             <StudentsCard student={student} />
//           );
//         })} */}
//       {/* </ul> */}
//     </div>
//   );
// }
function ListOfStudents() {
  return (
    <>
      <StudentsCard students={DUMMY_DATA} />
    </>
  );
}
export default ListOfStudents;
