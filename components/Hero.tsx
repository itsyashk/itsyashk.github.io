'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";
import { profile } from "@/lib/data";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">

            {/* Background Grid Elements */}
            <div className="absolute inset-0 z-0 bg-grid-small-white/[0.2] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            </div>


            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 max-w-4xl mx-auto"
            >
                {/* <div className="inline-flex items-center rounded-full border border-gray-800 bg-gray-950/50 px-3 py-1 text-sm text-gray-400 mb-8 backdrop-blur-sm">
                    <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                    Currently 
                </div> */}

                <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8">
                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
                        Yash Kakade
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Interested in all things Robotics, Automation, Reinforcement Learning, Perception, Space
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <Link
                        href="/projects"
                        className="h-12 px-8 rounded-full bg-white text-black font-medium text-base inline-flex items-center justify-center hover:bg-gray-200 transition-all hover:scale-105 active:scale-95"
                    >
                        Explore Work
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <a
                        href="https://github.com/itsyashk"
                        target="_blank"
                        className="h-12 px-8 rounded-full border border-gray-800 bg-black text-white font-medium text-base inline-flex items-center justify-center hover:bg-gray-900 transition-all hover:border-gray-600"
                    >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
