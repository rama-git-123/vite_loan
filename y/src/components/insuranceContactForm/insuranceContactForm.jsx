import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import emailjs from "emailjs-com";

const InsuranceContactForm = ({ title }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "your_service_id", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your EmailJS template ID
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          to_email: "ramakant.sahoo85@gmail.com", // Recipient's email
        },
        "your_user_id" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          alert("Form submitted successfully!");
          setFormData({ name: "", phone: "", email: "", message: "" });
        },
        (error) => {
          alert("Error sending form. Please try again.");
        }
      );
  };

  return (
    <div className="container mt-5">
      <div
        className="card p-4"
        style={{ backgroundColor: "#3b5998", color: "white" }}
      >
        <h2 className="text-center">We provide the best value {title}</h2>
        <p className="text-center">
          Simple steps you can take to improve your financial well-being for the
          rest of your life.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Your Name*</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label>Phone*</label>
              <div className="input-group">
                <span className="input-group-text">+91</span>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label>Email*</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-12 mb-3">
              <label>Message*</label>
              <textarea
                className="form-control"
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-danger">
              Get Quote
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InsuranceContactForm;
