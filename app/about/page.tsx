import { Target, Eye, Award, Users, MessageCircle } from "lucide-react";

export default function Page() {
  const whatsappNumber = "6281234567890";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const values = [
    {
      icon: Award,
      title: "Strength",
      description: "We provide the strongest and most durable materials for your construction needs.",
    },
    {
      icon: Users,
      title: "Trust",
      description: "Building long-term relationships with our customers through reliability and transparency.",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Continuously improving our products and services to meet industry demands.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About Titan</h1>
            <p className="text-xl text-gray-600">
              Your trusted partner in the material industry, providing premium construction materials since our establishment.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                Titan was founded with a clear mission: to provide the construction industry with materials that truly embody strength, durability, and reliability.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Over the years, we have established ourselves as a leading supplier of PVC boards, polyform, impraboard, and other essential construction materials in Indonesia.
              </p>
              <p className="text-lg text-gray-600">
                Our commitment to quality and customer satisfaction has made us the preferred choice for builders, contractors, and developers across the region.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=800&fit=crop"
                alt="Titan company"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                <Eye size={32} className="text-[#FF0000]" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600">
                To become the most trusted and preferred supplier of construction materials in Indonesia, recognized for our unwavering commitment to quality, innovation, and customer satisfaction.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                <Target size={32} className="text-[#FF0000]" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600">
                To deliver premium quality construction materials that meet international standards, while providing exceptional service and building lasting relationships with our customers and partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                  <value.icon size={32} className="text-[#FF0000]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to serving you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
                alt="Team member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-1">Leadership Team</h3>
              <p className="text-gray-600 mb-2">Experienced Industry Leaders</p>
              <p className="text-gray-600">
                Guiding Titan with decades of combined experience in the material industry.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
                alt="Team member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-1">Sales Team</h3>
              <p className="text-gray-600 mb-2">Customer Success Specialists</p>
              <p className="text-gray-600">
                Dedicated to understanding your needs and providing the perfect solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop"
                alt="Team member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-1">Operations Team</h3>
              <p className="text-gray-600 mb-2">Quality & Logistics Experts</p>
              <p className="text-gray-600">
                Ensuring timely delivery of premium quality materials every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#FF0000]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Want to Work With Us?
          </h2>
          <p className="text-xl text-white mb-8">
            Get in touch to learn more about our products and services
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-white text-[#FF0000] rounded-lg hover:bg-gray-100 transition-colors text-lg font-medium"
          >
            <MessageCircle size={20} className="mr-2" />
            Contact Us on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
