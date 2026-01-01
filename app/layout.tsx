import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PageViewCounter from "@/components/PageViewCounter";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
    title: "Yash Kakade",
    description: "Caltech undergraduate specializing in robotics, perception, and control.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth dark">
            <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-black text-white`}>
                <div className="flex flex-col min-h-screen">
                    <Navbar />
                    <main className="flex-grow pt-16">
                        {children}
                    </main>
                    <footer className="py-8 text-center text-sm text-[hsl(var(--muted-foreground))] border-t border-[hsl(var(--muted))] mt-20 bg-black flex justify-center items-center gap-2">
                        <span>© 2026 Yash Kakade</span>
                        <span>·</span>
                        <PageViewCounter />
                    </footer>
                </div>
            </body>
        </html>
    );
}
