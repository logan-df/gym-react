import "./css/Dialog.css";
import React, { useState } from "react";

const DeleteWorkout = (props) => {
  const [result, setResult] = useState("");

  const deleteWorkout = async() => {;
    const response = await fetch(`https://gym-server-6dlr.onrender.com/api/workouts/${props._id}`,{
      method:"DELETE"
    });
    console.log(`${props._id}`);

    if(response.status === 200){
      setResult("Workout deleted successfully");
      props.closeDeleteDialog();
      props.hideWorkout();
    } else {
      setResult("Sorry, we couldn't delete your workout right now");
    }
  };

  return (
    <div id="delete-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick = {props.closeDeleteDialog}
          >
            &times;
          </span>
          <div id="delete-content">
            <h3>Are you sure you want to delete the {props.name}</h3>
            <section>
              <button onClick = {props.closeDeleteDialog}>No</button>            
              <button onClick={deleteWorkout}>Yes</button>
            </section>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteWorkout;