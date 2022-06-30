import AddTeacherForm from "../Components/AddTeacherForm";
import classes from "./AddTeacher.module.css";
// import { useState } from "react";
// import Backdrop from "../Components/UI/BackDrop";

function AddTeacher(props) {
  // const [activateBackdropNow, activateBackdrop] = useState(false);

  // function addBackDrop(){
  //     activateBackdrop(true);
  // }

  // function RemoveBackDrop(){
  //     activateBackdrop(false);
  // }

  function AddTeacherDataHandler(teacherData) {
    console.log("NOTE = ", teacherData["note"]);
    if (teacherData["note"] === "") {
      teacherData["note"] = "null";
    }

    console.log("NOTE Changed if null  = ", teacherData["note"]);

    fetch("http://localhost:5001/addItem", {
      method: "POST",
      body: JSON.stringify(teacherData),
    });
  }

  return (
    <div className={classes.modal}>
      <h1>Add New Teacher Details:</h1>

      <AddTeacherForm
        onCancel={props.onCancel}
        addTeacherData={AddTeacherDataHandler}
      />
    </div>
  );
}
export default AddTeacher;
