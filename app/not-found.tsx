
import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4 text-center">
            <h2 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-600">404</h2>
            <p className="text-gray-400 text-xl mb-12">
                The page you are looking for does not exist.
            </p>
            <Link
                href="/"
                className="inline-flex items-center px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors"
            >
                <Home className="mr-2 h-4 w-4" /> Return Home
            </Link>
        </div>
    );
}
