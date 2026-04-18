"use client"
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function BlogDetail() {

  const blogData = {
      title: "How to Choose the Right PVC Board for Your Project",
      author: "Titan Team",
      date: "March 15, 2026",
      category: "Product Guide",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=1200&h=600&fit=crop",
      content: `
        <p>Choosing the right PVC board for your construction project is a critical decision that can significantly impact the outcome, durability, and cost-effectiveness of your work. With various types of PVC boards available in the market, understanding their characteristics and applications is essential.</p>

        <h2>Understanding PVC Board Types</h2>
        <p>PVC boards come in different densities, thicknesses, and finishes. The most common types include:</p>
        <ul>
          <li><strong>Solid PVC Boards:</strong> Dense and durable, ideal for structural applications</li>
          <li><strong>Foam PVC Boards:</strong> Lightweight with excellent insulation properties</li>
          <li><strong>Expanded PVC Boards:</strong> Cost-effective option for non-structural uses</li>
        </ul>

        <h2>Key Factors to Consider</h2>
        <p>When selecting a PVC board, consider these important factors:</p>

        <h3>1. Application and Location</h3>
        <p>Determine whether the board will be used indoors or outdoors, and whether it needs to bear structural loads. Outdoor applications require UV-stabilized boards with enhanced weather resistance.</p>

        <h3>2. Thickness Requirements</h3>
        <p>Board thickness should match your structural needs. Common thicknesses range from 3mm for decorative applications to 20mm for load-bearing structures.</p>

        <h3>3. Finish and Appearance</h3>
        <p>Choose between matte and glossy finishes based on your aesthetic requirements. Consider whether the board will be painted or used as-is.</p>

        <h3>4. Water and Chemical Resistance</h3>
        <p>For areas exposed to moisture or chemicals, select boards with enhanced resistance properties.</p>

        <h2>Common Applications</h2>
        <p>PVC boards are versatile and can be used for:</p>
        <ul>
          <li>Wall cladding and interior partitions</li>
          <li>Ceiling panels and soffits</li>
          <li>Signage and display boards</li>
          <li>Furniture and cabinetry</li>
          <li>Bathroom and kitchen applications</li>
        </ul>

        <h2>Installation Tips</h2>
        <p>Proper installation ensures optimal performance:</p>
        <ul>
          <li>Always acclimate boards to room temperature before installation</li>
          <li>Use appropriate adhesives and fasteners recommended by the manufacturer</li>
          <li>Allow for expansion and contraction in outdoor applications</li>
          <li>Follow proper cutting and joining techniques</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Selecting the right PVC board requires careful consideration of your project's specific requirements. At Titan, we offer expert guidance to help you choose the perfect product for your needs. Contact our team to discuss your project and get personalized recommendations.</p>
      `,
    }

  const relatedPosts = [
    {
      id: "polyform-benefits",
      title: "The Benefits of Using Polyform in Modern Construction",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=400&h=300&fit=crop",
    },
    {
      id: "maintenance-tips",
      title: "Maintenance Tips for Construction Materials",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
    },
    {
      id: "installation-guide",
      title: "Step-by-Step Installation Guide for PVC Boards",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop",
    },
  ];

  return (
    <div>
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#FF0000]">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#FF0000]">Blog</Link>
            <span>/</span>
            <span className="text-gray-900">{blogData.title}</span>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-[#FF0000] hover:text-red-600 mb-6"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Blog
          </Link>

          <span className="inline-block px-3 py-1 bg-[#FF0000] text-white rounded-full text-sm font-medium mb-4">
            {blogData.category}
          </span>

          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            {blogData.title}
          </h1>

          <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center text-gray-600">
              <User size={18} className="mr-2" />
              <span className="mr-6">{blogData.author}</span>
              <Calendar size={18} className="mr-2" />
              <span>{blogData.date}</span>
            </div>
            <button className="flex items-center text-gray-600 hover:text-[#FF0000] transition-colors">
              <Share2 size={18} className="mr-2" />
              Share
            </button>
          </div>

          <img
            src={blogData.image}
            alt={blogData.title}
            className="w-full rounded-lg shadow-lg mb-8"
          />

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blogData.content }}
            style={{
              color: '#4B5563',
              lineHeight: '1.8',
            }}
          />

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Need More Information?</h3>
            <p className="text-gray-600 mb-4">
              Contact our team for expert advice on choosing the right materials for your project.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-[#FF0000] text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
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
                  <h3 className="text-lg font-bold text-gray-900 hover:text-[#FF0000]">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
