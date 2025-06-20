import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle, Loader2, AlertCircle, MessageSquare, Clock, Github, Linkedin, Twitter } from "lucide-react";
import { toast } from "sonner";
import { submitContactForm, ContactFormData } from "@/services/contactService";

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear any errors when the user starts typing again
    if (formError) setFormError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);
    
    try {
      console.log("Starting form submission process...");
      const result = await submitContactForm(formData);
      console.log("Form submission result:", result);
      
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      toast.success("Message sent successfully! We'll get back to you soon.");
      
      // Reset submitted state after delay
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Contact form submission error:", error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      setFormError(errorMessage);
      toast.error(`Failed to send message: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden min-h-screen flex items-center">
      <div className="section-container w-full">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariant}
          custom={1}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <MessageSquare size={20} className="text-purple mr-2" />
            <span className="section-subtitle">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-light via-purple to-purple-dark bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got a project in mind? Drop me a message and let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left Side - Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariant}
            custom={2}
            className="space-y-8"
          >
            {/* Contact Info Card */}
            <div className="glass rounded-2xl p-8 space-y-6">
              <div className="flex items-center mb-6">
                <MessageSquare size={24} className="text-purple mr-3" />
                <h3 className="text-xl font-bold">Contact Information</h3>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-purple/20 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-purple" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a 
                    href="mailto:ud4yg@yandex.com" 
                    className="text-muted-foreground hover:text-purple transition-colors"
                  >
                    ud4yg@yandex.com
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-purple/20 flex items-center justify-center flex-shrink-0">
                  <MessageSquare size={20} className="text-purple" />
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Social Media</h4>
                  <div className="flex space-x-3">
                    <a
                      href="https://github.com/oxBinaryBrain/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-purple/20 transition-colors"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/uday-g-601ba9266/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-purple/20 transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href="https://x.com/UdayG6389896490"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-purple/20 transition-colors"
                    >
                      <Twitter size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time Card */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-purple/20 flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-purple" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Response Time</h4>
                  <p className="text-sm text-muted-foreground">
                    I typically reply within 24 hours during business days.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariant}
            custom={3}
            className="glass rounded-2xl p-8"
          >
            {formError && (
              <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 flex items-start">
                <AlertCircle size={20} className="mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Error submitting form</p>
                  <p className="text-sm">{formError}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting || submitted}
                    className="w-full rounded-xl bg-secondary/30 border-0 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-purple/50 focus:outline-none transition-colors disabled:opacity-70"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting || submitted}
                    className="w-full rounded-xl bg-secondary/30 border-0 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-purple/50 focus:outline-none transition-colors disabled:opacity-70"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>
              
              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={isSubmitting || submitted}
                  className="w-full rounded-xl bg-secondary/30 border-0 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-purple/50 focus:outline-none transition-colors disabled:opacity-70"
                  placeholder="Project inquiry / Job opportunity / Collaboration..."
                  required
                />
              </div>
              
              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting || submitted}
                  rows={6}
                  className="w-full rounded-xl bg-secondary/30 border-0 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-purple/50 focus:outline-none transition-colors resize-none disabled:opacity-70"
                  placeholder="Tell me more about your project, your timeline, and what you're looking to achieve..."
                  required
                ></textarea>
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className={`w-full rounded-xl px-6 py-4 font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                  submitted
                    ? "bg-green-600/20 text-green-400"
                    : isSubmitting
                    ? "bg-purple/10 text-purple/50"
                    : "bg-gradient-to-r from-purple-dark to-purple hover:from-purple to-purple-light text-white hover:scale-105 shadow-lg hover:shadow-purple/25"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : submitted ? (
                  <>
                    <CheckCircle size={20} />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Privacy Note */}
              <p className="text-xs text-muted-foreground text-center">
                I value your privacy. Your information will never be shared with third parties.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;