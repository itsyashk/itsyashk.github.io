'use client';

import Hero from "@/components/Hero";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { projects } from "@/lib/data";
import Link from "next/link";
import { ArrowUpRight, Cpu, Code, Database, Globe } from "lucide-react";

export default function Home() {
    const featured = projects.slice(0, 4);

    return (
        <div className="flex flex-col gap-20 pb-20 bg-black text-white selection:bg-white/20">
            <Hero />

            {/* Proof Section - Bento Style */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
                        Engineering Excellence
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Proven track record in robotics, software, and systems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="col-span-1 md:col-span-2 p-6 rounded-2xl border border-white/[0.1] bg-neutral-950 hover:bg-neutral-900 transition-colors">
                        <h3 className="text-xl font-bold text-white mb-2">Relativity Space</h3>
                        <p className="text-gray-400 text-sm mb-4">Robotics Software Engineering Intern</p>
                        <div className="flex gap-2">
                            <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-300">ROS 2</span>
                            <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-300">Hardware</span>
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-2 p-6 rounded-2xl border border-white/[0.1] bg-neutral-950 hover:bg-neutral-900 transition-colors">
                        <h3 className="text-xl font-bold text-white mb-2">Caltech</h3>
                        <p className="text-gray-400 text-sm mb-4">Undergraduate Researcher</p>
                        <div className="flex gap-2">
                            <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-300">Perception</span>
                            <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-300">Control</span>
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-1 p-6 rounded-2xl border border-white/[0.1] bg-neutral-950 flex flex-col justify-center items-center text-center">
                        <span className="text-4xl font-bold text-white mb-1">2027</span>
                        <span className="text-gray-500 text-xs uppercase tracking-widest">Graduation</span>
                    </div>
                    <div className="col-span-1 md:col-span-3 p-6 rounded-2xl border border-white/[0.1] bg-neutral-950 flex flex-col justify-center">
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                <Code size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Full Stack Robotics</h4>
                                <p className="text-xs text-gray-400">From PCB design to Reinforcement Learning policies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects Bento */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex justify-between items-end mb-10 border-b border-white/[0.1] pb-4">
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
                        Selected Projects
                    </h2>
                    <Link href="/projects" className="text-sm text-gray-400 hover:text-white flex items-center transition-colors">
                        View Archive <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Link>
                </div>

                <BentoGrid>
                    {featured.map((project, i) => (
                        <BentoGridItem
                            key={project.slug}
                            title={project.title}
                            description={project.summary}
                            header={
                                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/[0.05]" />
                            }
                            icon={<Globe className="h-4 w-4 text-neutral-500" />}
                            className={i === 0 || i === 3 ? "md:col-span-2" : ""}
                        />
                    ))}
                </BentoGrid>
            </section>
        </div>
    );
}
