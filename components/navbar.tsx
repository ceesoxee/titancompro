import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/products", label: "Products" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-[#FF0000]">TITAN</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`transition-colors ${
                  isActive(link.path)
                    ? "text-[#FF0000]"
                    : "text-gray-700 hover:text-[#FF0000]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 transition-colors ${
                  isActive(link.path)
                    ? "text-[#FF0000]"
                    : "text-gray-700 hover:text-[#FF0000]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
