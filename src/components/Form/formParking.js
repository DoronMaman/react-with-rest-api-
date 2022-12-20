import classes from "./formParking.module.css";
import { useRef } from "react";

function FormParking(props) {
  const divStyle = {
    color: "#5dda50",
  };
  const titleInputParkingRef = useRef();
  const descriptionInputParkingRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const titleParking = titleInputParkingRef.current.value;
    const descriptionParking = descriptionInputParkingRef.current.value;
    const parkingData = {
      title: titleParking,
      description: descriptionParking,
    };

    props.onAddParking(parkingData);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title" style={divStyle}>
          Parking Title
        </label>
        <input type="text" required id="title" ref={titleInputParkingRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="description" style={divStyle}>
          Description
        </label>
        <textarea
          id="description"
          required
          rows="5"
          ref={descriptionInputParkingRef}
        ></textarea>
      </div>
      <div className={classes.actions}>
        <button>Add Parking</button>
      </div>
    </form>
  );
}

export default FormParking;
