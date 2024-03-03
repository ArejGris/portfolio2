 'use client'
 import ContactForm from "@/components/contact/contact-form";
import Notification from "@/components/ui/notifications/Notification";
import { Fragment, useState } from "react";

const Contact = () => {
   const [showNot,setShowNot]= useState(null)
   function setShowNotificationActive(){
    setShowNot({text:'success to send your message',status:'success'})
   }
   function setShowNotificationDeactive(){
    setShowNot(null)
   }
    return ( 
    <Fragment>
      <ContactForm activeNot={setShowNotificationActive} deactiveNot={setShowNotificationDeactive}/>
     {showNot && <Notification text={showNot.text} status={showNot.status}/>}
    </Fragment> );
}
 
export default Contact;