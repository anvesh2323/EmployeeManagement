import { useState, useEffect } from "react";
import TeachersList from "../Components/TeachersList/TeachersList";
import Backdrop from "../Components/UI/BackDrop";
import AddTeacher from "./AddTeacher";
// import ;
// import {Route} from 'react-router-dom';

// const Dummy_data = [
//     {
//         id : 1,
//         name: "Anvesh",
//         address: "always busy",
//         dob: "02-02-1221"
//     },
//     {
//         id : 2,
//         name: "Anup" ,
//         address: "always lazy",
//         dob: "12-12-1221"
//     }
// ];

function ListOfTeachers() {
  const [teachersData, setTeachersData] = useState([]);
  console.log("Start");
  useEffect(() => {
    console.log("UseEffect");
    console.log("------------");
    fetch("http://localhost:5001/cartItems")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        // const obtainedData = data.map((teacherData) =>{
        //     // return {
        //     //     id : teacherData.id,
        //     //     name : teacherData.name,
        //     //     address : teacherData.address,
        //     //     dob : teacherData.dob
        //     // };
        //     return teacherData;
        // });
        const obtainedData = data;

        console.log("Anvesh");
        console.log(obtainedData);
        setTeachersData(obtainedData);
      });
  }, []);

  const [needToAddTeacher, setAddTeacher] = useState(false);

  const AddTeacherHandler = () => {
    setAddTeacher(true);
    initializeBackDrop();
  };

  // function FetchDataHandler(){
  //     fetch('http://localhost:5001/cartItems').then(
  //         (response) => {
  //             console.log(response)
  //             return response.json()
  //     }).then((data) =>{
  //         // console.log("Anvesh")
  //         const obtainedData = data.map((teacherData) =>{
  //             return {
  //                 id : teacherData.id,
  //                 name : teacherData.name,
  //                 address : teacherData.address,
  //                 dob : teacherData.dob
  //             };
  //         });
  //         console.log("Anvesh")
  //         console.log(obtainedData)
  //         setTeachersData(obtainedData)
  //     });
  // }

  const [activateBackdropNow, activateBackdrop] = useState(true);

  function initializeBackDrop() {
    activateBackdrop(true);
  }

  function RemoveBackDrop() {
    activateBackdrop(false);
    // activateBackdrop(true);
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        {/* <button >
                    <a href='http://localhost:3000/teachers/addteacher/'>
                        <AddTeacher/>
                        Add
                    </a>
                </button> */}
        <button onClick={AddTeacherHandler}>Add</button>

        {needToAddTeacher && activateBackdropNow ? (
          <Backdrop onCancel={RemoveBackDrop} />
        ) : null}
        {needToAddTeacher && activateBackdropNow ? (
          <AddTeacher onClick={RemoveBackDrop} />
        ) : null}
        {/* {needToAddTeacher === true ? <AddTeacher onClick = {RemoveBackDrop} /> : null} */}
      </div>
      <div>
        <h1>Teachers Details</h1>
        {/* {Dummy_data.map((teachers)=> { 
                        return <li key = {teachers.id} >{teachers.name}</li>;
                })} */}
        <TeachersList teachersData={teachersData} />
      </div>
    </div>
  );
}

export default ListOfTeachers;
