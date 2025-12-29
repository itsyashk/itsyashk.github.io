'use client';

import { Mail, Linkedin, Github, Youtube, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Contact() {
    const contacts = [
        {
            name: "Email",
            value: "ykakade@caltech.edu",
            href: "mailto:ykakade@caltech.edu",
            icon: <Mail className="h-6 w-6" />,
            color: "hover:text-blue-400",
        },
        {
            name: "LinkedIn",
            value: "in/yash-kakade",
            href: "https://www.linkedin.com/in/yash-kakade/",
            icon: <Linkedin className="h-6 w-6" />,
            color: "hover:text-blue-600",
        },
        {
            name: "GitHub",
            value: "github.com/itsyashk",
            href: "http://github.com/itsyashk",
            icon: <Github className="h-6 w-6" />,
            color: "hover:text-purple-500",
        },
        {
            name: "YouTube",
            value: "yt.com/@yashkakade4763",
            href: "https://www.youtube.com/@yashkakade4763",
            icon: <Youtube className="h-6 w-6" />,
            color: "hover:text-red-500",
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="w-full max-w-2xl text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
                    Get in Touch
                </h1>
                <p className="text-lg text-gray-400 leading-relaxed font-light">
                    I'm always open to discussing robotics, new opportunities, or just geeking out over tech.
                    Feel free to email me or message me on LinkedIn!
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
                {contacts.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        target={item.name === "Email" ? undefined : "_blank"}
                        rel={item.name === "Email" ? undefined : "noopener noreferrer"}
                        className="group flex items-center p-6 rounded-2xl border border-white/[0.1] bg-neutral-950 hover:bg-neutral-900 transition-all duration-300 hover:scale-[1.02] hover:border-white/[0.2]"
                    >
                        <div className={`p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors ${item.color}`}>
                            {item.icon}
                        </div>
                        <div className="ml-4 flex-1 text-left">
                            <h3 className="text-base font-semibold text-white group-hover:text-white/90 transition-colors">
                                {item.name}
                            </h3>
                            <p className="text-sm text-gray-500 font-mono mt-0.5 truncate">
                                {item.value}
                            </p>
                        </div>
                        <ArrowUpRight className="h-5 w-5 text-neutral-700 group-hover:text-white transition-colors" />
                    </Link>
                ))}
            </div>
        </div>
    );
}
