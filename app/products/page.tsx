import { ArrowRight, MessageCircle, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function Products() {
  const whatsappNumber = "6281234567890";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const products = [
    {
      id: "pvc-board",
      name: "PVC Board",
      category: "Construction Material",
      description: "High-quality PVC boards suitable for interior and exterior applications. Waterproof, durable, and easy to install.",
      features: ["Waterproof", "Durable", "Easy to Install", "Low Maintenance"],
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
    },
    {
      id: "polyform",
      name: "Polyform",
      category: "Industrial Material",
      description: "Premium polyform sheets for industrial and construction applications. Excellent strength-to-weight ratio.",
      features: ["Lightweight", "High Strength", "Versatile", "Cost-Effective"],
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop",
    },
    {
      id: "impraboard",
      name: "Impraboard",
      category: "Building Material",
      description: "Professional-grade impraboard for commercial and residential projects. Superior quality and finish.",
      features: ["Premium Quality", "Smooth Finish", "Weather Resistant", "Long Lasting"],
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop",
    },
    {
      id: "acrylic-sheets",
      name: "Acrylic Sheets",
      category: "Specialty Material",
      description: "Clear and colored acrylic sheets for various applications. UV resistant and highly transparent.",
      features: ["UV Resistant", "Crystal Clear", "Impact Resistant", "Multiple Colors"],
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop",
    },
    {
      id: "composite-panels",
      name: "Composite Panels",
      category: "Facade Material",
      description: "Aluminum composite panels for modern building facades. Lightweight with excellent durability.",
      features: ["Lightweight", "Fire Resistant", "Modern Design", "Durable"],
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&h=600&fit=crop",
    },
    {
      id: "foam-boards",
      name: "Foam Boards",
      category: "Insulation Material",
      description: "High-density foam boards for insulation and construction applications. Energy efficient.",
      features: ["Energy Efficient", "Thermal Insulation", "Lightweight", "Easy to Cut"],
      image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&h=600&fit=crop",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Products</h1>
            <p className="text-xl text-gray-600 mb-8">
              Premium quality construction materials for all your building needs
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-[#FF0000] text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              <MessageCircle size={18} className="mr-2" />
              Order via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-[#FF0000] font-medium mb-2">
                    {product.category}
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <CheckCircle size={16} className="text-[#FF0000] mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <Link
                      href={`/products/${product.id}/details`}
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 border-2 border-gray-300 text-gray-900 rounded-lg hover:border-[#FF0000] hover:text-[#FF0000] transition-colors"
                    >
                      Learn More
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-[#FF0000] text-white rounded-lg hover:bg-red-600 transition-colors"
                    >
                      <MessageCircle size={16} className="mr-2" />
                      Order
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Need Help Choosing the Right Product?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team is ready to assist you in selecting the perfect materials for your project
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-[#FF0000] text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            <MessageCircle size={20} className="mr-2" />
            Chat with Our Team
          </a>
        </div>
      </section>
    </div>
  );
}
