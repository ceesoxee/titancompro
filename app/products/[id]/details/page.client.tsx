"use client"
import { MessageCircle, CheckCircle, ArrowLeft, Package, Ruler, Shield } from "lucide-react";
import Link from "next/link";

export default function PageClient({productId}:{productId : string}) {
  const whatsappNumber = "6281234567890";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi, I'm interested in ${productId}`;

  const productData: { [key: string]: any } = {
    "pvc-board": {
      name: "PVC Board",
      category: "Construction Material",
      description: "Our premium PVC boards are engineered for superior performance in both interior and exterior applications. Made from high-quality polyvinyl chloride, these boards offer exceptional durability, water resistance, and ease of installation.",
      mainImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=800&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop",
      ],
      specifications: [
        { label: "Thickness", value: "3mm - 20mm" },
        { label: "Size", value: "4ft x 8ft, Custom sizes available" },
        { label: "Color", value: "White, Black, Custom colors" },
        { label: "Finish", value: "Matte, Glossy" },
        { label: "Water Resistance", value: "100% Waterproof" },
        { label: "Fire Rating", value: "Class B" },
      ],
      benefits: [
        "100% waterproof and moisture resistant",
        "Easy to clean and maintain",
        "Resistant to termites and fungi",
        "Lightweight yet durable",
        "Easy to cut and install",
        "Cost-effective alternative to wood",
        "Long-lasting with minimal maintenance",
        "Eco-friendly and recyclable",
      ],
    },
    "polyform": {
      name: "Polyform",
      category: "Industrial Material",
      description: "High-performance polyform sheets designed for industrial and construction applications. Our polyform offers an exceptional strength-to-weight ratio, making it ideal for various structural and non-structural uses.",
      mainImage: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=800&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop",
      ],
      specifications: [
        { label: "Thickness", value: "2mm - 25mm" },
        { label: "Size", value: "Standard and custom sizes" },
        { label: "Density", value: "Low to High density options" },
        { label: "Color", value: "Various colors available" },
        { label: "Temperature Range", value: "-40°C to 80°C" },
        { label: "Impact Resistance", value: "High" },
      ],
      benefits: [
        "Excellent strength-to-weight ratio",
        "Versatile for multiple applications",
        "Chemical resistant",
        "UV stabilized for outdoor use",
        "Easy to fabricate and form",
        "Cost-effective solution",
        "Durable and long-lasting",
        "Low maintenance required",
      ],
    },
    "impraboard": {
      name: "Impraboard",
      category: "Building Material",
      description: "Professional-grade impraboard designed for both commercial and residential construction projects. Our impraboard delivers superior quality, smooth finish, and exceptional performance.",
      mainImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&h=800&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&h=600&fit=crop",
      ],
      specifications: [
        { label: "Thickness", value: "5mm - 18mm" },
        { label: "Size", value: "4ft x 8ft, 4ft x 10ft" },
        { label: "Finish", value: "Smooth, Textured" },
        { label: "Color", value: "White, Off-white, Custom" },
        { label: "Edge Type", value: "Square, Beveled" },
        { label: "Moisture Resistance", value: "Enhanced" },
      ],
      benefits: [
        "Premium quality and smooth finish",
        "Weather resistant for outdoor use",
        "Excellent paint adhesion",
        "Dimensionally stable",
        "Easy to install and work with",
        "Long-lasting durability",
        "Suitable for ceilings and walls",
        "Professional appearance",
      ],
    },
  };

  const product = productData[productId || ""] || productData["pvc-board"];

  return (
    <div>
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#FF0000]">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-[#FF0000]">Products</Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Hero */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/products"
            className="inline-flex items-center text-[#FF0000] hover:text-red-600 mb-6"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div>
              <img
                src={product.mainImage}
                alt={product.name}
                className="w-full rounded-lg shadow-lg mb-4"
              />
              <div className="grid grid-cols-3 gap-4">
                {product.gallery.map((image: string, index: number) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-75 transition-opacity"
                  />
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <p className="text-sm text-[#FF0000] font-medium mb-2">
                {product.category}
              </p>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                {product.description}
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Quick Overview</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <Package className="w-8 h-8 text-[#FF0000] mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Multiple Sizes</p>
                  </div>
                  <div>
                    <Ruler className="w-8 h-8 text-[#FF0000] mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Custom Options</p>
                  </div>
                  <div>
                    <Shield className="w-8 h-8 text-[#FF0000] mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Quality Assured</p>
                  </div>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-[#FF0000] text-white rounded-lg hover:bg-red-600 transition-colors text-lg mb-4"
              >
                <MessageCircle size={20} className="mr-2" />
                Order via WhatsApp
              </a>

              <p className="text-sm text-gray-600 text-center">
                Contact us for pricing and availability
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Specifications</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <table className="w-full">
              <tbody>
                {product.specifications.map((spec: any, index: number) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {spec.label}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.benefits.map((benefit: string, index: number) => (
              <div key={index} className="flex items-start">
                <CheckCircle size={20} className="text-[#FF0000] mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#FF0000]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Order {product.name}?
          </h2>
          <p className="text-xl text-white mb-8">
            Contact us now to get a quote and discuss your requirements
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
