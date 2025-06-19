import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Message sent!");
      } else {
        alert("Gmail Server Error in Sending Message");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      window.location.href = "/"; 
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#0f0f1b] text-white py-16 px-6 flex flex-col lg:flex-row items-center justify-center gap-12"
    >
      
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="/assets/phone.png"
          alt="Girl checking phone"
          className="w-80 sm:w-96 object-contain"
          data-aos="fade-up"
          data-aos-duration="1500"
        />
      </div>

    
      <div className="w-full lg:w-1/2">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center lg:text-left">
          Contact <span className="text-purple-400">Me</span>
        </h2>
        <p className="text-gray-400 mb-8 text-center lg:text-left">
          Have a question, a collaboration idea, or just want to connect? Fill out the form below! I'd love to hear from you!
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-[#1a1a2e] p-6 rounded-lg shadow-lg space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#0f0f1b] text-white border border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#0f0f1b] text-white border border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#0f0f1b] text-white border border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 transition duration-300 text-white font-medium py-3 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
