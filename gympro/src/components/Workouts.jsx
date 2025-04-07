import "./css/Workouts.css"

function Workouts(props) {
    return (
        <section className="workout">
            <img src={"http://localhost:3001/images/" + props.main_image} alt={props.name}/>
            <h3>{props.name}</h3>
        </section>
    );
}

export default Workouts;