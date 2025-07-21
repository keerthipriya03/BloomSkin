// src/components/Contact.js
import React from 'react';

function Contact() {
  return (
    <div className="container mt-5 pt-5" style={{padding: "50px"}}>
      <div className="row align-items-center justify-content-center">
        {/* Image Column */}
        <div className="col-md-6 mb-4">
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.XvfXBbJ0Wbk2AqwAFZ25YAHaHa?w=2000&h=2000&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Contact"
            className="img-fluid rounded shadow"
            style={{height:"500px"}}
          />
        </div>

        {/* Form Column */}
        <div className="col-md-6">
          <form className="p-4 border rounded shadow" style={{ backgroundColor: '#f8f9fa' }}>
            <h3 className="text-center mb-4">Contact Us</h3>

            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
