import './css/About.css'
import Contact from '../components/Contact';

function About() {
    return (
        <>
            <section class="content-about">
                <h1>About Us</h1>
                <div class="flex-container-about">
                    <section class="content-holder-a" id="content1">
                        <p>
                            At GymPro, we believe that fitness is more than just a routine—it’s a lifestyle. Founded with the goal of making strength 
                            training and overall wellness accessible to everyone, GymPro is dedicated to providing top-quality fitness gear, expert 
                            training programs, and a supportive community to help you achieve your goals.
                        </p>
                        <img src="https://gym-server-6dlr.onrender.com/images/GymPro-logoresize1.jpg"></img>
                        <p>
                            Whether you're a beginner looking to start your journey or an experienced athlete pushing your limits, GymPro is here to 
                            support you every step of the way. Our mission is simple: to empower individuals through fitness by offering innovative 
                            products, expert guidance, and motivation to keep you moving forward.
                            
                            Join us and become part of the GymPro movement—where strength meets ambition.
                        </p>
                    </section>
                    <section class="content-holder-a" id="content2">
                        <section class="sub-content">
                            <img src="https://gym-server-6dlr.onrender.com/images/kettlebell.png"></img>
                        </section>
                        <section class="sub-content">
                            <p>
                                Founded in 2025, GymPro seeks to provide an innovative product that changes how exercising is approached.
                            </p>
                        </section>
                        <section class="sub-content">
                            <img src="https://gym-server-6dlr.onrender.com/images/stuff.jpg"></img>
                        </section>
                    </section>
                </div>
                <section id="contact-box">
                    <h1>Contact Us</h1>
                    <Contact />
                </section>
            </section>
        </>
    );
}

export default About