import { send } from 'emailjs-com';
import {useState} from "react";
import '../contactus.css'
import green from '../asset/green.jpg';


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
    <div class="background">
    <img src={green} alt="contact" className="contact_image"/>
  <div class="container">
    <div class="screen">
         <div class="screen-header">
            <div class="screen-header-left">
                {/* <div class="screen-header-button close"></div> */}
                {/* <div class="screen-header-button maximize"></div> */}
                {/* <div class="screen-header-button minimize"></div> */}
            </div>
            <div class="screen-header-right">
                {/* <div class="screen-header-ellipsis"></div> */}
                {/* <div class="screen-header-ellipsis"></div> */}
                {/* <div class="screen-header-ellipsis"></div> */}
            </div>
         </div>
    <div class="screen-body">
         <div class="screen-body-item left">
                <div class="app-title">
                    <span>CONTACT US</span>
                </div>

                <div class="app-contact">CONTACT INFO : TCLIN100@GMAIL.COM</div>
         </div>

         <div class="screen-body-item">
            <form class="app-form" onSubmit={handleSubmit}>

                <div class="app-form-group">
                    {/* <label>Your Name:</label> */}
                    <input class="app-form-control" placeholder="NAME" name="name" value={formMessage.name} onChange={handleContactChange}></input>
                </div>

                <div class="app-form-group">        
                    {/* <label>Your Email:</label> */}
                    <input class="app-form-control" placeholder="EMAIL" name="email" value={formMessage.email} onChange={handleContactChange}></input>
                </div>

                <div class="app-form-group message">
                    {/* <label>Message:</label> */}
                    <input class="app-form-control" placeholder="MESSAGE" name="message" value={formMessage.message} onChange={handleContactChange}></input>
                </div>

                <button class="app-form-button">SEND</button>
            </form>

         </div>

         </div>

        </div>
      </div>
    </div>
    </>

)}
export default ContactUs;

