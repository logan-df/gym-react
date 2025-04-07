import './css/Contact.css';
import React from "react";

function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "3a02fcd2-238b-4832-9707-aeee14c3b9fb");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className="contact">
            <form onSubmit={onSubmit}>
            <label for="name">Name</label>
            <input type="text" name="name" required/>
            <label for="email">Email</label>
            <input type="email" name="email" required/>
            <label for="message">Message</label>
            <textarea name="message" required></textarea>

            <button type="submit">Submit Form</button>

            </form>
            <span>{result}</span>

        </div>
    );
};

export default Contact;