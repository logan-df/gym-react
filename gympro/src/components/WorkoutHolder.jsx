import './css/WorkoutHolder.css'
import {useState, useEffect} from "react";
import axios from "axios";
import Workouts from "./Workouts"
import AddWorkout from "./AddWorkout"

const WorkoutHolder = () => {
    const [workouts, setWorkouts] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);
    
    //After page loaded do async json retrieval
    useEffect(()=>{
        //Automatically execute the async function
        (async () => {
            const response = await axios.get("https://gym-server-6dlr.onrender.com/api/workouts");
            setWorkouts(response.data);
        })();
    },[]);

    const openAddDialog = () => {
        setShowAddDialog(true);
    }

    const closeAddDialog = () => {
        console.log("I'm in the close method")
        setShowAddDialog(false);
    }

    const updateWorkouts = (Workouts) => {
        setWorkouts((workouts)=>[...workouts, Workouts]);
    }

    return (
        <>
            <button id="add-workout" onClick={openAddDialog}>Add Workout</button>

            {showAddDialog?(<AddWorkout 
                closeAddDialog={closeAddDialog}
                updateWorkouts={updateWorkouts}
                /> 
            ): ("")}

            <h2>Chest</h2>
            <div id="chest" className="flex-container">
                {workouts.filter(workout => workout.muscle === 'chest').map(workout => (
                    <Workouts
                    key={workout.id}
                    _id={workout.id}
                    name={workout.name}
                    image={workout.image}
                    />
                ))}
            </div>
            <h2>Back</h2>
            <div id="back" className="flex-container">
                {workouts.filter(workout => workout.muscle === 'back').map(workout => (
                    <Workouts
                    key={workout.id}
                    _id={workout.id}
                    name={workout.name}
                    image={workout.image}
                    />
                ))}
            </div>
            <h2>Legs</h2>
            <div id="legs" className="flex-container">
                {workouts.filter(workout => workout.muscle === 'legs').map(workout => (
                    <Workouts
                    key={workout.id}
                    _id={workout.id}
                    name={workout.name}
                    image={workout.image}
                    />
                ))}
            </div>
        </>
    );
};

export default WorkoutHolder;