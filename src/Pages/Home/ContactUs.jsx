import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../App.css';
import { useLocation } from 'react-router-dom';

export default function ContactUs() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm('service_0dqdvxp', 'template_eyxatfr', e.target, '0JSOoCYlmaWUYuVVO');
      console.log(result.text);
      toast.success('Message sent successfully!');
    } catch (error) {
      console.error(error.text);
      toast.error('Failed to send message. Please try again.');
    }

    e.target.reset();
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <br />
        <h1>Join Us</h1>
      </div>
      <form className="contact--form--container" onSubmit={sendEmail}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="text"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
          {/* Repeat similar code for other input fields */}
        </div>
        <label htmlFor="choose-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select id="choose-topic" className="contact--input text-md" name="topic_selected">
            <option>Select One...</option>
            <option>Press</option>
            <option>Digital Media</option>
            <option>Information Documentation</option>
            <option>Public Relations</option>
            <option>Training and Formation</option>

          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="Message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <div>
          <button type="submit" className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
      <ToastContainer position="bottom-right" autoClose={5000} />
    </section>
  );
}
