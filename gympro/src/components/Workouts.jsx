import "./css/Workouts.css"
import React, { useState } from "react";
import EditWorkout from "./EditWorkout";
import DeleteWorkout from "./DeleteWorkout";

const Workouts = (props) => {
    const [workouts, setWorkouts] = useState(props);
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [showWorkouts, setShowWorkout] = useState(true);

    const openEditDialog = () => {
        setShowEditDialog(true);
    };

    const closeEditDialog = () => {
        setShowEditDialog(false);
    };

    const openDeleteDialog = () => {
        setShowDeleteDialog(true);
    };

    const closeDeleteDialog = () => {
        setShowDeleteDialog(false);
    };

    const hideWorkouts = () => {
        setShowWorkout(false);
    };

    const editWorkouts = (workout) => {
        setWorkouts(workout);
    };

    return (
        <>
        {showWorkouts?(
            <div>
                {showDeleteDialog?(
                <DeleteWorkout
                name={workouts.name}
                _id={workouts._id}
                closeDeleteDialog = {closeDeleteDialog}
                hideWorkouts = {hideWorkouts}
                />
                ):("")}
            
                {showEditDialog?(
                <EditWorkout
                _id={workouts._id}
                name={workouts.name}
                muscle={workouts.muscle}
                image={workouts.image}
                closeEditDialog = {closeEditDialog}
                editWorkouts = {editWorkouts}
                />
                ):("")}

                <section className="workout">
                    <img src={"https://gym-server-6dlr.onrender.com/images/" + props.image} alt={props.name}/>
                    <h3>{workouts.name}</h3>
                    <section id="change-buttons">
                        <a href="#" onClick={openEditDialog} >
                            &#9998;
                        </a>
                        <a href="#" onClick={openDeleteDialog}>
                            &#x2715;
                        </a>
                    </section>
                </section>
            </div>
        ):("")}
        </>
    );
};

export default Workouts;