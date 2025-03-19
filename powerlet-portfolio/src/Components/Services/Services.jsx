import React from "react";
import "./Services.css"; // Assuming you have a CSS file for styling

const services = [
  { icon: "💻", title: "Web Development", description: "I build fully responsive and interactive websites tailored to your needs." },
  { icon: "📊", title: "Data Science", description: "Leveraging data to extract insights and build predictive models." },
  { icon: "📈", title: "Statistics & Python", description: "Helping you understand data through statistics and Python programming." },
  { icon: "📱", title: "Social Media", description: "Enhancing your social media presence with strategic planning and content." }
];

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>My <span>Services</span></h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service">
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
