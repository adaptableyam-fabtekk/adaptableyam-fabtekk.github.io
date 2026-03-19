import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a server
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+44 (0) 123 456 7890", "Emergency: 24/7"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@foodtecheng.com", "emergency@foodtecheng.com"],
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Industrial Estate", "Manchester, UK", "M1 2AB"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 8:00 AM - 6:00 PM", "Emergency: 24/7/365"],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1745449562896-71ba57d1e2b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGZhYnJpY2F0aW9uJTIwd29ya3Nob3B8ZW58MXx8fHwxNzczODY1MTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Metal fabrication workshop"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Get in touch with our team today
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <Icon className="h-8 w-8 text-[#FF6B35] mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-sm text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md mb-6">
                  Thank you for your message! We'll be in touch soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="condition-reports">Condition Reports</option>
                    <option value="refurbishments">Refurbishments</option>
                    <option value="installations">Installations/Decommissioning</option>
                    <option value="shift-cover">Shift Cover</option>
                    <option value="oven-cleaning">Oven Cleaning</option>
                    <option value="emergency">Emergency Call Out</option>
                    <option value="maintenance">Preventative Maintenance</option>
                    <option value="fabrication">Fabrication and Spares</option>
                    <option value="divider">Divider Servicing</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FF6B35] text-white px-6 py-3 rounded-md font-medium hover:bg-[#E55A2B] transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Additional Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Emergency Support
              </h2>
              <p className="text-gray-600 mb-6">
                For urgent engineering support, call our 24/7 emergency line immediately.
              </p>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
                <h3 className="font-bold text-red-900 mb-2">Emergency Line</h3>
                <a
                  href="tel:+441234567890"
                  className="text-2xl font-bold text-red-600 hover:text-red-700"
                >
                  +44 (0) 123 456 7890
                </a>
                <p className="text-sm text-red-800 mt-2">Available 24/7/365</p>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                What to Expect
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#FF6B35] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Quick Response</h4>
                    <p className="text-sm text-gray-600">
                      We'll respond to your inquiry within 2 hours during business hours
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#FF6B35] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Free Consultation</h4>
                    <p className="text-sm text-gray-600">
                      We'll discuss your requirements and provide expert advice
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#FF6B35] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Detailed Quote</h4>
                    <p className="text-sm text-gray-600">
                      Receive a comprehensive quote for the services you need
                    </p>
                  </div>
                </li>
              </ul>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Prefer to talk?</h3>
                <p className="text-gray-600 mb-4">
                  Give us a call during business hours and speak directly with our team.
                </p>
                <a
                  href="tel:+441234567890"
                  className="inline-block bg-[#FF6B35] text-white px-6 py-2 rounded-md font-medium hover:bg-[#E55A2B] transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Us</h2>
            <p className="text-gray-600">
              Find us at our main facility
            </p>
          </div>
          <div className="bg-gray-200 h-[400px] rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="h-16 w-16 mx-auto mb-4" />
              <p>123 Industrial Estate, Manchester, UK</p>
              <p className="text-sm mt-2">Map integration would go here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}