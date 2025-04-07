import "./css/Workouts.css"

function Workouts(props) {
    return (
        <section className="workout">
            <img src={"https://gym-server-6dlr.onrender.com/images/" + props.image} alt={props.name}/>
            <h3>{props.name}</h3>
        </section>
    );
}

export default Workouts;