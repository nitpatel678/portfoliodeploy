import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle"); // "idle" | "success" | "error"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mgvzbjzv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="contact" className="section-padding min-h-screen flex items-center">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full"
      >
        {/* Heading */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 id="subheading" className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Get In Touch
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out. I'm always open
            to new ideas and collaborations.
          </p>
        </motion.div>

        {/* Contact Info + Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 id="subheading" className="text-xl font-bold font-poppins">
              Contact Information
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-full">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-white/60 font-poppins">Email</p>
                  <p>nitpatel678@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 id="subheading" className="text-xl font-bold mb-4 font-poppins">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/nitpatel678"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <Github size={20} />
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/nitinpatelftp"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <Linkedin size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 font-poppins">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 font-poppins">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 transition-colors"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 font-poppins">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 transition-colors resize-none"
                  placeholder="Your message"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-colors disabled:opacity-70 font-poppins"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>

              {submitStatus === "success" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-400 text-center font-poppins"
                >
                  Message sent successfully!
                </motion.p>
              )}

              {submitStatus === "error" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-center font-poppins"
                >
                  Something went wrong. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div variants={itemVariants} className="mt-20 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Nitin Patel. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
