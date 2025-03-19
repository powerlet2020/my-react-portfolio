import React from "react";
import "./Contact.css"; // Assuming you have a CSS file for styling

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h1>
          Get in <span className="highlight">touch</span>
        </h1>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <h3>
            <span className="highlight-text">Let's talk</span>
          </h3>
          <p>
            I'm open to new projects and would love to collaborate. Feel free to
            reach out with any ideas or inquiries—I'm always available to
            connect!
          </p>
          <div className="contact-details">
            <p>📧 powerlet@gmail.com</p>
            <p>📞 024-630-4979</p>
            <p>📍 Accra, Ghana</p>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Enter your name" />

            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder="Enter your email" />

            <label htmlFor="message">Write your message here</label>
            <textarea id="message" placeholder="Enter your message"></textarea>

            <button type="submit">Submit now</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
