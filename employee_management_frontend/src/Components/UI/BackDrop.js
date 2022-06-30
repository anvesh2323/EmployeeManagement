import { useState } from "react";
import classes from "./BackDrop.module.css";
// 1. It should render children components above the backdrop
// 2. It should remove children component and backdrop when its clicked on the backdrop
// 3. It should not remove children component when its clicked on the children component

function Backdrop(props) {
  const [showBackdrop, setBackdrop] = useState(true);
  function RemoveBackDrop() {
    setBackdrop(false);
    // console.log(props);
    if (props.removalNotifier != null) {
      // console.log(props.removalNotifier);
      props.removalNotifier();
    }
  }

  function DoNotInherit(event) {
    event.stopPropagation();
  }

  return (
    <>
      {showBackdrop === true ? (
        <div className={classes.backdrop} onClick={RemoveBackDrop}>
          <span onClick={DoNotInherit}>{props.children}</span>
        </div>
      ) : null}
    </>
  );
}

export default Backdrop;
