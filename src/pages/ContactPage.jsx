// src/pages/ContactPage.jsx
import React from 'react';
import { Formik, Form, Field } from 'formik';

const ContactPage = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form>
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" placeholder="Your Name" />
            
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" type="email" placeholder="Your Email" />
            
            <label htmlFor="message">Message</label>
            <Field id="message" name="message" as="textarea" placeholder="Your Message" />
            
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactPage;
