import { send } from 'emailjs-com';
import {useState} from "react";
import '../contactus.css'
import green from '../asset/green.jpg';
import { message } from 'antd';



function ContactUs () {
    const success = () => message.success('Sent! Thank you for your message.');
    
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
        success();
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
    <div className ="background">
    <img src={green} alt="contact" className="contact_image"/>
  <div className ="container">
    <div className ="screen">
         <div className ="screen-header">
            <div className ="screen-header-left">
                {/* <div class="screen-header-button close"></div> */}
                {/* <div class="screen-header-button maximize"></div> */}
                {/* <div class="screen-header-button minimize"></div> */}
            </div>
            <div className ="screen-header-right">
                {/* <div class="screen-header-ellipsis"></div> */}
                {/* <div class="screen-header-ellipsis"></div> */}
                {/* <div class="screen-header-ellipsis"></div> */}
            </div>
         </div>
    <div className ="screen-body">
         <div className ="screen-body-item left">
                <div className ="app-title">
                    <span>CONTACT US</span>
                </div>

                <div className ="app-contact"></div>
         </div>

         <div className ="screen-body-item">
            <form className ="app-form" onSubmit={handleSubmit}>

                <div className ="app-form-group">
                    {/* <label>Your Name:</label> */}
                    <input className ="app-form-control" placeholder="NAME" name="name" value={formMessage.name} onChange={handleContactChange}></input>
                </div>

                <div className ="app-form-group">        
                    {/* <label>Your Email:</label> */}
                    <input className ="app-form-control" placeholder="EMAIL" name="email" value={formMessage.email} onChange={handleContactChange}></input>
                </div>

                <div className ="app-form-group message">
                    {/* <label>Message:</label> */}
                    <input className ="app-form-control" placeholder="MESSAGE" name="message" value={formMessage.message} onChange={handleContactChange}></input>
                </div>

                <button className ="app-form-button">SEND</button>
            </form>

         </div>

         </div>

        </div>
      </div>
    </div>
    </>

)}
export default ContactUs;

