import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './component/Navbar'
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
    
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, like sending the data to a server
    console.log(formData);
  };

  return (
    <>
    <Navbar/>
    <div className="contact-form-container">
  <h1>Contact Us</h1>
  <form onSubmit={handleSubmit}>
    <div className="form-group-row">
      <div className="form-group">
        <label htmlFor="name">Full Name :</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Enter your full name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Enter your email"
        />
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="phone">Phone Number :</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
        placeholder="Enter your phone number"
      />
    </div>
    <div className="form-group">
      <label htmlFor="address">Address :</label>
      <input
        type="text"
        id="address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        required
        placeholder="Enter your address"
      />
    </div>
    <br/>
    <button className='buttontwo' type="submit"><Link to='/'>Submit</Link></button>
  </form>
</div>

    </>
  );
};

export default ContactForm;

