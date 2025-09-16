import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = ({ darkMode, themeClasses }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [buttonText, setButtonText] = useState("🚀 Send Message");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("⏳ Sending...");

    emailjs
      .send(
        "service_3hinhyo",
        "template_aon5e5b",
        formData,
        "RWFvDNXoyeZOXzucZ" 
      )
      .then(() => {
        setButtonText("✅ Message Sent!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setButtonText("🚀 Send Message"), 3000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setButtonText("❌ Failed. Try Again!");
        setTimeout(() => setButtonText("🚀 Send Message"), 3000);
      });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className={`text-4xl font-bold mb-2 ${themeClasses.accent}`}>
            Get In Touch
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p
              className={`text-lg ${themeClasses.textSecondary} max-w-2xl mx-auto`}
            >
              I'm always excited to discuss new opportunities, collaborate on
              interesting projects, or just have a chat about technology. Feel
              free to reach out!
            </p>
          </div>

          {/* Contact Form */}
          <div
            className={`${themeClasses.card} ${themeClasses.border} border rounded-2xl p-8 ${themeClasses.glow} shadow-xl`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    className={`block text-sm font-medium ${themeClasses.text} mb-2`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 ${
                      darkMode
                        ? "focus:ring-cyan-500 focus:border-cyan-500"
                        : "focus:ring-blue-500 focus:border-blue-500"
                    } transition-colors duration-200 ${themeClasses.text}`}
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    className={`block text-sm font-medium ${themeClasses.text} mb-2`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 ${
                      darkMode
                        ? "focus:ring-cyan-500 focus:border-cyan-500"
                        : "focus:ring-blue-500 focus:border-blue-500"
                    } transition-colors duration-200 ${themeClasses.text}`}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label
                  className={`block text-sm font-medium ${themeClasses.text} mb-2`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 ${
                    darkMode
                      ? "focus:ring-cyan-500 focus:border-cyan-500"
                      : "focus:ring-blue-500 focus:border-blue-500"
                  } transition-colors duration-200 ${themeClasses.text}`}
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label
                  className={`block text-sm font-medium ${themeClasses.text} mb-2`}
                >
                  Message
                </label>
                <textarea
                  rows="6"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 ${
                    darkMode
                      ? "focus:ring-cyan-500 focus:border-cyan-500"
                      : "focus:ring-blue-500 focus:border-blue-500"
                  } transition-colors duration-200 ${themeClasses.text}`}
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className={`w-1/2 py-3 ${themeClasses.accentBg} text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-200 ${
                    darkMode
                      ? "shadow-lg shadow-cyan-500/25"
                      : "shadow-lg shadow-blue-500/25"
                  }`}
                >
                  {buttonText}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
