import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Blog() {
  const blogPosts = [
    {
      id: "choosing-right-pvc",
      title: "How to Choose the Right PVC Board for Your Project",
      excerpt: "Selecting the right PVC board is crucial for your construction project's success. Learn about different types, applications, and factors to consider when making your choice.",
      author: "Titan Team",
      date: "March 15, 2026",
      category: "Product Guide",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop",
    },
    {
      id: "polyform-benefits",
      title: "The Benefits of Using Polyform in Modern Construction",
      excerpt: "Discover why polyform has become increasingly popular among builders and contractors. Explore its unique properties and advantages for various construction applications.",
      author: "Titan Team",
      date: "March 10, 2026",
      category: "Industry Insights",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&h=600&fit=crop",
    },
    {
      id: "maintenance-tips",
      title: "Maintenance Tips for Construction Materials",
      excerpt: "Proper maintenance extends the life of your construction materials. Get expert tips on keeping your PVC boards, polyform, and other materials in top condition.",
      author: "Titan Team",
      date: "March 5, 2026",
      category: "Maintenance",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop",
    },
    {
      id: "sustainable-construction",
      title: "Sustainable Construction: Eco-Friendly Material Choices",
      excerpt: "Learn about environmentally friendly construction materials and how Titan's products contribute to sustainable building practices and green construction.",
      author: "Titan Team",
      date: "February 28, 2026",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
    },
    {
      id: "installation-guide",
      title: "Step-by-Step Installation Guide for PVC Boards",
      excerpt: "A comprehensive guide to installing PVC boards properly. Follow these professional tips to ensure a perfect installation every time.",
      author: "Titan Team",
      date: "February 20, 2026",
      category: "How-To Guide",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop",
    },
    {
      id: "material-comparison",
      title: "Comparing Construction Materials: PVC vs Traditional Options",
      excerpt: "An in-depth comparison of PVC boards with traditional construction materials. Understand the pros and cons to make informed decisions.",
      author: "Titan Team",
      date: "February 15, 2026",
      category: "Comparison",
      image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&h=600&fit=crop",
    },
  ];

  const categories = ["All", "Product Guide", "Industry Insights", "Maintenance", "Sustainability", "How-To Guide", "Comparison"];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Blog & Resources</h1>
            <p className="text-xl text-gray-600">
              Expert insights, tips, and guides for construction materials and building projects
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  category === "All"
                    ? "bg-[#FF0000] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover"
              />
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-[#FF0000] text-white rounded-full text-sm font-medium mb-4 w-fit">
                  Featured
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <User size={16} className="mr-2" />
                  <span className="mr-4">{blogPosts[0].author}</span>
                  <Calendar size={16} className="mr-2" />
                  <span>{blogPosts[0].date}</span>
                </div>
                <Link
                  href={`/blog/${blogPosts[0].id}`}
                  className="inline-flex items-center text-[#FF0000] hover:text-red-600 font-medium"
                >
                  Read Full Article
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
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
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar size={14} className="mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <span className="inline-flex items-center text-[#FF0000] hover:text-red-600 font-medium">
                    Read More
                    <ArrowRight size={16} className="ml-2" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get the latest articles, tips, and product updates delivered to your inbox
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FF0000] focus:outline-none"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-[#FF0000] text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
