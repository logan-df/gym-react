import "./css/AddWorkout.css";
import "./css/Dialog.css";
import React, {useState} from "react";

const AddWorkout = (props) => {
    const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState("");

    const uploadImage = (event) => {
        setPrevSrc(URL.createObjectURL(event.target.files[0]));
    };

    const addToServer = async(event) => {
        event.preventDefault(); //stops us from going to another page or refreshing
        setResult("Sending...");

        const formData = new FormData(event.target);
        console.log(...formData);
        
        const response = await fetch("https://gym-server-6dlr.onrender.com/api/workouts", {
            "method":"POST",
            "body":formData
        });

        if(response.status == 200){
            setResult("Workout added successfully");
            event.target.reset();
            props.closeAddDialog();
            props.updateWorkouts(await response.json());
        } else {
            setResult("Error adding workout");
        }
    };

    return (
        <div id="add-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span id="dialog-close" className="w3-button w3-display-topright" onClick={props.closeAddDialog}>&times;</span>
                    <form id="add-property-form" onSubmit={addToServer}>
                        <h3>Create New Workout</h3>

                        <p>
                            <label htmlFor="name">Workout Name:</label>
                            <input type="text" id="name" name="name" required min="2"></input>
                        </p>

                        <p>
                            <label htmlFor="muscle">Muscle Group:</label>
                            <input type="text" id="muscle" name="muscle" min="2" placeHolder="Must be 'chest', 'back', or 'legs'" required></input>
                        </p>

                        <section className="columns">
                            <div>
                                <p id="img-prev-section">
                                    {prevSrc!=""?
                                    (<img id="img-prev" src={prevSrc}></img>):
                                    ("")
                                    }
                                </p>
                            </div>
                            <p id="img-upload">
                                <label htmlFor="img">:</label>
                                <input type="file" id="img" name="img" accept="image/*" onChange={uploadImage} />
                            </p>
                        </section>

                        <p>
                            <button type="submit">Submit</button>
                        </p>
                        <p>{result}</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddWorkout;