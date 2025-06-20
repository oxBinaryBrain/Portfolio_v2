
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { submitContactForm, ContactFormData } from "@/services/contactService";
import ParticlesBackground from "./ParticlesBackground";

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
    <section id="contact" className="py-24 relative overflow-hidden">
      <ParticlesBackground opacity={0.3} particleCount={80} />
      <div className="section-container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariant}
          custom={1}
          className="mb-16 text-center"
        >
          <h2 className="section-subtitle">Get In Touch</h2>
          <h3 className="section-title">Contact Me</h3>
          <p className="section-description mx-auto">
            Let's connect and discuss potential collaborations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariant}
            custom={2}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass rounded-xl p-6 hover:bg-secondary/20 transition-all duration-300 hover:scale-105 cursor-pointer card-hover-effect">
              <div className="mb-4 w-12 h-12 rounded-lg bg-purple/20 flex items-center justify-center">
                <Mail size={20} className="text-purple" />
              </div>
              <h4 className="text-lg font-semibold mb-1">Email</h4>
              <a href="mailto:ud4yg@yandex.com" className="text-muted-foreground hover:text-purple transition-colors">
                ud4yg@yandex.com
              </a>
            </div>

            <div className="glass rounded-xl p-6 hover:bg-secondary/20 transition-all duration-300 hover:scale-105 cursor-pointer card-hover-effect">
              <div className="mb-4 w-12 h-12 rounded-lg bg-purple/20 flex items-center justify-center">
                <MapPin size={20} className="text-purple" />
              </div>
              <h4 className="text-lg font-semibold mb-1">Location</h4>
              <p className="text-muted-foreground">
                Bengaluru, Karnataka, India
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariant}
            custom={3}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass rounded-xl p-8 shadow-lg card-hover-effect">
              {formError && (
                <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 flex items-start">
                  <AlertCircle size={20} className="mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Error submitting form</p>
                    <p className="text-sm">{formError}</p>
                  </div>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                    className="w-full rounded-lg bg-secondary/30 border-0 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-purple/50 focus:outline-none transition-colors disabled:opacity-70"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting || submitted}
                    className="w-full rounded-lg bg-secondary/30 border-0 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-purple/50 focus:outline-none transition-colors disabled:opacity-70"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
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
                  className="w-full rounded-lg bg-secondary/30 border-0 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-purple/50 focus:outline-none transition-colors disabled:opacity-70"
                  placeholder="How can I help you?"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting || submitted}
                  rows={5}
                  className="w-full rounded-lg bg-secondary/30 border-0 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-purple/50 focus:outline-none transition-colors resize-none disabled:opacity-70"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className={`w-full rounded-lg px-6 py-3 font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                  submitted
                    ? "bg-green-600/20 text-green-400"
                    : isSubmitting
                    ? "bg-purple/10 text-purple/50"
                    : "bg-purple/20 hover:bg-purple/30 text-purple-light hover:scale-105"
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
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
