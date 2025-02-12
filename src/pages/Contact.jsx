import { Button, FloatingLabel, Spinner, Textarea, Alert } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom"; // Ensure you import useNavigate if used

export default function Contact() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Ensure you use navigate if needed

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.usermail || !formData.message) {
      return setErrorMessage("Please fill out all fields.");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/users/add-user", { // Adjust URL if needed
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });      

      const data = await res.json();
      setLoading(false);
      
      if (!res.ok) {
        return setErrorMessage(data.message || "An error occurred");
      }

      if (data.success === false) {
        return setErrorMessage(data.message);
      }

      // Handle successful user addition
      console.log("User added successfully", data);
      navigate('/contact'); // Redirect after successful submission
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <p
        data-aos="fade-up"
        className="text-6xl font-semibold font-sans mb-10 text-white"
      >
        Contact
      </p>
      <div className="w-full">
        <iframe
          data-aos="zoom-in"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d902.9617357830582!2d75.83039384309352!3d25.14086493661228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f84eaa7038c0d%3A0x29732bdcc6ab1638!2s426%2C%20Keshavpura%2C%20Mahaveer%20Nagar%2C%20Kota%2C%20Rajasthan%20324005!5e0!3m2!1sen!2sin!4v1721719158255!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <form onSubmit={handleSubmit} className="mt-10 w-full md:p-10">
        <div className="grid grid-flow-col justify-stretch space-x-4">
          <FloatingLabel
            data-aos="fade-right"
            id="username"
            name="username"
            variant="filled"
            label="Your Name"
            onChange={handleChange}
            required
          />
          <FloatingLabel
            data-aos="fade-left"
            id="usermail"
            name="usermail"
            variant="filled"
            label="Your Mail"
            onChange={handleChange}
            required
          />
        </div>
        <Textarea
          data-aos="zoom-in"
          id="message" // Ensure ID matches
          name="message"
          placeholder="Your Message"
          className="h-24"
          onChange={handleChange}
          required
        />
        <div className="">
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
        <div className="flex justify-end">
          <Button
            type="submit"
            data-aos="zoom-in"
            className="flex justify-center items-center mt-2 p-3"
            disabled={loading}
          >
            {loading ? (
              <>
                <Spinner size="sm" />
                <span className="pl-3">Loading...</span>
              </>
            ) : (
              <>
                <FaPaperPlane data-aos="zoom-in" className="me-2 mt-1" />
                Send Message
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
