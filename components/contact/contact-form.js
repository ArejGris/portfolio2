'use client'
import { useRef } from 'react'
import './contact-form.css'
const ContactForm = ({activeNot,deactiveNot}) => {
   const name= useRef()
   const email= useRef()
   const message= useRef()
    function handleSubmit(e){
        e.preventDefault()
        const enteredName=name.current.value
        const enteredEmail=email.current.value
        const enteredMessage=message.current.value
        fetch('/api/contact',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
               name: enteredName,
               email:enteredEmail,
               message:enteredMessage
            })
            
        }).then(res=> res.json()).then(data=>{

            console.log(data)
            activeNot()
            setTimeout(() => {
                deactiveNot()
            }, 4000);
        }).catch(error=>{
            console.log(error)
        })
        name.current.value=''
        email.current.value=''
        message.current.value=''
    }
    return ( 
    <section className="contact">
        <h1>How can I help you ?</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="control">
            <label htmlFor="">Your Email</label>
            <input type="email" id='email' ref={email} required/>
          </div>
          <div className="control">
            <label htmlFor="">Your Name</label>
            <input type="Name" id='Name' ref={name} required/>
          </div>
          <div className="controls">
            <label htmlFor="message">Your Massage</label>
            <textarea  id='message' rows={4} ref={message} required/>
          </div>
          <div className="actions">
            <button>Send Message</button>
          </div>
        </form>

    </section> );
}
 
export default ContactForm;