import './css/WorkoutHolder.css'

import {useState, useEffect} from "react";
import axios from "axios";
import Workouts from "./Workouts"

const WorkoutHolder = () => {
    const [workouts, setWorkouts] = useState([]);
    
    //After page loaded do async json retrieval
    useEffect(()=>{
        //Automatically execute the async function
        (async () => {
            const response = await axios.get("https://gym-server-6dlr.onrender.com/api/workouts");
            setWorkouts(response.data);
        })();
    },[]);

    return (
        <>
            <h2>Chest</h2>
            <div id="chest" className="flex-container">
                {workouts.filter(workout => workout.muscle === 'chest').map(workout => (
                    <Workouts
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