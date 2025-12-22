
import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <h2 className="text-4xl font-bold mb-4">404 - Page Not Found</h2>
            <p className="text-[hsl(var(--muted-foreground))] mb-8">
                The page you are looking for does not exist.
            </p>
            <Link
                href="/"
                className="inline-flex items-center px-6 py-3 rounded-md bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-blue-600 transition-colors"
            >
                <Home className="mr-2 h-4 w-4" /> Go Home
            </Link>
        </div>
    );
}
