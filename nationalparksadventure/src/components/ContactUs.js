import { send } from 'emailjs-com';
import {useState} from "react"


function ContactUs () {

    const [formMessage, setFormMessage] = useState ({
        name: '',
        email: '',
        message: '',
    });

    const handleContactChange = (e) => {
        setFormMessage({...formMessage, [e.target.name]:e.target.value})
        // console.log(e.target.value)
    }

    function handleSubmit(e) {
        console.log("submitted")
        e.preventDefault();

        const templateParams = {
            to_name: 'National Parks Adventure',
            from_name: `${formMessage.name} (${formMessage.email})`,
            message: formMessage.message,
        };
    
        send(
            "service_9zjkxw8",
            "template_kcmhwik",
            templateParams,
            "user_fyydFLUFPAtByA3YTHbR7",
        ).then(
            (result) => {
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
                alert('Something went wrong, please try again.');
            }
        );
        e.target.reset();
    }

return(
    <>
            <form onSubmit={handleSubmit}>
                <p>We want to hear from you.</p>
    
                    <label>Your Name:</label>
                    <input name="name" value={formMessage.name} onChange={handleContactChange}></input>

                    <label>Your Email:</label>
                    <input name="email" value={formMessage.email} onChange={handleContactChange}></input>
 
                    <label>Message:</label>
                    <input name="message" value={formMessage.message} onChange={handleContactChange}></input>

                <button>Send!</button>
            </form>
    </>

)}
export default ContactUs;

