import classes from "./BackDrop.module.css";
function Backdrop(props) {
  return (
    <div className={classes.backdrop} onClick={props.onCancel}>
      {props.children}
    </div>
  );
}

export default Backdrop;
