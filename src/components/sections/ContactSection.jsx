import React, { useState } from "react";
import { useInView } from "../../hooks/useInView";
import { Send, Check, User, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.1 });

  const mobileTextAnimation = "opacity-100 translate-x-0";
  const mobileFormAnimation = "opacity-100 translate-x-0";
  const desktopTextAnimation = inView
    ? "opacity-100 translate-x-0"
    : "opacity-0 -translate-x-10";
  const desktopFormAnimation = inView
    ? "opacity-100 translate-x-0 scale-100"
    : "opacity-0 translate-x-10 scale-95";

  const textAnimation =
    typeof window !== "undefined" && window.innerWidth < 768
      ? mobileTextAnimation
      : desktopTextAnimation;

  const formAnimation =
    typeof window !== "undefined" && window.innerWidth < 768
      ? mobileFormAnimation
      : desktopFormAnimation;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.email) {
      alert("Please enter your email address");
      return;
    }

    const emailBody = `
New Contact Form Submission:

First Name: ${formData.firstName || "Not provided"}
Last Name: ${formData.lastName || "Not provided"}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}

---
Please tell us about your project or inquiry below. 
We're excited to hear from you and discuss how we can help!

[Write your message here]

Best regards,
${formData.firstName || "Website Visitor"}
    `.trim();
    const emailSubject = `New Contact: ${formData.firstName || "Website Visitor"}`;
    const outlookMailto = `mailto:ELHODA@ELHODATRADE.COM?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    // Open Outlook with the email composed
    window.open(outlookMailto, "_blank");
    // Reset form and show success state
    setFormData({ firstName: "", lastName: "", email: "", phone: "" });
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };
  return (
    <section
      id="contact us"
      ref={ref}
      className="py-16 sm:py-20 md:py-24 lg:py-28 relative z-10 bg-gradient-to-b from-gray-900 to-black overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>

      {/* Glow effects */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-red-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-red-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Section - Enhanced */}
          <div
            className={`transition-all duration-1000 ease-out ${textAnimation} space-y-6`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 rounded-full border border-red-500/20">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <p className="text-red-400 font-semibold uppercase text-sm tracking-wider">
                CONTACT US
              </p>
            </div>

            <h2 className="text-4xl xs:text-5xl sm:text-6xl font-bold text-white mb-4">
              Your <span className="text-red-500">connection </span> starts
              here.
            </h2>

            <p className="text-xl sm:text-2xl font-bold text-gray-300">
              Let's make it happen together.
              <span className="text-red-500 ml-2">GET IN TOUCH!</span>
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                  <Mail size={16} className="text-red-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Email us at
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Enhanced Form */}
          <div
            className={`bg-gray-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-gray-800 shadow-2xl transition-all duration-1000 ease-out delay-200 transform-gpu ${formAnimation} relative overflow-hidden`}
          >
            {/* Form gradient border */}
            <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-br from-gray-800 via-red-500/20 to-gray-800 -z-10"></div>

            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                  <Send size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Send us a message
                  </h3>
                  <p className="text-sm text-gray-400">
                    We'll get back to you shortly
                  </p>
                </div>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                {/* Name Fields Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-red-400 transition-colors">
                      <User size={18} />
                    </div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 shadow-sm text-base text-white placeholder-gray-500"
                    />
                  </div>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-red-400 transition-colors">
                      <User size={18} />
                    </div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 shadow-sm text-base text-white placeholder-gray-500"
                    />
                  </div>
                </div>

                {/* Contact Fields Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-red-400 transition-colors">
                      <Mail size={18} />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 shadow-sm text-base text-white placeholder-gray-500"
                    />
                  </div>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-red-400 transition-colors">
                      <Phone size={18} />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 shadow-sm text-base text-white placeholder-gray-500"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 text-base relative overflow-hidden group ${
                    isSubmitted || !formData.email
                      ? "bg-gray-700 cursor-not-allowed"
                      : "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 hover:shadow-red-500/25 active:scale-[0.99]"
                  }`}
                  disabled={isSubmitted || !formData.email}
                >
                  {/* Button glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/50 to-red-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                  {isSubmitted ? (
                    <>
                      <Check size={20} className="text-white animate-pulse" />
                      <span className="text-white">Opening Outlook...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} className="text-white" />
                      <span className="text-white">Get in Touch</span>
                    </>
                  )}
                </button>

                <div className="pt-4 border-t border-gray-800">
                  <p className="text-xs text-gray-400 text-center">
                    * Email is required. Clicking "Get in Touch" will open
                    Outlook with a pre-filled email.
                    <br />
                    <span className="text-gray-500 mt-1 block">
                      Your information is secure and will only be used to
                      contact you.
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
