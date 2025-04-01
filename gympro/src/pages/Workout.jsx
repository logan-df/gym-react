import './css/Workout.css'

function Workout() {
    return (
        <>
            <section class="content-workout">
                <h1>Workout Routines</h1>
                <h2>Chest</h2>
                <div class="flex-container-workout" id="chest">
                    <section class="sub-content-w">
                        <img src="images/bench.jpg"></img>
                        <h3>Bench Press</h3>
                    </section>
                    <section class="sub-content-w">
                        <img src="images/inclinebench.jpg"></img>
                        <h3>Incline Bench Press</h3>
                    </section>
                    <section class="sub-content-w">
                        <img src="images/chestfly.jpg"></img>
                        <h3>Chest Fly</h3>
                    </section>
                    <section class="sub-content-w">
                        <img src="images/overheadpress.jpg"></img>
                        <h3>Shoulder Press</h3>
                    </section>
                </div>
                <h2>Back</h2>
                <div class="flex-container-workout" id="back">
                    <section class="sub-content-w">
                        <img src="images/cablerow.jpg"></img>
                        <h3>Cable Row</h3>
                    </section>
                    <section class="sub-content-w">
                        <img src="images/pullup.jpg"></img>
                        <h3>Pull-Up</h3>
                    </section>
                    <section class="sub-content-w">
                        <img src="images/reversefly.jpg"></img>
                        <h3>Reverse Fly</h3>
                    </section>
                    <section class="sub-content-w">
                        <img src="images/facepull.jpg"></img>
                        <h3>Face Pull</h3>
                    </section>
                </div>
                <h2>Legs</h2>
                <div class="flex-container-workout" id="legs">
                    <section class="sub-content-w">
                        <img src="images/squat.jpg"></img>
                        <h3>Squat</h3>
                    </section>
                    <section class="sub-content-w">
                        <img src="images/deadlift.jpg"></img>
                        <h3>Deadlift</h3>
                    </section>
                    <section class="sub-content-w">
                        <img src="images/RDL.jpg"></img>
                        <h3>RDL</h3>
                    </section>
                    <section class="sub-content-w">
                        <img src="images/legpress.jpg"></img>
                        <h3>Leg Press</h3>
                    </section>
                </div>
            </section>
        </>
    );
}

export default Workout