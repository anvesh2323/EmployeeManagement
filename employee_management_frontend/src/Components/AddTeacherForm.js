// import MyCard from "./UI/MyCard";
import { useRef } from "react";

function AddTeacherForm(props) {
  const userName = useRef();
  const userGender = useRef();
  const userDob = useRef();
  const userAddress = useRef();
  const userTaughtStandards = useRef();
  const userTaughtSubject = useRef();
  const userAnyNote = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredName = userName.current.value;
    const enteredGender = userGender.current.value;
    const enteredDob = userDob.current.value;
    const enteredAddress = userAddress.current.value;
    const enteredTaughtStandards = userTaughtStandards.current.value;
    const enteredTaughtSubject = userTaughtSubject.current.value;
    const enteredAnyNote = userAnyNote.current.value;

    const teacherData = {
      name: enteredName,
      gender: enteredGender,
      dob: enteredDob,
      address: enteredAddress,
      taughtStandards: enteredTaughtStandards,
      taughtSubject: enteredTaughtSubject,
      note: enteredAnyNote,
    };

    // console.log(teacherData)

    props.addTeacherData(teacherData);
  }

  return (
    <>
      <form>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" required id="name" ref={userName} />
        </div>
        <p />
        <div>
          <label htmlFor="gender">Gender: </label>
          <input type="text" required id="gender" ref={userGender} />
        </div>
        <p />
        <div>
          <label htmlFor="dob">DOB: </label>
          <input type="text" required id="dob" ref={userDob} />
        </div>
        <p />
        <div>
          <label htmlFor="address">Address: </label>
          <input type="text" required id="address" ref={userAddress} />
        </div>
        <p />
        <div>
          <label htmlFor="subject">Subjects Taught: </label>
          <input type="text" required id="subject" ref={userTaughtSubject} />
        </div>
        <p />
        <div>
          <label htmlFor="standard">Standards Taught: </label>
          <input type="text" required id="standard" ref={userTaughtStandards} />
        </div>
        <p />
        <div>
          <label htmlFor="note">Any note : </label>
          <input type="text" id="note" ref={userAnyNote} />
        </div>
        <p />

        <button onClick={props.onCancel}>Cancel</button>
        <button onClick={submitHandler}>Submit</button>
      </form>
    </>
  );
}

export default AddTeacherForm;
