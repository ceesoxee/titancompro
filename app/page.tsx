"use client"
import { ArrowRight, Award, Clock, MessageCircle, Shield } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const whatsappNumber = "6281234567890";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  const products = [
    {
      id: "pvc-board",
      name: "PVC Board",
      description: "High-quality PVC boards for various construction needs",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
    },
    {
      id: "polyform",
      name: "Polyform",
      description: "Durable polyform sheets for industrial applications",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop",
    },
    {
      id: "impraboard",
      name: "Impraboard",
      description: "Premium impraboard for professional construction projects",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Quality Assured",
      description: "All products meet international quality standards",
    },
    {
      icon: Award,
      title: "Trusted Supplier",
      description: "Years of experience serving the construction industry",
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Quick and reliable delivery to your location",
    },
  ];

  const blogPosts = [
    {
      id: "choosing-right-pvc",
      title: "How to Choose the Right PVC Board for Your Project",
      excerpt: "Learn about different types of PVC boards and their applications in construction...",
      date: "March 15, 2026",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop",
    },
    {
      id: "polyform-benefits",
      title: "The Benefits of Using Polyform in Modern Construction",
      excerpt: "Discover why polyform has become a popular choice among builders and contractors...",
      date: "March 10, 2026",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&h=600&fit=crop",
    },
    {
      id: "maintenance-tips",
      title: "Maintenance Tips for Construction Materials",
      excerpt: "Essential tips to ensure your construction materials last longer and perform better...",
      date: "March 5, 2026",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Strong Materials for Stronger Builds
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Titan provides premium construction materials including PVC
                Board, Polyform, and Impraboard for your building needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center px-8 py-3 bg-[#FF0000] text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  View Products
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 bg-white text-gray-900 border-2 border-gray-300 rounded-lg hover:border-[#FF0000] hover:text-[#FF0000] transition-colors"
                >
                  <MessageCircle size={18} className="mr-2" />
                  Contact Us
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=800&fit=crop"
                alt="Construction materials"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Key Products
            </h2>
            <p className="text-xl text-gray-600">
              Premium quality materials for professional construction
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Link
                    href={`/products/${product.id}`}
                    className="inline-flex items-center text-[#FF0000] hover:text-red-600 font-medium"
                  >
                    Learn More
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/products"
              className="inline-flex items-center px-8 py-3 bg-[#FF0000] text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=800&fit=crop"
                alt="About Titan"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About Titan
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Titan is a leading supplier of construction materials in
                Indonesia, specializing in high-quality PVC boards, polyform,
                and impraboard products.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                With years of experience in the material industry, we are
                committed to providing the strongest and most reliable materials
                for your construction projects.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-[#FF0000] hover:text-red-600 font-medium text-lg"
              >
                Learn More About Us
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Titan?
            </h2>
            <p className="text-xl text-gray-600">
              Your trusted partner for quality construction materials
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                  <feature.icon size={32} className="text-[#FF0000]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600">
              Tips and insights about construction materials
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center text-[#FF0000] hover:text-red-600 font-medium">
                    Read More
                    <ArrowRight size={16} className="ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center px-8 py-3 bg-[#FF0000] text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#FF0000]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white mb-8">
            Contact us today to discuss your construction material needs
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-white text-[#FF0000] rounded-lg hover:bg-gray-100 transition-colors text-lg font-medium"
          >
            <MessageCircle size={20} className="mr-2" />
            Order via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
