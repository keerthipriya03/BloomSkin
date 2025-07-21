// src/components/About.js
import React from 'react';
import bloomimg from '../assets/bloom_skin.jpg';
function About() {
  return (
    <div className="container mt-5 pt-5">
      <div className="row align-items-center">
        {/* Image Column */}
        <div className="col-md-6 mb-4">
          <img
            src={bloomimg}
            alt="About Us"
            className="img-fluid rounded shadow"
            style={{height: "600px"}}
          />
        </div>

        {/* Text Column */}
        <div className="col-md-6">
          <h2>About Bloom Skin</h2>
          <p className="lead">
            At <strong>Bloom Skin</strong>, we believe that healthy skin is beautiful skin. Our products are carefully crafted using natural ingredients to nourish, protect, and rejuvenate your skin.
          </p>
          <p>
            We’re committed to sustainability and transparency in everything we do — from sourcing to packaging. Our team is passionate about skincare, and we’re here to help you feel confident and radiant every day.
          </p>
          <p>
            Whether you're looking for everyday essentials or specialized treatments, Bloom Skin has something just for you. Join our skincare journey and discover your natural glow!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
