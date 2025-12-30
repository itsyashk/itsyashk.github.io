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
                        Current Focus
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Balancing engineering, research, and studies at Caltech.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="col-span-1 md:col-span-2 p-6 rounded-2xl border border-white/[0.1] bg-neutral-950 hover:bg-neutral-900 transition-colors">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">Relativity Space</h3>
                                <p className="text-gray-400 text-sm">Robotics Software Engineering Intern</p>
                            </div>
                            <div className="mt-1">
                                <img src="/relativity-logo.png" alt="Relativity Space" className="h-14 w-auto object-contain" />
                            </div>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-300">Perception</span>
                            <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-300">Motion Capture</span>
                            <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-300">Structure from Motion</span>
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-2 p-6 rounded-2xl border border-white/[0.1] bg-neutral-950 hover:bg-neutral-900 transition-colors">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">Caltech</h3>
                                <p className="text-gray-400 text-sm">Undergraduate Researcher</p>
                            </div>
                            <div>
                                <img src="/amber-lab-logo.png" alt="AMBER Lab" className="h-8 w-auto object-contain" />
                            </div>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-300">Control</span>
                            <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-300">Reinforcement Learning</span>
                            <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-300">Humanoid Locomotion</span>
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-1 p-6 rounded-2xl border border-white/[0.1] bg-neutral-950 flex flex-col justify-center items-center text-center">
                        <span className="text-3xl font-bold text-white mb-1">June 2027</span>
                        <span className="text-gray-500 text-xs uppercase tracking-widest">Graduation</span>
                    </div>
                    <div className="col-span-1 md:col-span-3 p-6 rounded-2xl border border-white/[0.1] bg-neutral-950 flex flex-col justify-center">
                        <div className="flex items-center gap-4">
                            <div className="relative h-12 w-12 flex-shrink-0 rounded-full overflow-hidden border border-white/10 bg-white">
                                <img
                                    src="/caltech-logo.png"
                                    alt="Caltech"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-1">
                                    <h4 className="font-bold text-white text-sm md:text-base truncate">California Institute of Technology</h4>
                                    <span className="text-xs font-mono text-gray-300 bg-gray-500/10 px-2 py-0.5 rounded-full border border-gray-500/20">GPA: 3.8/4.0</span>
                                </div>
                                <p className="text-xs text-gray-400 leading-relaxed line-clamp-2 md:line-clamp-none">
                                    B.S. Electrical Engineering (Intelligent Systems) and Business, Economics & Management (BEM)
                                </p>
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
                                ((project as any).image || ((project as any).images && (project as any).images[0])) ? (
                                    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden border border-white/[0.05]">
                                        <img
                                            src={(project as any).image || (project as any).images[0]}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover/bento:scale-105"
                                        />
                                    </div>
                                ) : (
                                    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-900 border border-white/[0.05] relative overflow-hidden">
                                        <div className="absolute inset-0 bg-grid-small-white/[0.2] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
                                    </div>
                                )
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
