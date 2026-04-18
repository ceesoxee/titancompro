import { Home, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-[#FF0000] mb-4">404</h1>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8">
          Sorry, the page you{"'"}re looking for doesn{"'"}t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center px-8 py-3 bg-[#FF0000] text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            <Home size={18} className="mr-2" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-8 py-3 bg-white text-gray-900 border-2 border-gray-300 rounded-lg hover:border-[#FF0000] hover:text-[#FF0000] transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
