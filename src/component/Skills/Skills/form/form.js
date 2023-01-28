import * as React from "react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fvjmqkr', 'template_ner8j1u', form.current, 'Zr22jefdTB8t3hG2u')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form id="formInterior" ref={form} onSubmit={sendEmail}>
      <label for="from_name">Name</label>
      <input type="text" name="from_name" id="from_name"/>
      <label for="from_email">Email</label>
      <input type="text" name="from_email" id="from_email"/>
      <label>Message</label>
      <textarea id="messageBox" name="message" />
      <input type="submit" id="submitButton" value="Send" />
    </form>
  );
};
export default ContactUs;