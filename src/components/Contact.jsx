import { useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error when typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      setError("All fields are required.");
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "" }); // Reset form
  };

  return (
    <div className="flex flex-col items-center justify-center  bg-gray-700 text-white ">
      <h2 className="text-2xl text-center mt-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 mb-5">
        Contact
      </h2>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 mb-5 p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-xl font-bold text-center mb-4">Log in</h2>

        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mb-4 text-red-400 text-center"
          >
            {error}
          </motion.p>
        )}

        <motion.div
          className="mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <label htmlFor="name" className="block mb-1 text-gray-300">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            aria-label="Enter your name"
            className="w-full p-2 border rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </motion.div>

        <motion.div
          className="mb-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <label htmlFor="email" className="block mb-1 text-gray-300">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            aria-label="Enter your email"
            className="w-full p-2 border rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </motion.div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={submitted}
          className={`w-full p-2 mt-4 font-bold rounded-lg transition ${
            submitted
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {submitted ? "Submitting..." : "Submit"}
        </motion.button>

        {submitted && (
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-4 text-green-400 text-center"
            aria-live="polite"
          >
            Form submitted successfully!
          </motion.p>
        )}
      </motion.form>
    </div>
  );
}
