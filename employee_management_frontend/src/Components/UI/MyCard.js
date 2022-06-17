import classes from "./MyCard.module.css";
function MyCard(props) {
  return <div className={classes.card}> {props.children} </div>;
}

export default MyCard;
