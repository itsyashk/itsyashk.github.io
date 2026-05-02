import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PageViewCounter from "@/components/PageViewCounter";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
    metadataBase: new URL("https://itsyashk.github.io"),
    title: {
        default: "Yash Kakade | Robotics + Perception",
        template: "%s | Yash Kakade"
    },
    description: "Caltech undergraduate specializing in robotics, perception, and control.",
    openGraph: {
        title: "Yash Kakade",
        description: "Caltech undergraduate specializing in robotics, perception, and control.",
        url: "https://itsyashk.github.io",
        siteName: "Yash Kakade Portfolio",
        images: [
            {
                url: "/images/about/headshot.jpg",
                width: 800,
                height: 800,
                alt: "Yash Kakade Headshot",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Yash Kakade",
        description: "Caltech undergraduate specializing in robotics, perception, and control.",
        images: ["/images/about/headshot.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth dark">
            <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-black text-white`}>
                {/* Google Analytics */}
                <Script src="https://www.googletagmanager.com/gtag/js?id=G-P0CS2LXLTF" strategy="afterInteractive" />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-P0CS2LXLTF');
                    `}
                </Script>

                <div className="flex flex-col min-h-screen">
                    <Navbar />
                    <main className="flex-grow pt-16">
                        {children}
                    </main>
                    <footer className="py-8 text-center text-sm text-[hsl(var(--muted-foreground))] border-t border-[hsl(var(--muted))] mt-20 bg-black flex justify-center items-center gap-2">
                        <span>© 2026 Yash Kakade</span>
                        <span>·</span>
                        <PageViewCounter />
                        <span>·</span>
                        <span>Last updated March 2026</span>
                    </footer>
                </div>
            </body>
        </html>
    );
}
