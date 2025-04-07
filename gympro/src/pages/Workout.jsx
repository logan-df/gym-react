import WorkoutHolder from '../components/WorkoutHolder';
import './css/Workout.css'

function Workout() {
    return (
        <>
            <section className="content-workout">
                <h1>Workout Routines</h1>
                <WorkoutHolder />
            </section>
        </>
    );
}

export default Workout