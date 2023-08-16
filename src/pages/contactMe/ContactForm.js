import "../../styles/index.css";
import React, { useState, useRef } from 'react';
import emailjs from "@emailjs/browser";

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      setStatus('Processing request...')
  
      emailjs.sendForm('service_l49rbwz', 'template_oklhrkg', form.current, 'TalPMRUnzL8eHLRR5')
        .then((result) => {
            console.info(result.text);
            setStatus('Message sent successfully!');
        }, (error) => {
            console.error(error.text);
            setStatus('Message failed to send. Please refresh and try again.');
        });
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setTimeout(() => setStatus(''), 10000)
        
    };

    return ( 
        <div className="ContactForm" id="ContactForm">
            <form ref={form} onSubmit={sendEmail}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label htmlFor="subject">Subject:</label>
                <input type="text" id="subject" name="subject" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" placeholder="Your message" value={message} onChange={(e) => setMessage(e.target.value)} required/>
                <input type="submit" className="btn btn-info" value="Send Message"/>
                <br />
                <label htmlFor="status" id="status">{status}</label>
            </form>
        </div>
     );
}
 
export default ContactForm;