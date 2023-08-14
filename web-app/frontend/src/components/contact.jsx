import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import "./contact.css";
import {
    FaMapMarker,
    
    FaEnvelope,
    FaGoogle,

  } from 'react-icons/fa';
const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 0.5rem;
`;

const Contact = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!form.current.user_name.value.trim()) {
      newErrors.user_name = "Name is required";
    }

    if (!form.current.user_email.value.trim()) {
      newErrors.user_email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.current.user_email.value)) {
      newErrors.user_email = "Invalid email format";
    }

    if (!form.current.message.value.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm(
          "service_jvpx2kx",
          "template_6am8lg9",
          form.current,
          "byTeVRvhrfxqsQk_D"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    
      <section id="contact">
        <h1 className="section-header">Contact Us</h1>
        <div className="contact-wrapper">
          <form ref={form} onSubmit={sendEmail} class="form-horizontal" id="contact-form">
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  className="form-control"
                  placeholder="NAME"
                  value=""
                  required
                />
                {errors.user_name && (
                  <ErrorMessage>{errors.user_name}</ErrorMessage>
                )}
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="email"
                  name="user_email"
                  className="form-control"
                  id="email"
                  placeholder="EMAIL"
                  value=""
                  required
                />
                {errors.user_email && (
                  <ErrorMessage>{errors.user_email}</ErrorMessage>
                )}
              </div>
            </div>

            <textarea
              name="message"
              className="form-control"
              rows="10"
              
              placeholder="MESSAGE"
              required
            />
            {errors.message && (
              <ErrorMessage>{errors.message}</ErrorMessage>
            )}
            <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
              <div className="alt-send-button">
                <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
              </div>
            </button>
          </form>
          <div className="direct-contact-container">
          <div className='logo-container'>
          <img src='images2/cinterlabs-logo.png' alt='logocinterlabs' className='logocinterlabs' />
          </div>
      <ul className="contact-list">
        <li className="list-item">
          <FaMapMarker size={20} />
          <div className="contact-textplace">University of the Philippines Los Baños
College, Los Baños, Laguna</div>
        </li>
        <li className="list-item">
          <FaEnvelope size={20} />
          <a className="contact-textemail" href="mailto:cinterlabs.uplb@up.edu.ph">
            cinterlabs.uplb@up.edu.ph
          </a>
        </li>
        
      </ul>

      <hr />

      <ul className="social-media-list">
  <li>
    <a href="https://sites.google.com/up.edu.ph/acres2021/home"target="_blank" className="contact-icon">
      <div className="icon-wrapper">
        <FaGoogle size={20} />
        <p className="acres">Applied Computational Sciences Research Symposium</p>
      </div>
    </a>
  </li>
</ul>

      <hr />

      
    </div>
        </div>
      </section>
    
  );
};

export default Contact;
