// import Card from 'react-bootstrap/Card';
import MyCard from "../UI/MyCard";
import classes from "./TeachersData.module.css";

function TeachersData(props) {
  return (
    <>
      <li className={classes.listWithoutBullets}>
        <div className={classes.sideBYside}>
          <div>
            <h1>Name: {props.name}</h1>
            <p>Adress: {props.address}</p>
            <p>DOB: {props.dob}</p>
            <p>Gender: {props.gender}</p>
            <p>Got Some notes: {props.note}</p>
          </div>

          <div>
            <button>Want to Edit?</button>
          </div>
        </div>
      </li>
    </>
  );
}

export default TeachersData;
