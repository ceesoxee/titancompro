import { MessageCircle, Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const whatsappNumber = "6281234567890";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ASubject: ${formData.subject}%0A%0AMessage:%0A${formData.message}`;
    window.open(`${whatsappUrl}?text=${message}`, "_blank");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600">
              Get in touch with our team. We{"'"}re here to help with your construction material needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions about our products or need assistance? We{""}re here to help. Reach out to us through any of the following channels.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Phone size={24} className="text-[#FF0000]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+62 812 3456 7890</p>
                    <p className="text-sm text-gray-500">Mon-Fri 8:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Mail size={24} className="text-[#FF0000]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@titan.com</p>
                    <p className="text-sm text-gray-500">We{""}ll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <MapPin size={24} className="text-[#FF0000]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">Jakarta, Indonesia</p>
                    <p className="text-sm text-gray-500">Visit our showroom</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#FF0000] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">
                  Prefer WhatsApp?
                </h3>
                <p className="text-white mb-4">
                  Get instant responses to your questions through WhatsApp
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-white text-[#FF0000] rounded-lg hover:bg-gray-100 transition-colors font-medium"
                >
                  <MessageCircle size={20} className="mr-2" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FF0000] focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FF0000] focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FF0000] focus:outline-none transition-colors"
                      placeholder="+62 812 3456 7890"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FF0000] focus:outline-none transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="price-quote">Price Quote</option>
                      <option value="order-status">Order Status</option>
                      <option value="general-question">General Question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FF0000] focus:outline-none transition-colors resize-none"
                      placeholder="Tell us more about your requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-8 py-4 bg-[#FF0000] text-white rounded-lg hover:bg-red-600 transition-colors text-lg"
                  >
                    <Send size={20} className="mr-2" />
                    Send Message via WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Location</h2>
          <div className="bg-gray-300 rounded-lg overflow-hidden shadow-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-gray-500 mx-auto mb-4" />
              <p className="text-gray-600">Jakarta, Indonesia</p>
              <p className="text-sm text-gray-500">Map integration available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
