import React from "react";
import { Mail, Github, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-white">Get in Touch</h2>
        <p className="text-white mt-4">
          Have questions or want to collaborate? Reach out to us through the
          details below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Contact Info Card */}
        <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/30 text-white text-left">
          <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <Mail className="w-6 h-6" />
              <a
                href="mailto:minorhunters@gmail.com"
                className="hover:underline"
              >
                minorhunters@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-6 h-6" />
              <span>+63 912 345 6789</span>
            </li>
            <li className="flex items-center gap-3">
              <Github className="w-6 h-6" />
              <a
                href="https://github.com/minorhunters"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/minorhunters
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-6 h-6" />
              <span>Cebu Technological University, Cebu City</span>
            </li>
          </ul>
        </div>

        {/* Message Card */}
        <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/30 text-white">
          <h3 className="text-2xl font-semibold mb-4">Send us a message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg font-semibold text-white transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
